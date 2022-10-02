import Swal from "sweetalert2";
import { error, success } from "../../../components/shared/Notification";
import {
  postDataAPI,
  getDataAPI,
  putDataAPI,
  deleteDataAPI,
} from "../../utils/fetchData";

export const PEMBELIAN_TYPES = {
  LOADING: "LOADING",
  POST_PEMBELIAN: "POST_PEMBELIAN",
  GET_PEMBELIAN: "GET_PEMBELIAN",
  GET_PEMBELIAN_BY_DATE: "GET_PEMBELIAN_BY_DATE",
  DELETE_PEMBELIAN: "DELETE_PEMBELIAN",
};

export const postPembelian =
  ({ newData, setData, initialState }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PEMBELIAN_TYPES.LOADING,
        payload: { loading: true },
      });

      const response = await postDataAPI("pembelian", newData);

      dispatch({
        type: PEMBELIAN_TYPES.POST_PEMBELIAN,
        payload: { response: response.data.response.data.waktu },
      });

      dispatch({
        type: PEMBELIAN_TYPES.LOADING,
        payload: { loading: false },
      });

      setData(initialState);
      await success("Berhasil membuat pembelian.");
    } catch (err) {
      dispatch({
        type: PEMBELIAN_TYPES.LOADING,
        payload: { loading: false },
      });
      await error(err.response.data.message);
    }
  };

export const getPembelian =
  ({}) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PEMBELIAN_TYPES.LOADING,
        payload: { loading: true },
      });

      const response = await getDataAPI("pembelian");

      dispatch({
        type: PEMBELIAN_TYPES.GET_PEMBELIAN,
        payload: { response: response.data.response },
      });

      dispatch({
        type: PEMBELIAN_TYPES.LOADING,
        payload: { loading: false },
      });
    } catch (err) {
      console.log(err);
    }
  };

export const deletePembelian =
  ({ uuid_pembelian }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PEMBELIAN_TYPES.LOADING,
        payload: { loading: true },
      });

      await deleteDataAPI(`pembelian/${uuid_pembelian}`);

      dispatch({
        type: PEMBELIAN_TYPES.DELETE_PEMBELIAN,
        payload: { uuid_pembelian },
      });

      dispatch({
        type: PEMBELIAN_TYPES.LOADING,
        payload: { loading: false },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: PEMBELIAN_TYPES.LOADING,
        payload: { loading: false },
      });
      await error(err.response.data.message);
    }
  };
