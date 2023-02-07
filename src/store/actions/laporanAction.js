import axios from "../../utils/axios";
import { readPDF } from "../../utils/readerpdf";
import laporanTypes from "../types/laporanTypes";

export const getLaporan = () => async (dispatch, getState) => {
  try {
    const {filter} = getState().laporan;
    const {bulan, tahun} = filter;
    let _bulan = bulan === '' ? '' : new Date(bulan).getMonth();
    let _tahun = tahun === '' ? new Date().getFullYear() : new Date(tahun).getFullYear();
    dispatch({type: laporanTypes.ON_REQUEST_FETCH});
    const response = await axios.get(`laporan?bulan=${_bulan}&tahun=${_tahun}`);
    setTimeout(() => {
      const { data: dataPembelian = [] } = response?.data?.response;
      dispatch({type: laporanTypes.ON_REQUEST_SUCCESS, payload: dataPembelian});
    }, 1000);
    return response;
  } catch (errors) {
    dispatch({type: laporanTypes.ON_REQUEST_FAILURE});
    return errors;
  }
}

export const printLaporan = () => async (dispatch, getState) => {
  try {
    const {filter} = getState().laporan;
    const {bulan, tahun} = filter;
    let _bulan = bulan === '' ? '' : new Date(bulan).getMonth();
    let _tahun = tahun === '' ? new Date().getFullYear() : new Date(tahun).getFullYear();
    return fetch(`http://localhost:2100/api/laporan/print?bulan=${_bulan}&tahun=${_tahun}`, {
      method: 'GET',
    })
    .then(response => response.arrayBuffer())
    .then(async response => {
      const tempData = new Blob([response], {type: 'application/pdf'});
      const urlPDF = await readPDF(tempData);
      return urlPDF;
    });
  } catch (errors) {
    return errors;
  }
}