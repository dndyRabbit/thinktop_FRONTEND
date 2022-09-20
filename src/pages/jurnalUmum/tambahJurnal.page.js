import React from "react";
import { Box, Card, CardContent, TextField, Typography } from "@mui/material";
import TitleCard from "../../components/shared/TitleCard";
import { useDispatch, useSelector } from "react-redux";
import { warning } from "../../components/shared/Notification";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { postJurnal } from "../../core/redux/actions/jurnal.action";
import { removeTime } from "../../core/utils/removeTime";
import TextInput from "../../components/JurnalUmum/TextInput";

const tipePembayaran = [
  {
    tipe: "Debet",
  },
  { tipe: "Kredit" },
];

const TambahJurnalPage = () => {
  const initialState = {
    nama_akun: "",
    nominal: 0,
    tipe: "",
    keterangan: "",
  };

  const dispatch = useDispatch();

  const { akun, jurnal } = useSelector((state) => state);

  const [data, setData] = React.useState(initialState);
  const [waktu, setWaktu] = React.useState(dayjs());

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmit = async () => {
    if (data.nama_akun === "" || data.tipe === "" || data.nominal === 0) {
      await warning("Data jurnal tidak boleh kosong.");
    } else {
      let newData = {
        ...data,
        waktu: removeTime(waktu.$d),
      };
      dispatch(postJurnal({ newData, setData, initialState }));
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 3 }} component="form">
        <Card elevation={0}>
          <TitleCard title="TAMBAH JURNAL" />

          <CardContent>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Waktu
            </Typography>
            <DatePicker
              value={waktu}
              onChange={(newValue) => setWaktu(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </CardContent>

          <TextInput
            data={data}
            akun={akun}
            handleChangeInput={handleChangeInput}
            tipePembayaran={tipePembayaran}
            onSubmit={onSubmit}
            jurnal={jurnal}
          />
        </Card>
      </Box>
    </LocalizationProvider>
  );
};

export default TambahJurnalPage;
