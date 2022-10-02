import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import TitleCard from "../../components/shared/TitleCard";
import LaporanMenu from "../../components/Laporan/MenuLaporan";

const menu = [
  {
    path: "harian",
    label: "Harian",
    api: "laporan-harian",
  },
  {
    path: "bulanan",
    label: "Bulanan",
    api: "laporan-bulanan",
  },
  {
    path: "tahunan",
    label: "Tahunan",
    api: "laporan-tahunan",
  },
];

function LaporanMenuPage() {
  const navigate = useNavigate();

  const handleNav = (path, api) => {
    navigate(`${path}`, { state: { api, path } });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Card elevation={0}>
        <TitleCard title="LAPORAN" />
        <CardContent>
          <Typography
            variant="body1"
            sx={{ fontWeight: "700" }}
            color="black"
            fontFamily="monospace"
          >
            Daftar Laporan Waktu
          </Typography>
        </CardContent>

        <LaporanMenu data={menu} handleNav={handleNav} />
      </Card>
    </Box>
  );
}

export default LaporanMenuPage;
