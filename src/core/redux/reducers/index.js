import { combineReducers } from "redux";

import akun from "./akun.reducer";
import jurnal from "./jurnal.reducer";
import bukuBesar from "./bukuBesar.reducer";

export default combineReducers({
  akun,
  jurnal,
  bukuBesar,
});
