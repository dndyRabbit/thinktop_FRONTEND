import { KARYAWAN_TYPES } from "../actions/karyawan.action";
import { DeleteData } from "../actions/globalTypes.action";

const initialState = {
  loading: false,
  karyawan: {
    data: [],
  },
  message: "",
};

const karyawanReducer = (state = initialState, action) => {
  switch (action.type) {
    case KARYAWAN_TYPES.POST_KARYAWAN:
      state.karyawan.data.push(action.payload.response.data);
      return {
        ...state,
        karyawan: {
          ...state.karyawan,
        },
      };
    case KARYAWAN_TYPES.GET_KARYAWAN:
      return {
        ...state,
        karyawan: action.payload.response,
      };
    case KARYAWAN_TYPES.DELETE_KARYAWAN:
      return {
        ...state,
        karyawan: {
          ...state.karyawan,
          data: DeleteData(state.karyawan.data, action.payload.uuid_karyawan),
        },
      };
    case KARYAWAN_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default karyawanReducer;
