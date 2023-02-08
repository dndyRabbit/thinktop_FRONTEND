import axios from "../../utils/axios";
import pembelianTypes from "../types/pembelianTypes";
import { toast } from "react-hot-toast";

export const getPembelian = () => async (dispatch) => {
  try {
    dispatch({type: pembelianTypes.ON_REQUEST_FETCH});
    const response = await axios.get(`pembelian`);
    const { data: dataPembelian = [] } = response?.data?.response;
    dispatch({type: pembelianTypes.ON_REQUEST_SUCCESS, payload: dataPembelian});
    return response;
  } catch (errors) {
    dispatch({type: pembelianTypes.ON_REQUEST_FAILURE});
    return errors;
  }
};

export const postPembelian = (handleClose) => async (dispatch, getState) => {
  try {
    dispatch({type: pembelianTypes.ON_POST_REQUEST});
    const {form} = getState().pembelian;
    let _form = {...form};
    _form.waktu = _form?.waktu ? _form?.waktu : new Date();
    for (const key in _form) {
      if (key === "uuid") continue;
      if (_form[key] === "" || _form[key] === 0 || _form[key] === "") {
        toast.error(`${key} wajib diisi.`, {
          position: "top-right",
        });
        throw Error();
      }
    };
    const response = await axios[form.uuid ? `put` : `post`](form.uuid ? `pembelian/${form.uuid}` : `pembelian`, _form);
    toast.success(`Berhasil ${form.uuid ? "edit data" : "menyimpan"} pembelian`, {
      position: "top-right",
    });
    dispatch(getPembelian());
    dispatch({type: pembelianTypes.ON_POST_SUCCESS});
    handleClose();
    return response;
  } catch (errors) {
    dispatch({type: pembelianTypes.ON_POST_FAILURE});
    return errors;
  }
}

export const deletePembelian = (uuid) => async (dispatch) => {
  try {
    const response = await axios.delete(`pembelian/${uuid}`);
    dispatch(getPembelian());
    return response;
  } catch (errors) {
    toast.error('Gagal menghapus transaksi pembelian', {
      position: 'top-right'
    });
    return errors;
  }
}