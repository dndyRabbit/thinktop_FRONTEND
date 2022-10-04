import Swal from "sweetalert2";
import { error, success } from "../../../components/shared/Notification";
import {
  postDataAPI,
  getDataAPI,
  putDataAPI,
  deleteDataAPI,
} from "../../utils/fetchData";

export const KARYAWAN_TYPES = {
  LOADING: "LOADING",
  POST_KARYAWAN: "POST_KARYAWAN",
  GET_KARYAWAN: "GET_KARYAWAN",
  PUT_KARYAWAN: "PUT_KARYAWAN",
  DELETE_KARYAWAN: "DELETE_KARYAWAN",
};

export const postKaryawan =
  ({ data, setData, initialState, token }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: KARYAWAN_TYPES.LOADING,
        payload: { loading: true },
      });

      const response = await postDataAPI("karyawan", data, token);

      dispatch({
        type: KARYAWAN_TYPES.POST_KARYAWAN,
        payload: { response: response.data.response },
      });

      dispatch({
        type: KARYAWAN_TYPES.LOADING,
        payload: { loading: false },
      });

      setData(initialState);
      await success("Berhasil mendaftarkan karyawan.");
    } catch (err) {
      dispatch({
        type: KARYAWAN_TYPES.LOADING,
        payload: { loading: false },
      });
      await error(err.response.data.message);
    }
  };

export const getKaryawan = (token) => async (dispatch) => {
  try {
    dispatch({
      type: KARYAWAN_TYPES.LOADING,
      payload: { loading: true },
    });

    const response = await getDataAPI("karyawan", token);

    dispatch({
      type: KARYAWAN_TYPES.GET_KARYAWAN,
      payload: { response: response.data.response },
    });

    dispatch({
      type: KARYAWAN_TYPES.LOADING,
      payload: { loading: false },
    });
  } catch (err) {
    dispatch({
      type: KARYAWAN_TYPES.LOADING,
      payload: { loading: false },
    });
    console.log(err);
  }
};

export const deleteKaryawan =
  ({ uuid_karyawan }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: KARYAWAN_TYPES.LOADING,
        payload: { loading: true },
      });

      await deleteDataAPI(`karyawan/${uuid_karyawan}`);

      dispatch({
        type: KARYAWAN_TYPES.DELETE_KARYAWAN,
        payload: { uuid_karyawan },
      });

      dispatch({
        type: KARYAWAN_TYPES.LOADING,
        payload: { loading: false },
      });
    } catch (err) {
      dispatch({
        type: KARYAWAN_TYPES.LOADING,
        payload: { loading: false },
      });
      await error(err.response.data.message);
    }
  };
