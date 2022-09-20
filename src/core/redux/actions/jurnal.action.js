import Swal from "sweetalert2";
import { error, success } from "../../../components/shared/Notification";
import {
  postDataAPI,
  getDataAPI,
  putDataAPI,
  deleteDataAPI,
} from "../../utils/fetchData";

export const JURNAL_TYPES = {
  LOADING: "LOADING",
  POST_JURNAL: "POST_JURNAL",
  GET_JURNAL: "GET_JURNAL",
  GET_JURNAL_BY_DATE: "GET_JURNAL_BY_DATE",
  DELETE_JURNAL: "DELETE_JURNAL",
};

export const postJurnal =
  ({ newData, setData, initialState }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: JURNAL_TYPES.LOADING,
        payload: { loading: true },
      });

      const response = await postDataAPI("jurnal", newData);

      dispatch({
        type: JURNAL_TYPES.POST_JURNAL,
        payload: { response: response.data.response.data.waktu },
      });

      dispatch({
        type: JURNAL_TYPES.LOADING,
        payload: { loading: false },
      });

      setData(initialState);
      await success("Berhasil membuat jurnal.");
    } catch (err) {
      dispatch({
        type: JURNAL_TYPES.LOADING,
        payload: { loading: false },
      });
      await error(err.response.data.message);
    }
  };

export const getJurnal = () => async (dispatch) => {
  try {
    dispatch({
      type: JURNAL_TYPES.LOADING,
      payload: { loading: true },
    });

    const response = await getDataAPI("jurnal");

    dispatch({
      type: JURNAL_TYPES.GET_JURNAL,
      payload: { response: response.data.response },
    });

    dispatch({
      type: JURNAL_TYPES.LOADING,
      payload: { loading: false },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteJurnal =
  ({ uuid_jurnal }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: JURNAL_TYPES.LOADING,
        payload: { loading: true },
      });

      await deleteDataAPI(`jurnal/${uuid_jurnal}`);

      dispatch({
        type: JURNAL_TYPES.DELETE_JURNAL,
        payload: { uuid_jurnal },
      });

      dispatch({
        type: JURNAL_TYPES.LOADING,
        payload: { loading: false },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: JURNAL_TYPES.LOADING,
        payload: { loading: false },
      });
      await error(err.response.data.message);
    }
  };
