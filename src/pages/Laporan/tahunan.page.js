import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

import { TableWrapper } from "../../components/shared/Table";
import { useLocation, useNavigate } from "react-router-dom";
import TitleCard from "../../components/shared/TitleCard";
import { error } from "../../components/shared/Notification";
import { getDataAPI } from "../../core/utils/fetchData";
import LaporanTahunanWaktuTable from "../../components/Laporan/Tahunan/LaporanTahunanWaktu.table";
import { useSelector } from "react-redux";

const LaporanTahunanPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { api, path } = location.state;
  const { auth } = useSelector((state) => state);

  const [tahunanWaktu, setTahunanWaktu] = React.useState(null);

  React.useEffect(() => {
    const fetchDatas = async () => {
      await getDataAPI(api, `bearer ${auth?.auth?.access_token}`)
        .then((response) => {
          setTahunanWaktu(response?.data?.response);
        })
        .catch((err) => {
          error(err?.response?.data?.message);
        });
    };
    fetchDatas();
  }, [api]);

  const handleNavToDetail = (waktu) => {
    navigate(`/laporan/${path}/${waktu}`, { state: { waktu } });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Card elevation={0}>
        <TitleCard title="LAPORAN TAHUNAN" />
        <CardContent>
          <Typography
            variant="body1"
            sx={{ fontWeight: "700" }}
            color="GrayText"
            fontFamily="monospace"
          >
            Total Data : {tahunanWaktu?.data?.length}
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
          <TableWrapper headers={tahunanWaktu?.head} align="center">
            {tahunanWaktu?.data?.map((data, index) => (
              <LaporanTahunanWaktuTable
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
  );
};

export default LaporanTahunanPage;
