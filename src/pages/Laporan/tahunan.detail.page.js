import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { confirmation, error } from "../../components/shared/Notification";

import { useLocation } from "react-router-dom";
import { getDataAPI } from "../../core/utils/fetchData";

import { format } from "date-fns";

import TitleCard from "../../components/shared/TitleCard";

import LaporanTahunanDetailTable from "../../components/Laporan/Tahunan/LaporanTahunanDetail.table";

const LaporanTahunanDetail = () => {
  const location = useLocation();
  const { auth } = useSelector((state) => state);

  const { waktu } = location.state;
  const [tahunanData, setTahunanData] = React.useState(null);
  const [total, setTotal] = React.useState(0);

  useEffect(() => {
    const fetchDatas = async () => {
      await getDataAPI(
        `laporan-tahunan-data/${waktu}`,
        `bearer ${auth?.auth?.access_token}`
      )
        .then((response) => {
          let data = response?.data?.response?.data;
          const totalArr = data?.map((item) => {
            return {
              price: item?.product?.price,
              quantity: item?.quantity,
            };
          });
          const totalPrice = totalArr?.reduce(
            (sum, { price, quantity }) => sum + price * quantity,
            0
          );
          setTahunanData(response?.data?.response);
          setTotal(totalPrice);
        })
        .catch((err) => {
          error(err?.response?.data?.message);
        });
    };
    fetchDatas();
  }, [waktu]);

  const handleDeleteJurnal = async (uuid_jurnal) => {
    await confirmation(
      "Apakah kamu yakin ingin menghapus data jurnal?",
      "Data tidak bisa dikembalikan!"
    ).then((result) => {
      if (result.isConfirmed) {
        // dispatch(deleteJurnal({ uuid_jurnal }));
        // const newDataDetail = DeleteData(jurnalDetailDatas?.data, uuid_jurnal);
        // setJurnalDetailDatas({
        //   ...jurnalDetailDatas,
        //   data: newDataDetail,
        // });
        // if (newDataDetail?.length < 1) {
        //   setTotal({
        //     debet: 0,
        //     kredit: 0,
        //   });
        //   Swal.fire("Deleted!", "Data jurnal berhasil di hapus.", "success");
        //   return navigate("/jurnal-umum");
        // }
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Card elevation={0}>
        <TitleCard title={"DATA LAPORAN TAHUNAN"} />
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
            Total Data : {tahunanData?.data?.length}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "700" }}
            color="GrayText"
            fontFamily="monospace"
          >
            Periode : {format(new Date(waktu), "MMMM yyyy")}
          </Typography>
        </CardContent>
        <LaporanTahunanDetailTable
          tahunanData={tahunanData}
          total={total}
          handleDeleteJurnal={handleDeleteJurnal}
        />
      </Card>
    </Box>
  );
};

export default LaporanTahunanDetail;
