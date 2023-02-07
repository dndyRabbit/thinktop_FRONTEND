import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Table from "../../components/table";
import { getKaryawan } from "../../store/actions/karyawanAction";
import DialogAddKaryawan from "./DialogAddKaryawan";

export default function Karyawan() {
  const dispatch = useDispatch();
  const [showDialogAddKaryawan, setShowDialogAddKaryawan] = useState(false);
  useEffect(() => {
    dispatch(getKaryawan());
  }, []);
  return (
    <Box component="div" marginTop={2}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        marginBottom={3}
      >
        <Grid item xs={3} sm={4} md={5} lg={6}>
          <Typography fontWeight="bold" fontSize={20}>
            Karyawan
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sm={4}
          md={5}
          lg={6}
          justifyContent="end"
          display="flex"
        >
          <Button
            variant="contained"
            size="medium"
            onClick={() => setShowDialogAddKaryawan(true)}
          >
            Tambah Karyawan
          </Button>
        </Grid>
      </Grid>
      <Card>
        <CardContent>
          <Table
            headers={['No', 'Nama Lengkap', 'Aksi']}
          >

          </Table>
        </CardContent>
      </Card>
      <DialogAddKaryawan 
        show={showDialogAddKaryawan}
        handleClose={() => setShowDialogAddKaryawan(false)}
      />
    </Box>
  );
}
