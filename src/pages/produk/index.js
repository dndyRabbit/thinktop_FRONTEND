import { Box, Button, Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton, Tooltip, Pagination } from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
export default function Produk() {
  return (
    <Box marginTop={2}>
      <Grid container spacing={2} alignItems="center" justifyContent="space-between" marginBottom={3}>
        <Grid item xs={3} sm={4} md={5} lg={6}>
          <Typography fontWeight="bold" fontSize={20}>Produk</Typography>
        </Grid>
        <Grid item xs={3} sm={4} md={5} lg={6} justifyContent="end" display="flex">
          <Button variant="contained" size="medium">
            Tambah Produk
          </Button>
        </Grid>
      </Grid>
      <Card>
        <CardContent>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Nama Produk</TableCell>
                  <TableCell>Deskripsi</TableCell>
                  <TableCell>Harga</TableCell>
                  <TableCell>Aksi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[1,2,3,4,5].map(key => (
                  <TableRow key={key}>
                    <TableCell>1</TableCell>
                    <TableCell>Capuccino Cincau</TableCell>
                    <TableCell>Perpaduan antara capuccino dan cincau</TableCell>
                    <TableCell>Rp. 20.000</TableCell>
                    <TableCell>
                      <Tooltip title="Edit">
                        <IconButton aria-label="edit">
                          <ModeEditOutlineRoundedIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Hapus">
                        <IconButton aria-label="delete" color="error">
                          <DeleteRoundedIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pagination count={10} color="primary" shape="rounded" sx={{marginTop: 2}} />
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  )
};