import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { TableWrapper } from "../../components/shared/Table";
import TitleCard from "../../components/shared/TitleCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postAkun } from "../../core/redux/actions/akun.action";

import LoadingButton from "@mui/lab/LoadingButton";
import { warning } from "../../components/shared/Notification";

const TambahAkunPage = () => {
  const initialState = {
    nama_akun: "",
    kode_akun: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { akun } = useSelector((state) => state);

  const [data, setData] = React.useState(initialState);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmit = async () => {
    if (data.kode_akun == "" || data.nama_akun == "") {
      await warning("Data akun tidak boleh kosong.");
    } else {
      dispatch(postAkun({ data, setData, initialState, navigate }));
    }
  };

  return (
    <Box sx={{ p: 3 }} component="form">
      <Card elevation={0}>
        <TitleCard title="Tambah Akun" />
        <CardContent>
          <FormControl fullWidth>
            <InputLabel>Kode Akun</InputLabel>
            <OutlinedInput
              label="Kode Akun"
              name="kode_akun"
              value={data.kode_akun}
              onChange={handleChangeInput}
              required
            />
          </FormControl>
        </CardContent>
        <CardContent>
          <FormControl fullWidth>
            <InputLabel>Nama Akun</InputLabel>
            <OutlinedInput
              label="Nama Akun"
              name="nama_akun"
              value={data.nama_akun}
              onChange={handleChangeInput}
              required
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
            loading={akun.loading ? true : false}
          >
            TAMBAH
          </LoadingButton>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TambahAkunPage;
