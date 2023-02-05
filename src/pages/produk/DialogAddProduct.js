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
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogAddProduct({ handleClose, show, data }) {
  const dispatch = useDispatch();

  const [form, setForm] = React.useState({
    uuid: undefined,
    product_name: '',
    price: 0,
    description: '',
    stock: 0
  });

  React.useEffect(() => {
    if (!data || Array.isArray(data)) return;
    for (const key in data) {
      setForm((old) => ({...old, key: data[key]}));
    }
  }, []);

  const handleSave = () => {
    toast.error('Gagal menyimpan produk', {
      position: 'top-right'
    });
  }
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
              Nama Produk
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
              id="product_name"
              name="product_name"
              placeholder="Contoh: Coffee Latte"
              autoFocus
              value={form.product_name}
              onChange={(e) => dispatch({type: 'produk/setForm', payload: {product_name: e.value}})}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography sx={{ fontSize: 15, mb: 1, fontWeight: "500" }}>
              Deskripsi
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
              id="description"
              name="description"
              multiline
              maxRows={5}
              rows={4}
              value={form.description}
              onChange={(e) => dispatch({type: 'produk/setForm', payload: {description: e.value}})}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography sx={{ fontSize: 15, mb: 1, fontWeight: "500" }}>
              Harga
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
              id="price"
              name="price"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Rp</InputAdornment>
                ),
              }}
              value={form.price}
              onChange={(e) => dispatch({type: 'produk/setForm', payload: {price: e.value}})}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography sx={{ fontSize: 15, mb: 1, fontWeight: "500" }}>
              Stok
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
              onChange={(e) => dispatch({type: 'produk/setForm', payload: {stock: e.value}})}
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
        >
          Simpan
        </Button>
      </DialogActions>
    </Dialog>
  );
}
