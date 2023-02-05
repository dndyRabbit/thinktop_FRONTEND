import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TableCell,
  TableRow,
  Typography,
  IconButton,
  Tooltip,
  LinearProgress
} from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import Table from "../../components/table";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProduk } from "../../store/actions/produkAction";
import DialogAddProduct from "./DialogAddProduct";
export default function Produk() {
  const {produk} = useSelector((state) => state);
  const [showDialogAddProduct, setShowDialogAddProduct] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduk());
  }, []);

  const handleDelete = () => {
    Swal.fire({
      title: 'Apakah Anda yakin ingin menghapus produk?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yakin',
      cancelButtonText: 'Batalkan',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };

  return (
    <Box marginTop={2}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        marginBottom={3}
      >
        <Grid item xs={3} sm={4} md={5} lg={6}>
          <Typography fontWeight="bold" fontSize={20}>
            Produk
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
          <Button variant="contained" size="medium" disabled={produk.loading} onClick={() => setShowDialogAddProduct(true)}>
            Tambah Produk
          </Button>
        </Grid>
      </Grid>
      <Card>
        <CardContent>
          <Table headers={["No", "Nama Produk", "Deskripsi", "Harga", "Aksi"]}>
            {!produk.loading && produk.data.map((data, key) => (
              <TableRow key={key}>
                <TableCell>{key + 1}</TableCell>
                <TableCell>{data?.product_name}</TableCell>
                <TableCell>{data?.description}</TableCell>
                <TableCell>{data?.price}</TableCell>
                <TableCell>
                  <Tooltip title="Edit">
                    <IconButton aria-label="edit">
                      <ModeEditOutlineRoundedIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Hapus">
                    <IconButton aria-label="delete" color="error" onClick={() => handleDelete(data)}>
                      <DeleteRoundedIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </Table>
          {produk.loading ? <Box sx={{textAlign: 'center', my: 3}}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <LinearProgress sx={{width: '50%'}} />
            </Box>
            <Typography sx={{mt: 1, fontSize: 12}}>Sedang mengambil data produk</Typography>
          </Box> : null}
        </CardContent>
      </Card>
      <DialogAddProduct show={showDialogAddProduct} handleClose={() => setShowDialogAddProduct(false)} />
    </Box>
  );
}
