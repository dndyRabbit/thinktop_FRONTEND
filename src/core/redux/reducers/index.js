import { combineReducers } from "redux";

import akun from "./akun.reducer";
import jurnal from "./jurnal.reducer";
import auth from "./auth.reducer";

export default combineReducers({
  akun,
  jurnal,
  auth,
});
