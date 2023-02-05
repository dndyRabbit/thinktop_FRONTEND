import axios from "../../utils/axios";
import produkTypes from "../types/produkTypes";

export const getProduk = (params) => async (dispatch) => {
  try {
    dispatch({
      type: produkTypes.SET_LOADING,
      payload: true
    });
    const response = await axios.get("product");
    const {data: dataProduk = []} = response?.data?.response;
    dispatch({
      type: produkTypes.SET_DATA,
      payload: dataProduk
    });
    setTimeout(() => {
      dispatch({
        type: produkTypes.SET_LOADING,
        payload: false
      });
    }, 800);
    return response;
  } catch (errors) {
    dispatch({
      type: produkTypes.SET_LOADING,
      payload: false
    });
    return errors;
  }
};

export const postProduk = () => async (getState, dispatch) => {
  try {
    const {produk} = getState();
    console.log(produk, "PRODUCT DATA");
    const response = await axios.post("product", produk?.form);
    return response;
  } catch (errors) {
    return errors;
  }
}