import { AKUN_TYPES } from "../actions/akun.action";
import { DeleteData } from "../actions/globalTypes.action";

const initialState = {
  loading: false,
  akun: [],
  message: "",
};

const akunReducer = (state = initialState, action) => {
  switch (action.type) {
    case AKUN_TYPES.POST_AKUN:
      state.akun.data.push(action.payload.response.data);
      return {
        ...state,
        akun: {
          ...state.akun,
        },
      };
    case AKUN_TYPES.GET_AKUN:
      return {
        ...state,
        akun: action.payload.response,
      };
    case AKUN_TYPES.DELETE_AKUN:
      return {
        ...state,
        akun: {
          ...state.akun,
          data: DeleteData(state.akun.data, action.payload.uuid_akun),
        },
      };
    case AKUN_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default akunReducer;
