import karyawanTypes from "../types/karyawanTypes";

const initialState = {
  data: [],
  loading: {
    getKaryawan: false,
  },
  form: {
    full_name: null,
    email: null,
    password: null,
    role: null,
    nickname: null,
    address: null,
    handphone: null,
    gender: null,
    occupation: null,
    birthday: null,
  }
};

const karyawanReducer = (state = initialState, action) => {
  switch(action.type) {
    case karyawanTypes.ON_REQUEST_FETCH:
      return {
        ...state,
        data: [],
        loading: {
          ...state.loading,
          getKaryawan: true
        }
      };
    case karyawanTypes.ON_REQUEST_FAILURE:
      return {
        ...state,
        data: [],
        loading: {
          ...state.loading,
          getKaryawan: false
        }
      };
    case karyawanTypes.ON_REQUEST_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          getKaryawan: false
        },
        data: action?.payload ?? []
      };
    case karyawanTypes.SET_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          ...action?.payload
        }
      }
    default:
      return state;
  }
};

export default karyawanReducer;