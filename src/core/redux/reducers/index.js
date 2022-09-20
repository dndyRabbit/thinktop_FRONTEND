import { combineReducers } from "redux";

import akun from "./akun.reducer";
import jurnal from "./jurnal.reducer";

export default combineReducers({
  akun,
  jurnal,
});
