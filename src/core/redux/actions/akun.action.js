import Swal from "sweetalert2";
import { error, success } from "../../../components/shared/Notification";
import {
  postDataAPI,
  getDataAPI,
  putDataAPI,
  deleteDataAPI,
} from "../../utils/fetchData";

export const AKUN_TYPES = {
  LOADING: "LOADING",
  POST_AKUN: "POST_AKUN",
  GET_AKUN: "GET_AKUN",
  PUT_AKUN: "PUT_AKUN",
  DELETE_AKUN: "DELETE_AKUN",
};

export const postAkun =
  ({ data, setData, initialState, navigate, token }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: AKUN_TYPES.LOADING,
        payload: { loading: true },
      });

      const response = await postDataAPI("akun", data, token);

      dispatch({
        type: AKUN_TYPES.POST_AKUN,
        payload: { response: response.data.response },
      });

      dispatch({
        type: AKUN_TYPES.LOADING,
        payload: { loading: false },
      });

      setData(initialState);
      await success("Berhasil membuat akun.");
      navigate("/akun");
    } catch (err) {
      dispatch({
        type: AKUN_TYPES.LOADING,
        payload: { loading: false },
      });
      await error(err.response.data.message);
    }
  };

export const getAkun = (token) => async (dispatch) => {
  try {
    dispatch({
      type: AKUN_TYPES.LOADING,
      payload: { loading: true },
    });

    const response = await getDataAPI("akun", token);

    dispatch({
      type: AKUN_TYPES.GET_AKUN,
      payload: { response: response.data.response },
    });

    dispatch({
      type: AKUN_TYPES.LOADING,
      payload: { loading: false },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAkun =
  ({ uuid_akun }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: AKUN_TYPES.LOADING,
        payload: { loading: true },
      });

      await deleteDataAPI(`akun/${uuid_akun}`);

      dispatch({
        type: AKUN_TYPES.DELETE_AKUN,
        payload: { uuid_akun },
      });

      dispatch({
        type: AKUN_TYPES.LOADING,
        payload: { loading: false },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: AKUN_TYPES.LOADING,
        payload: { loading: false },
      });
      await error(err.response.data.message);
    }
  };
