import { JURNAL_TYPES } from "../actions/jurnal.action";
import { DeleteData } from "../actions/globalTypes.action";

const initialState = {
  loading: false,
  jurnal: {
    data: [],
  },
  message: "",
};

const jurnalReducer = (state = initialState, action) => {
  switch (action.type) {
    case JURNAL_TYPES.POST_JURNAL:
      let date = action.payload.response;
      state.jurnal.data.push(date);
      return {
        ...state,
        jurnal: {
          ...state.jurnal,
        },
      };
    case JURNAL_TYPES.GET_JURNAL:
      return {
        ...state,
        jurnal: action.payload.response,
      };
    case JURNAL_TYPES.DELETE_JURNAL:
      return {
        ...state,
        jurnal: {
          ...state.jurnal,
          data: DeleteData(state.jurnal.data, action.payload.uuid_jurnal),
        },
      };
    case JURNAL_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default jurnalReducer;
