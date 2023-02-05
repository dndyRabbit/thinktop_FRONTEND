import pembelianTypes from "../types/pembelianTypes";

export const initialState = {
  loading: {
    fetch: false,
    delete: false
  },
  data: [],
  form: {
    akun: '',
    uuid_product: '',
    waktu: '',
    tipe: '',
    quantity: 0
  }
};

const pembelianReducer = (state = initialState, action) => {
  switch(action.type) {
    case pembelianTypes.SET_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          ...action?.payload
        }
      };
    case pembelianTypes.ON_REQUEST_FETCH:
      return {
        ...state,
        loading: {
          ...state.loading,
          fetch: true
        }
      };
    case pembelianTypes.ON_REQUEST_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          fetch: false
        }
      };
    case pembelianTypes.ON_REQUEST_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          fetch: false
        },
        data: action?.payload ?? []
      };
    default:
      return state;
  }
};

export default pembelianReducer;