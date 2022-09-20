import { LoadingButton } from "@mui/lab";
import {
  CardContent,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const TextInput = ({
  data,
  akun,
  handleChangeInput,
  tipePembayaran,
  onSubmit,
  jurnal,
}) => {
  return (
    <>
      <CardContent>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Akun</InputLabel>
          <Select
            value={data.nama_akun}
            label="Akun"
            name="nama_akun"
            onChange={handleChangeInput}
          >
            {akun?.akun?.data?.map((data, index) => {
              return (
                <MenuItem key={index} value={data?.nama_akun}>
                  {data?.nama_akun}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>

      <CardContent>
        <FormControl fullWidth>
          <InputLabel>Nominal</InputLabel>
          <OutlinedInput
            label="Pendapatan"
            name="nominal"
            value={data.nominal}
            onChange={handleChangeInput}
            required
            startAdornment={
              <InputAdornment position="start">Rp.</InputAdornment>
            }
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
        <FormControl fullWidth>
          <InputLabel>Keterangan</InputLabel>
          <OutlinedInput
            label="Keterangan"
            name="keterangan"
            value={data.keterangan}
            onChange={handleChangeInput}
          />
        </FormControl>
      </CardContent>

      <CardContent>
        <LoadingButton
          color="primary"
          variant="contained"
          disableElevation
          endIcon={<AddIcon />}
          onClick={() => onSubmit()}
          loading={jurnal.loading ? true : false}
        >
          TAMBAH
        </LoadingButton>
      </CardContent>
    </>
  );
};

export default TextInput;
