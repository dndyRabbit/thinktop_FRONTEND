import { LoadingButton } from "@mui/lab";
import {
  CardContent,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { formatRupiah } from "../../core/utils/currency";

const TextInput = ({
  data,
  akun,
  handleChangeInput,
  tipePembayaran,
  onSubmit,
  pembelian,
  product,
}) => {
  return (
    <>
      <CardContent>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Akun</InputLabel>
          <Select
            value={data.akun}
            label="Akun"
            name="akun"
            onChange={handleChangeInput}
          >
            {akun?.akun?.data?.map((data, index) => {
              return (
                <MenuItem key={index} value={data?.uuid}>
                  {data?.nama_akun}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>

      <CardContent>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Produk</InputLabel>
          <Select
            value={data.uuid_product}
            label="Produk"
            name="uuid_product"
            onChange={handleChangeInput}
          >
            {product?.product?.data?.map((data, index) => {
              return (
                <MenuItem key={index} value={data?.uuid}>
                  {data?.product_name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>

      {product?.product?.data?.map((item, index) => {
        if (data.uuid_product === item.uuid) {
          return (
            <CardContent
              key={index}
              sx={{
                border: 1,
                mx: 2,
                borderRadius: 1,
                borderColor: "gray",
              }}
            >
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {item?.product_name}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {item?.description}
              </Typography>

              <Typography variant="body2">
                Rp.{formatRupiah(item?.price)},-
              </Typography>
            </CardContent>
          );
        } else {
          return null;
        }
      })}
      <CardContent>
        <FormControl fullWidth>
          <TextField
            label="Quantity"
            variant="outlined"
            name="quantity"
            type={"number"}
            onChange={handleChangeInput}
            value={data.quantity}
          />
        </FormControl>
      </CardContent>

      <CardContent>
        <FormControl fullWidth>
          <InputLabel>Tipe</InputLabel>
          <Select
            value={data.tipe}
            label="Tipe"
            name="tipe"
            onChange={handleChangeInput}
          >
            {tipePembayaran.map((data, index) => (
              <MenuItem key={index} value={data?.tipe}>
                {data?.tipe}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>

      <CardContent>
        <LoadingButton
          color="primary"
          variant="contained"
          disableElevation
          endIcon={<AddIcon />}
          onClick={() => onSubmit()}
          loading={pembelian.loading ? true : false}
        >
          TAMBAH
        </LoadingButton>
      </CardContent>
    </>
  );
};

export default TextInput;
