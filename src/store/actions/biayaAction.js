import { toast } from "react-hot-toast";
import axios from "../../utils/axios";
import biayaTypes from "../types/biayaTypes";

export const getBiaya = () => async (dispatch) => {
  try {
    dispatch({type: biayaTypes.ON_REQUEST_FETCH});
    const response = await axios.get(`biaya`);
    setTimeout(() => {
      const {data: dataBiaya = []} = response?.data?.response;
      dispatch({type: biayaTypes.ON_REQUEST_SUCCESS, payload: dataBiaya});
    }, 1000);
    return response;
  } catch (errors) {
    dispatch({type: biayaTypes.ON_REQUEST_FAILURE});
    return errors;
  }
};

export const postBiaya = (callback) => async (dispatch, getState) => {
  try {
    dispatch({type: biayaTypes.ON_POST_REQUEST});
    const {form} = getState().biaya;
    for (const key in form) {
      if (key === "uuid") continue;
      if (form[key] === "" || form[key] === null) {
        toast.error(`${key} wajib diisi.`, {
          position: "top-right",
        });
        throw Error();
      }
    };
    const {uuid = null} = form;
    const response = await axios[uuid ? 'put' : 'post'](uuid ? `biaya/${uuid}` : `biaya`, form);
    setTimeout(() => {
      toast.success('Berhasil menyimpan data biaya.', {
        position: 'top-right'
      });
      dispatch({type: biayaTypes.ON_POST_SUCCESS});
      dispatch(getBiaya());
      callback();
    }, 800);
    return response;
  } catch (errors) {
    dispatch({type: biayaTypes.ON_POST_FAILURE});
    return errors;
  }
}