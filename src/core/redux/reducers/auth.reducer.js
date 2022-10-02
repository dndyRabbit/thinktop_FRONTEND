import { AUTH_TYPES } from "../actions/auth.action";
import { DeleteData } from "../actions/globalTypes.action";

const initialState = {
  loading: false,
  auth: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_TYPES.LOGIN:
      return {
        ...state,
        auth: action.payload.response,
      };
    case AUTH_TYPES.REFRESH_TOKEN:
      return {
        ...state,
        auth: action.payload.response,
      };
    case AUTH_TYPES.LOGOUT:
      return initialState;

    case AUTH_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default authReducer;
