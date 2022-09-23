import React from "react";
import { Box, Card, CardContent, TextField, Typography } from "@mui/material";

import dayjs from "dayjs";
import { TableWrapper } from "../../components/shared/Table";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import JurnalTable from "../../components/JurnalUmum/Jurnal.table";
import Title from "../../components/JurnalUmum/Title";
import { getJurnal } from "../../core/redux/actions/jurnal.action";

function JurnalUmumPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { jurnal } = useSelector((state) => state);

  const [filterDate, setFilterDate] = React.useState(dayjs());

  const handleNavToDetail = (waktu) => {
    navigate(`/jurnal-umum/${waktu}`, { state: waktu });
  };

  const handleFilterDataByDate = () => {
    console.log(filterDate);
    // dispatch(getJurnal({ waktu: filterDate.$d }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 3 }}>
        <Card elevation={0}>
          <Title
            title={"DATA JURNAL UMUM"}
            navigate={navigate}
            nav={"tambah"}
          />
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
              views={["year", "month"]}
              label="Year and Month"
              minDate={dayjs("2021-12")}
              maxDate={dayjs("2036-12")}
              onChange={(newValue) => setFilterDate(newValue)}
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
              Total Data : {jurnal?.jurnal?.data?.length}
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
              Daftar Jurnal Umum
            </Typography>
            <TableWrapper headers={jurnal?.jurnal?.head} align="center">
              {jurnal?.jurnal?.data?.map((data, index) => (
                <JurnalTable
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
}

export default JurnalUmumPage;
