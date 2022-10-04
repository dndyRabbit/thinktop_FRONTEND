import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { TableWrapper } from "../../components/shared/Table";
import TitleCard from "../../components/shared/TitleCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { confirmation } from "../../components/shared/Notification";

import { getKaryawan } from "../../core/redux/actions/karyawan.action";
import { useEffect } from "react";
import KaryawanTable from "../../components/Karyawan/Karyawan.table";

function KaryawanPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { product, karyawan, auth } = useSelector((state) => state);

  const handleDelete = async ({ uuid_product }) => {
    await confirmation(
      "Apakah kamu yakin ingin menghapus karyawan ini?",
      "Data tidak bisa dikembalikan!"
    ).then((result) => {
      if (result.isConfirmed) {
        // dispatch(deleteProduct({ uuid_product }));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    dispatch(getKaryawan(`bearer ${auth?.auth?.access_token}`));
  }, [auth?.auth?.access_token]);

  if (auth?.auth?.data?.role === 1) {
    return (
      <Box sx={{ p: 3 }}>
        <Card elevation={0}>
          <CardContent>
            <Typography variant="h6" noWrap component="div">
              THIS PAGE IS RESTRICTED FOR EMPLOYEE,
            </Typography>
            <Typography variant="h6" noWrap component="div">
              ONLY ADMINISTRASION CAN ACCESS THIS PAGE.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Card elevation={0}>
        <TitleCard title="DAFTAR KARYAWAN">
          <Button
            color="primary"
            variant="contained"
            disableElevation
            endIcon={<AddIcon />}
            onClick={() => navigate("tambah")}
          >
            TAMBAH
          </Button>
        </TitleCard>
        <CardContent>
          <TableWrapper headers={karyawan?.karyawan?.head} align="center">
            {karyawan?.karyawan?.data?.map((data, index) => (
              <KaryawanTable
                key={index}
                karyawan={karyawan}
                data={data}
                index={index}
                handleDelete={handleDelete}
              />
            ))}
          </TableWrapper>
        </CardContent>
      </Card>
    </Box>
  );
}

export default KaryawanPage;
