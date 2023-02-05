import { toast } from "react-hot-toast";
import axios from "../../utils/axios";
import produkTypes from "../types/produkTypes";

export const getProduk = (params) => async (dispatch) => {
  try {
    dispatch({
      type: produkTypes.SET_LOADING,
      payload: true,
    });
    const response = await axios.get("product");
    const { data: dataProduk = [] } = response?.data?.response;
    dispatch({
      type: produkTypes.SET_DATA,
      payload: dataProduk,
    });
    setTimeout(() => {
      dispatch({
        type: produkTypes.SET_LOADING,
        payload: false,
      });
    }, 800);
    return response;
  } catch (errors) {
    dispatch({
      type: produkTypes.SET_LOADING,
      payload: false,
    });
    return errors;
  }
};

export const postProduk = () => async (dispatch, getState) => {
  try {
    dispatch({ type: produkTypes.REQUEST_POST_PRODUK });
    const {
      produk: { form = {} },
    } = getState();
    const response = await axios[form.uuid ? 'put' : 'post'](form.uuid ? `product/${form.uuid}` : "product", form);
    dispatch(getProduk());
    toast.success(`Berhasil ${form.uuid ? 'edit data' : 'menyimpan'} produk`, {
      position: "top-right",
    });
    dispatch({ type: produkTypes.REQUEST_POST_PRODUK_SUCCESS });
    return response;
  } catch (errors) {
    dispatch({ type: produkTypes.REQUEST_POST_PRODUK_SUCCESS });
    return errors;
  }
};

export const deleteProduk = (uuid) => async (dispatch) => {
  try {
    const response = await axios.delete(`product/${uuid}`);
    dispatch(getProduk());
    return response;
  } catch (errors) {
    return errors;
  }
};
