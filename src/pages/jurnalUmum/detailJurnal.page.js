import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { confirmation, error } from "../../components/shared/Notification";

import { useLocation } from "react-router-dom";
import { getDataAPI } from "../../core/utils/fetchData";
import DetailJurnalTable from "../../components/JurnalUmum/DetailJurnal.table";
import { format } from "date-fns";
import Title from "../../components/JurnalUmum/Title";
import { deleteJurnal } from "../../core/redux/actions/jurnal.action";
import { DeleteData } from "../../core/redux/actions/globalTypes.action";

const DetailJurnal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { jurnal, auth } = useSelector((state) => state);

  const [waktu] = React.useState(location.state);
  const [jurnalDetailDatas, setJurnalDetailDatas] = React.useState(null);
  const [total, setTotal] = React.useState({
    debet: 0,
    kredit: 0,
  });

  useEffect(() => {
    const fetchDatas = async () => {
      await getDataAPI(`jurnal/${waktu}`, `bearer ${auth?.auth?.access_token}`)
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
          setJurnalDetailDatas(response?.data?.response);
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

  const handleDeleteJurnal = async (uuid_jurnal) => {
    await confirmation(
      "Apakah kamu yakin ingin menghapus data jurnal?",
      "Data tidak bisa dikembalikan!"
    ).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteJurnal({ uuid_jurnal }));
        const newDataDetail = DeleteData(jurnalDetailDatas?.data, uuid_jurnal);
        setJurnalDetailDatas({
          ...jurnalDetailDatas,
          data: newDataDetail,
        });
        if (newDataDetail?.length < 1) {
          setTotal({
            debet: 0,
            kredit: 0,
          });
          Swal.fire("Deleted!", "Data jurnal berhasil di hapus.", "success");
          return navigate("/jurnal-umum");
        }
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    waktu && (
      <Box sx={{ p: 3 }}>
        <Card elevation={0}>
          <Title
            title={"DETAIL JURNAL UMUM"}
            navigate={navigate}
            nav={"/jurnal-umum/tambah"}
          />
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
              Total Data : {jurnalDetailDatas?.data?.length}
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
          <DetailJurnalTable
            jurnalDetailDatas={jurnalDetailDatas}
            total={total}
            handleDeleteJurnal={handleDeleteJurnal}
          />
        </Card>
      </Box>
    )
  );
};

export default DetailJurnal;
