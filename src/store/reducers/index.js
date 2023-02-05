import { combineReducers } from "redux";
import auth from "./authReducer";
import produk from "./produkReducer";
import akun from "./akunReducer";
import pembelian from "./pembelianReducer";
import dashboard from "./dashboard";

export default combineReducers({
  auth,
  produk,
  akun,
  pembelian,
  dashboard
});