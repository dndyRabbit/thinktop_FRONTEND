import React from "react";
import { Box, Card } from "@mui/material";

import TitleCard from "../../components/shared/TitleCard";
import { useDispatch, useSelector } from "react-redux";
import { warning } from "../../components/shared/Notification";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { postKaryawan } from "../../core/redux/actions/karyawan.action";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TambahKaryawanTexInputs from "../../components/Karyawan/TambahKaryawan.textinputs";

const TambahKaryawanPage = () => {
  const initialState = {
    full_name: "",
    email: "",
    password: "",
    role: 1,
    nickname: "",
    address: "",
    handphone: "",
    gender: "",
    occupation: "",
    cf_password: "",
    birthday: dayjs(),
  };

  const dispatch = useDispatch();

  const { auth, karyawan } = useSelector((state) => state);

  const [data, setData] = React.useState(initialState);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmit = async () => {
    if (data.full_name === "" || data.email === "" || data.password === "") {
      await warning("Data karyawan tidak boleh kosong.");
    } else {
      dispatch(
        postKaryawan({
          data,
          setData,
          initialState,
          token: `bearer ${auth?.auth?.access_token}`,
        })
      );
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 3 }} component="form">
        <Card elevation={0}>
          <TitleCard title="TAMBAH KARYAWAN" />
          <TambahKaryawanTexInputs
            data={data}
            setData={setData}
            karyawan={karyawan}
            handleChangeInput={handleChangeInput}
            onSubmit={onSubmit}
          />
        </Card>
      </Box>
    </LocalizationProvider>
  );
};

export default TambahKaryawanPage;
