import TYPES from "../types/authTypes";
import axios from "../../utils/axios";
import toast from "react-hot-toast";

/**
 * Action Login
 * @param {Object} body email, password 
 * @returns Promise
 */
export const doLogin = (body) => async (dispatch) => {
  try {
    const {email = undefined, password = undefined} = body;
    dispatch({
      type: TYPES.SET_LOADING,
      payload: true,
    });
    const response = await axios.post("login", {email, password});
    const {access_token = null, refresh_token = null, data = null} = response?.data?.response;
    localStorage.setItem("token", JSON.stringify({access_token, refresh_token}));
    dispatch({
      type: TYPES.SET_TOKEN,
      payload: {access_token, refresh_token}
    });
    dispatch({
      type: TYPES.SET_PROFILE,
      payload: data
    });
    dispatch({
      type: TYPES.SET_IS_LOGGED_IN,
      payload: true
    });
    window.location.reload();
  } catch (errors) {
    const {err = null} = errors?.response?.data;
    if (err !== null) {
      for (const key in err) {
        toast.error(err[key], {
          position: 'top-right',
        });
      }
    }
    return errors;
  }
};