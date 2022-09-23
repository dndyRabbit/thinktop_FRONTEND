import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TitleCard from "../../components/shared/TitleCard";
import DaftarAkunContent from "../../components/BukuBesar/DaftarAkunContent";

function BukuBesarPage() {
  const navigate = useNavigate();

  const { akun } = useSelector((state) => state);

  const handleNav = ({ uuid_akun, nama_akun, kode_akun }) => {
    navigate(`${nama_akun}`, { state: { uuid_akun, nama_akun, kode_akun } });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Card elevation={0}>
        <TitleCard title="BUKU BESAR" />
        <CardContent>
          <Typography
            variant="body1"
            sx={{ fontWeight: "700" }}
            color="black"
            fontFamily="monospace"
          >
            Daftar Akun
          </Typography>
        </CardContent>

        <DaftarAkunContent data={akun?.akun?.data} handleNav={handleNav} />
      </Card>
    </Box>
  );
}

export default BukuBesarPage;
