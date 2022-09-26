import React from "react";
import { Box, Card, CardContent, TextField, Typography } from "@mui/material";

import dayjs from "dayjs";
import { TableWrapper } from "../../components/shared/Table";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import TitleCard from "../../components/shared/TitleCard";
import { useEffect } from "react";
import { getDataAPI } from "../../core/utils/fetchData";
import DataAkunTable from "../../components/BukuBesar/DataAkun.table";
import { useSelector } from "react-redux";

const NeracaSaldoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { auth } = useSelector((state) => state);

  const [filterDate, setFilterDate] = React.useState(dayjs());

  const [neracaSaldoData, setNeracaSaldoData] = React.useState({
    data: [],
    head: null,
  });

  const handleNavToDetail = (waktu) => {
    navigate(`${waktu}`, {
      state: { waktu },
    });
  };

  const getNeracaSaldoDate = async () => {
    try {
      const response = await getDataAPI(
        `neraca_saldo/${filterDate.$y}`,
        `bearer ${auth?.auth?.access_token}`
      );

      setNeracaSaldoData(response?.data?.response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNeracaSaldoDate();
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 3 }}>
        <Card elevation={0}>
          <TitleCard title={`NERACA SALDO`} />
          <CardContent
            sx={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "700" }}
              color="black"
              fontFamily="initial"
              mr={1}
            >
              Waktu
            </Typography>
            <DatePicker
              value={filterDate}
              views={["year"]}
              label="Years"
              minDate={dayjs("2021-12")}
              maxDate={dayjs("2036-12")}
              onChange={(newValue) => setFilterDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
            <LoadingButton
              variant="contained"
              color="primary"
              sx={{ ml: 1 }}
              onClick={() => getNeracaSaldoDate()}
            >
              Cari
            </LoadingButton>
          </CardContent>

          <CardContent>
            <Typography
              variant="body1"
              sx={{ fontWeight: "700" }}
              color="GrayText"
              fontFamily="monospace"
            >
              Total Data : {neracaSaldoData?.data?.length ?? "0"}
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "700" }}>
              Daftar Neraca Saldo
            </Typography>
            <TableWrapper headers={neracaSaldoData?.head} align="center">
              {neracaSaldoData?.data?.map((data, index) => (
                <DataAkunTable
                  key={index}
                  data={data}
                  index={index}
                  handleNavToDetail={handleNavToDetail}
                />
              ))}
            </TableWrapper>
          </CardContent>
        </Card>
      </Box>
    </LocalizationProvider>
  );
};

export default NeracaSaldoPage;
