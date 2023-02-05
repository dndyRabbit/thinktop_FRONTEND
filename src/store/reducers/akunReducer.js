import akunTypes from "../types/akunTypes";

const initialState = {
  loading: {
    getAkun: false,
    postAkun: false,
    deleteAkun: false
  },
  form: {
    uuid: undefined,
    kode_akun: '',
    nama_akun: '',
    kategori: '',
  },
  dataAkun: [],
  headersAkun: ['Kode', 'Nama Akun'],
};

const akunReducer = (state = initialState, action) => {
  switch(action.type) {
    case akunTypes.GET_AKUN:
      return {
        ...state,
        loading: {
          ...state.loading,
          getAkun: true
        },
      };
    case akunTypes.POST_AKUN:
      return {
        ...state,
        loading: {
          ...state.loading,
          postAkun: true
        }
      };
    case akunTypes.GET_AKUN_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          getAkun: false
        },
        dataAkun: []
      };
    case akunTypes.GET_AKUN_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          getAkun: false
        },
        dataAkun: action?.payload ?? []
      };
    default:
      return state;
  }
};

export default akunReducer;