import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

import { useEffect } from "react";

import { error } from "../../components/shared/Notification";

import { useLocation } from "react-router-dom";
import { getDataAPI } from "../../core/utils/fetchData";
import { format } from "date-fns";
import DetailDataAkunByDate from "../../components/BukuBesar/DetailDataAkunByDate.table";
import TitleCard from "../../components/shared/TitleCard";
import DetailNeracaSaldoTable from "../../components/NeracaSaldo/DetailNeracaSaldo.table";
import { useSelector } from "react-redux";

const DetailNeracaSaldoPage = () => {
  const location = useLocation();

  const { waktu } = location.state;

  const { jurnal, auth } = useSelector((state) => state);

  const [dataDetailNeracaSaldo, setDataDetailNeracaSaldo] = React.useState({
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
        `detail_neraca_saldo/${waktu}`,
        `bearer ${auth?.auth?.access_token}`
      )
        .then((response) => {
          const tempArr = response?.data?.response?.data;

          const totalDebet = tempArr?.reduce(
            (sum, { debet }) => sum + debet,
            0
          );
          const totalKredit = tempArr?.reduce(
            (sum, { kredit }) => sum + kredit,
            0
          );

          setDataDetailNeracaSaldo(response?.data?.response);
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
  }, [waktu]);

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
            Total Data : {dataDetailNeracaSaldo?.data?.length}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "700" }}
            color="GrayText"
            fontFamily="monospace"
          >
            Periode : {format(new Date(waktu), "dd/MM/yyyy")}
          </Typography>
        </CardContent>
        <DetailNeracaSaldoTable
          dataDetailNeracaSaldo={dataDetailNeracaSaldo}
          total={total}
        />
      </Card>
    </Box>
  );
};

export default DetailNeracaSaldoPage;
