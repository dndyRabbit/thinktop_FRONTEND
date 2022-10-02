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
import LaporanHarianWaktuTable from "../../components/Laporan/Harian/LaporanHarianWaktu.table";
import { error } from "../../components/shared/Notification";
import { getDataAPI } from "../../core/utils/fetchData";

const LaporanHarianPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { api, path } = location.state;

  const [harianDatas, setHarianDatas] = React.useState(null);
  const [filterDataByDate, setFilterDataByDate] = React.useState(dayjs());

  const fetchDatas = async () => {
    await getDataAPI(`${api}/${filterDataByDate.$d}`)
      .then((response) => {
        setHarianDatas(response?.data?.response);
      })
      .catch((err) => {
        error(err?.response?.data?.message);
      });
  };

  React.useEffect(() => {
    fetchDatas();
  }, [api]);

  const handleNavToDetail = (waktu) => {
    navigate(`/laporan/${path}/${waktu}`, { state: { waktu } });
  };

  const handleFilterDataByDate = () => {
    fetchDatas();
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 3 }}>
        <Card elevation={0}>
          <TitleCard title="LAPORAN HARIAN" />
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
              value={filterDataByDate}
              views={["year", "month"]}
              label="Year and Month"
              minDate={dayjs("2021-12")}
              maxDate={dayjs("2036-12")}
              onChange={(newValue) => setFilterDataByDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
            <LoadingButton
              variant="contained"
              color="primary"
              sx={{ ml: 1 }}
              onClick={() => handleFilterDataByDate()}
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
              Total Data : {harianDatas?.data?.length}
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
              Daftar Laporan Harian
            </Typography>
            <TableWrapper headers={harianDatas?.head} align="center">
              {harianDatas?.data?.map((data, index) => (
                <LaporanHarianWaktuTable
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

export default LaporanHarianPage;
