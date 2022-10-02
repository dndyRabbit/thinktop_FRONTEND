import { PEMBELIAN_TYPES } from "../actions/pembelian.action";
import { DeleteData } from "../actions/globalTypes.action";

const initialState = {
  loading: false,
  pembelian: {
    data: [],
  },
  message: "",
};

const pembelianReducer = (state = initialState, action) => {
  switch (action.type) {
    case PEMBELIAN_TYPES.POST_PEMBELIAN:
      let date = action.payload.response;
      state.pembelian.data.push(date);
      return {
        ...state,
        pembelian: {
          ...state.pembelian,
        },
      };
    case PEMBELIAN_TYPES.GET_PEMBELIAN:
      return {
        ...state,
        pembelian: action.payload.response,
      };
    case PEMBELIAN_TYPES.DELETE_PEMBELIAN:
      return {
        ...state,
        pembelian: {
          ...state.pembelian,
          data: DeleteData(state.pembelian.data, action.payload.uuid_pembelian),
        },
      };
    case PEMBELIAN_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default pembelianReducer;
