import { combineReducers } from "redux";
import auth from "./authReducer";
import produk from "./produkReducer";
import akun from "./akunReducer";


export default combineReducers({
  auth,
  produk,
  akun
});