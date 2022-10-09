import {
  Box,
  Button,
  Card,
  CardContent,
  TableCell,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { TableWrapper } from "../../components/shared/Table";
import TitleCard from "../../components/shared/TitleCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LoadingButton } from "@mui/lab";
import { deleteAkun } from "../../core/redux/actions/akun.action";
import Swal from "sweetalert2";
import { confirmation, error } from "../../components/shared/Notification";
import AkunTable from "../../components/Akun/Akun.table";

function AkunPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { akun, auth } = useSelector((state) => state);

  const handleDelete = async ({ uuid_akun }) => {
    await confirmation(
      "Apakah kamu yakin ingin menghapus akun?",
      "Data tidak bisa dikembalikan!"
    ).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          deleteAkun({ uuid_akun, token: `bearer ${auth?.auth?.access_token}` })
        );
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Card elevation={0}>
        <TitleCard title="AKUN">
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
          <TableWrapper headers={akun?.akun?.head} align="center">
            {akun?.akun?.data?.map((data, index) => (
              <AkunTable
                key={index}
                akun={akun}
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

export default AkunPage;
