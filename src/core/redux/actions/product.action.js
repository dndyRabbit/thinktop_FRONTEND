import Swal from "sweetalert2";
import { error, success } from "../../../components/shared/Notification";
import {
  postDataAPI,
  getDataAPI,
  putDataAPI,
  deleteDataAPI,
} from "../../utils/fetchData";

export const PRODUCT_TYPES = {
  LOADING: "LOADING",
  POST_PRODUCT: "POST_PRODUCT",
  GET_PRODUCT: "GET_PRODUCT",
  PUT_PRODUCT: "PUT_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
};

export const postProduct =
  ({ data, setData, initialState, token }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PRODUCT_TYPES.LOADING,
        payload: { loading: true },
      });

      const response = await postDataAPI("product", data, token);

      dispatch({
        type: PRODUCT_TYPES.POST_PRODUCT,
        payload: { response: response.data.response },
      });

      dispatch({
        type: PRODUCT_TYPES.LOADING,
        payload: { loading: false },
      });

      setData(initialState);
      await success("Berhasil membuat product.");
    } catch (err) {
      dispatch({
        type: PRODUCT_TYPES.LOADING,
        payload: { loading: false },
      });
      await error(err.response.data.message);
    }
  };

export const getProduct = (token) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_TYPES.LOADING,
      payload: { loading: true },
    });

    const response = await getDataAPI("product", token);

    dispatch({
      type: PRODUCT_TYPES.GET_PRODUCT,
      payload: { response: response.data.response },
    });

    dispatch({
      type: PRODUCT_TYPES.LOADING,
      payload: { loading: false },
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_TYPES.LOADING,
      payload: { loading: false },
    });
    console.log(err);
  }
};

export const deleteProduct =
  ({ uuid_product, token }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PRODUCT_TYPES.LOADING,
        payload: { loading: true },
      });

      await deleteDataAPI(`product/${uuid_product}`, token);

      dispatch({
        type: PRODUCT_TYPES.DELETE_PRODUCT,
        payload: { uuid_product },
      });

      dispatch({
        type: PRODUCT_TYPES.LOADING,
        payload: { loading: false },
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_TYPES.LOADING,
        payload: { loading: false },
      });
      await error(err.response.data.message);
    }
  };
