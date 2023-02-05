import akunTypes from "../types/akunTypes";
import axios from "../../utils/axios";

export const getAkun = () => async (dispatch) => {
  try {
    dispatch({type: akunTypes.GET_AKUN});
    const response = await axios.get("akun");
    const {data: dataAkun = []} = response?.data?.response;
    dispatch({type: akunTypes.GET_AKUN_SUCCESS, payload: dataAkun});
    return response;
  } catch (errors) {
    dispatch({type: akunTypes.GET_AKUN_FAILURE});
    return errors;
  }
};

export const postAkun = () => async (getState) => {
  try {
    const {akun: {form}} = getState();
    const response = await axios.post("akun", form);
    return response;
  } catch (errors) {
    return errors;
  }
};