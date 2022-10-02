import { combineReducers } from "redux";

import akun from "./akun.reducer";
import product from "./product.reducer";
import pembelian from "./pembelian.reducer";
import auth from "./auth.reducer";

export default combineReducers({
  akun,
  auth,
  product,
  pembelian,
});
