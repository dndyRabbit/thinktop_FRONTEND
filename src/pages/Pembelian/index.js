import React from "react";
import { Box, Card, CardContent, TextField, Typography } from "@mui/material";
import TitleCard from "../../components/shared/TitleCard";
import { useDispatch, useSelector } from "react-redux";
import { warning } from "../../components/shared/Notification";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { removeTime } from "../../core/utils/removeTime";
import { postPembelian } from "../../core/redux/actions/pembelian.action";
import TextInput from "../../components/Pembelian/TextInput";

const tipePembayaran = [
  {
    tipe: "Debet",
  },
  { tipe: "Kredit" },
  { tipe: "Cash" },
];

const TambahPembelianPage = () => {
  const initialState = {
    akun: "",
    uuid_product: "",
    tipe: "",
    quantity: 0,
  };

  const dispatch = useDispatch();

  const { akun, pembelian, auth, product } = useSelector((state) => state);

  const [data, setData] = React.useState(initialState);
  const [waktu, setWaktu] = React.useState(dayjs());

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmit = async () => {
    if (data.uuid_product === "" || data.tipe === "" || data.akun === "") {
      await warning("Data pembelian tidak boleh kosong.");
    } else {
      let newData = {
        ...data,
        waktu: removeTime(waktu.$d),
      };
      dispatch(
        postPembelian({
          newData,
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
          <TitleCard title="TAMBAH PEMBELIAN" />

          <CardContent>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Waktu
            </Typography>
            <DatePicker
              minDate={dayjs("2018-12")}
              maxDate={dayjs("2036-12")}
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
            pembelian={pembelian}
            product={product}
          />
        </Card>
      </Box>
    </LocalizationProvider>
  );
};

export default TambahPembelianPage;
