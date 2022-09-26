import Swal from "sweetalert2";
import {
  error,
  success,
  confirmation,
} from "../../../components/shared/Notification";
import {
  postDataAPI,
  getDataAPI,
  putDataAPI,
  deleteDataAPI,
} from "../../utils/fetchData";

export const AUTH_TYPES = {
  LOADING: "LOADING",
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  REFRESH_TOKEN: "REFRESH_TOKEN",
  LOGOUT: "LOGOUT",
};

export const login = (data) => async (dispatch) => {
  try {
    dispatch({
      type: AUTH_TYPES.LOADING,
      payload: { loading: true },
    });

    const response = await postDataAPI("login", data);

    localStorage.setItem("firstLogin", true);
    localStorage.setItem(
      "refreshToken",
      JSON.stringify({
        rf_token: response.data.response.refresh_token,
        email: response.data.response.data.email,
      })
    );

    dispatch({
      type: AUTH_TYPES.LOGIN,
      payload: { response: response.data.response },
    });

    dispatch({
      type: AUTH_TYPES.LOADING,
      payload: { loading: false },
    });

    await success("Berhasil melakukan login.");
  } catch (err) {
    dispatch({
      type: AUTH_TYPES.LOADING,
      payload: { loading: false },
    });
    await error(err.response.data.message);
  }
};

// export const register = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: AKUN_TYPES.LOADING,
//       payload: { loading: true },
//     });

//     const response = await getDataAPI("akun");

//     dispatch({
//       type: AKUN_TYPES.GET_AKUN,
//       payload: { response: response.data.response },
//     });

//     dispatch({
//       type: AKUN_TYPES.LOADING,
//       payload: { loading: false },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const refreshToken = () => async (dispatch) => {
  try {
    const firstLogin = localStorage.getItem("firstLogin");
    const refreshToken = localStorage.getItem("refreshToken");

    if (firstLogin) {
      const obj = JSON.parse(refreshToken);

      const res = await postDataAPI("refresh_token", {
        rf_token: obj.rf_token,
      });

      dispatch({
        type: AUTH_TYPES.REFRESH_TOKEN,
        payload: { response: res.data.response },
      });
    }
  } catch (err) {
    await error(err.response.data.message);
  }
};

export const logout = () => async (dispatch) => {
  await confirmation("Apakah kamu yakin ingin logout akun?").then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      dispatch({
        type: AUTH_TYPES.LOGIN,
        payload: { response: null },
      });
      Swal.fire("Logouted!", "Keluar akun berhasil.", "success");
    } else {
      console.log("Tidak jadi logout.");
    }
  });

  try {
  } catch (err) {
    await error(err.response.data.message);
  }
};
