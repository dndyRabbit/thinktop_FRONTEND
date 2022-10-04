import { LoadingButton } from "@mui/lab";
import {
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const TambahKaryawanTexInputs = ({
  data,
  handleChangeInput,
  karyawan,
  setData,
  onSubmit,
}) => {
  return (
    <>
      <CardContent>
        <FormControl fullWidth>
          <TextField
            label="Nama Lengkap"
            name="full_name"
            value={data.full_name}
            onChange={handleChangeInput}
            required
          />
        </FormControl>
      </CardContent>
      <CardContent>
        <FormControl fullWidth>
          <TextField
            label="Email"
            name="email"
            value={data.email}
            onChange={handleChangeInput}
            required
          />
        </FormControl>
      </CardContent>

      <CardContent>
        <FormControl fullWidth>
          <TextField
            label="Password"
            name="password"
            type="password"
            helperText="*Password minimal mengandung huruf kecil, huruf besar, angka, dan minimal 8 karakter."
            value={data.password}
            onChange={handleChangeInput}
            required
          />
        </FormControl>
      </CardContent>

      <CardContent>
        <FormControl fullWidth>
          <TextField
            label="Confirmation Password"
            name="cf_password"
            type="password"
            value={data.cf_password}
            onChange={handleChangeInput}
            required
          />
        </FormControl>
      </CardContent>

      <CardContent>
        <FormControl fullWidth>
          <TextField
            label="Nama Panggilan"
            name="nickname"
            value={data.nickname}
            onChange={handleChangeInput}
          />
        </FormControl>
      </CardContent>
      <CardContent>
        <FormControl fullWidth>
          <TextField
            label="Alamat"
            name="address"
            value={data.address}
            onChange={handleChangeInput}
          />
        </FormControl>
      </CardContent>

      <CardContent>
        <FormControl fullWidth>
          <TextField
            label="No Handphone"
            name="handphone"
            value={data.handphone}
            onChange={handleChangeInput}
          />
        </FormControl>
      </CardContent>

      <CardContent>
        <FormControl fullWidth>
          <InputLabel>Jenis Kelamin</InputLabel>
          <Select
            value={data.gender}
            label="Jenis Kelamin"
            name="gender"
            onChange={handleChangeInput}
          >
            <MenuItem value="00">Laki - laki</MenuItem>
            <MenuItem value="01">Perempuan</MenuItem>
          </Select>
        </FormControl>
      </CardContent>

      <CardContent>
        <FormControl fullWidth>
          <TextField
            label="Jabatan"
            name="occupation"
            value={data.occupation}
            onChange={handleChangeInput}
          />
        </FormControl>
      </CardContent>

      <CardContent>
        <DatePicker
          value={data.birthday}
          label="Tanggal Lahir"
          minDate={dayjs("1990-12")}
          maxDate={dayjs("2023-01")}
          onChange={(val) => setData({ ...data, birthday: val.$d })}
          renderInput={(params) => <TextField {...params} />}
        />
      </CardContent>

      <CardContent>
        <LoadingButton
          color="primary"
          variant="contained"
          disableElevation
          endIcon={<AddIcon />}
          onClick={() => onSubmit()}
          loading={karyawan.loading ? true : false}
        >
          TAMBAH
        </LoadingButton>
      </CardContent>
    </>
  );
};

export default TambahKaryawanTexInputs;
