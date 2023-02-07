import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  InputAdornment,
  Grid,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { postProduk } from "../../store/actions/produkAction";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogAddKaryawan({ handleClose, show, data }) {
  const dispatch = useDispatch();
  const { form, loadingPostProduct } = useSelector((state) => state.produk);

  const handleSave = async () => {
    try {
      dispatch(postProduk(handleClose));
    } catch (errors) {
      return errors;
    }
  };
  return (
    <Dialog
      open={show}
      TransitionComponent={Transition}
      maxWidth="md"
      fullWidth
      disableEscapeKeyDown={true}
    >
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography sx={{ fontSize: 15, mb: 1, fontWeight: "500" }}>
              Nama Lengkap
            </Typography>
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 2,
                  },
                },
              }}
              variant="outlined"
              required
              fullWidth
              autoFocus
              value={form.full_name}
              onChange={(e) =>
                dispatch({
                  type: "karyawan/setForm",
                  payload: { full_name: e.target.value },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography sx={{ fontSize: 15, mb: 1, fontWeight: "500" }}>
              Alamat
            </Typography>
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 2,
                  },
                },
              }}
              variant="outlined"
              required
              fullWidth
              multiline
              maxRows={5}
              rows={4}
              value={form.address}
              onChange={(e) =>
                dispatch({
                  type: "karyawan/setForm",
                  payload: { address: e.target.value },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography sx={{ fontSize: 15, mb: 1, fontWeight: "500" }}>
              Tanggal Lahir
            </Typography>
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 2,
                  },
                },
              }}
              variant="outlined"
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Rp</InputAdornment>
                ),
              }}
              value={form.price}
              onChange={(e) =>
                dispatch({
                  type: "produk/setForm",
                  payload: { price: e.target.value },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography sx={{ fontSize: 15, mb: 1, fontWeight: "500" }}>
              Jenis Kelamin
            </Typography>
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 2,
                  },
                },
              }}
              variant="outlined"
              required
              fullWidth
              id="stock"
              name="stock"
              value={form.stock}
              onChange={(e) =>
                dispatch({
                  type: "produk/setForm",
                  payload: { stock: e.target.value },
                })
              }
              disabled={loadingPostProduct}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography sx={{ fontSize: 15, mb: 1, fontWeight: "500" }}>
              Nomor Handpone
            </Typography>
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 2,
                  },
                },
              }}
              variant="outlined"
              required
              fullWidth
              value={form.handphone}
              onChange={(e) =>
                dispatch({
                  type: "karyawan/setForm",
                  payload: { handphone: e.target.value },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography sx={{ fontSize: 15, mb: 1, fontWeight: "500" }}>
              Email
            </Typography>
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 2,
                  },
                },
              }}
              variant="outlined"
              required
              fullWidth
              value={form.email}
              onChange={(e) =>
                dispatch({
                  type: "karyawan/setForm",
                  payload: { email: e.target.value },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography sx={{ fontSize: 15, mb: 1, fontWeight: "500" }}>
              Username
            </Typography>
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 2,
                  },
                },
              }}
              variant="outlined"
              required
              fullWidth
              value={form.nickname}
              onChange={(e) =>
                dispatch({
                  type: "karyawan/setForm",
                  payload: { nickname: e.target.value },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography sx={{ fontSize: 15, mb: 1, fontWeight: "500" }}>
              Password
            </Typography>
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 2,
                  },
                },
              }}
              variant="outlined"
              required
              fullWidth
              value={form.password}
              onChange={(e) =>
                dispatch({
                  type: "karyawan/setForm",
                  payload: { password: e.target.value },
                })
              }
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Batalkan</Button>
        <Button
          onClick={handleSave}
          variant="contained"
          disableElevation
          color="success"
          disabled={loadingPostProduct}
        >
          Simpan
        </Button>
      </DialogActions>
    </Dialog>
  );
}
