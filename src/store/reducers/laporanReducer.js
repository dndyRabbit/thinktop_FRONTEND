import laporanTypes from "../types/laporanTypes";

const initialState = {
  filter: {
    bulan: '',
    tahun: ''
  },
  loading: {
    request: false
  },
  data: []
};

export const laporanReducer = (state = initialState, action) => {
  switch(action.type) {
    case laporanTypes.SET_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action?.payload
        }
      };
    case laporanTypes.ON_REQUEST_FETCH: {
      return {
        ...state,
        loading: {
          ...state.loading,
          request: true
        },
        data: []
      };
    }
    case laporanTypes.ON_REQUEST_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          request: false
        },
        data: action?.payload ?? []
      };
    }
    case laporanTypes.ON_REQUEST_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          request: false
        },
        data: []
      };
    }
    default:
      return state;
  }
};

export default laporanReducer;