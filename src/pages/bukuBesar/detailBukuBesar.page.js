import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

import { useEffect } from "react";

import { error } from "../../components/shared/Notification";

import { useLocation } from "react-router-dom";
import { getDataAPI } from "../../core/utils/fetchData";
import { format } from "date-fns";
import DetailDataAkunByDate from "../../components/BukuBesar/DetailDataAkunByDate.table";
import TitleCard from "../../components/shared/TitleCard";
import { useSelector } from "react-redux";

const DetailBukuBesar = () => {
  const location = useLocation();

  const { nama_akun, waktu, kode_akun, uuid_akun } = location.state;

  const { jurnal, auth } = useSelector((state) => state);

  const [dataDetailAkun, setDataDetailAkun] = React.useState({
    data: null,
    head: null,
  });
  const [total, setTotal] = React.useState({
    debet: 0,
    kredit: 0,
  });

  useEffect(() => {
    const fetchDatas = async () => {
      await getDataAPI(
        `detail_buku_besar/${uuid_akun}/${waktu}`,
        `bearer ${auth?.auth?.access_token}`
      )
        .then((response) => {
          let data = response?.data?.response?.data;
          const debetArr = data?.map((item) => {
            if (item?.tipe === "Debet") {
              return item?.nominal;
            }
          });
          const tempDebet = debetArr?.filter(function (element) {
            return element !== undefined;
          });
          const totalDebet = tempDebet?.reduce(
            (sum, nominal) => sum + nominal,
            0
          );

          const kreditArr = data?.map((item) => {
            if (item?.tipe === "Kredit") {
              return item?.nominal;
            }
          });
          const tempKredit = kreditArr?.filter(function (element) {
            return element !== undefined;
          });
          const totalKredit = tempKredit?.reduce(
            (sum, nominal) => sum + nominal,
            0
          );

          setDataDetailAkun(response?.data?.response);
          setTotal({
            debet: totalDebet,
            kredit: totalKredit,
          });
        })
        .catch((err) => {
          error(err?.response?.data?.message);
        });
    };
    fetchDatas();
  }, [nama_akun, waktu]);

  return (
    <Box sx={{ p: 3 }}>
      <Card elevation={0}>
        <TitleCard title="DETAIL BUKU BESAR" />
        <CardContent
          sx={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            mb: -3,
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: "700" }}
            color="GrayText"
            fontFamily="monospace"
          >
            Nama Akun : {nama_akun}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "700" }}
            color="GrayText"
            fontFamily="monospace"
          >
            Periode : {format(new Date(waktu), "dd/MM/yyyy")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "700" }}
            color="GrayText"
            fontFamily="monospace"
          >
            Kode Akun : {kode_akun}
          </Typography>
        </CardContent>
        <DetailDataAkunByDate dataDetailAkun={dataDetailAkun} total={total} />
      </Card>
    </Box>
  );
};

export default DetailBukuBesar;
