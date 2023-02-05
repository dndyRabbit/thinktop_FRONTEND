import { combineReducers } from "redux";
import auth from "./authReducer";
import produk from "./produkReducer";

export default combineReducers({
  auth,
  produk
});