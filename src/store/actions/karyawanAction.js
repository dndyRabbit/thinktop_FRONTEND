import { toast } from "react-hot-toast";
import axios from "../../utils/axios";
import karyawanTypes from "../types/karyawanTypes";

export const getKaryawan = () => async (dispatch) => {
  try {
    dispatch({type: karyawanTypes.ON_REQUEST_FETCH});
    const response = await axios.get(`karyawan`);
    setTimeout(() => {
      const {data: dataKaryawan = []} = response?.data?.response;
      dispatch({type: karyawanTypes.ON_REQUEST_SUCCESS, payload: dataKaryawan});
    }, 1000);
    return response;
  } catch (errors) {
    dispatch({type: karyawanTypes.ON_REQUEST_FAILURE});
    return errors;
  }
};

export const postKaryawan = (handleClose) => async (dispatch, getState) => {
  try {
    dispatch({type: karyawanTypes.ON_POST_REQUEST});
    const {form} = getState().karyawan;
    for (const key in form) {
      if (form[key] === null) {
        toast.error(`${key} wajib diisi.`, {
          position: "top-right",
        });
        throw Error(`${key} wajib diisi.`);
      }
    };
    const response = await axios.post(`karyawan`, form);
    dispatch(getKaryawan());
    dispatch({type: karyawanTypes.ON_POST_SUCCESS});
    toast.success('Berhasil menambahkan karyawan.', {position: 'top-right'});
    handleClose();
    return response;
  } catch (errors) {
    dispatch({type: karyawanTypes.ON_POST_FAILURE});
    return errors;
  }
}

export const deleteKaryawan = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`karyawan/${id}`);
    dispatch(getKaryawan());
    return response;
  } catch (errors) {
    return errors;
  }
}