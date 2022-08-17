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

const HeaderTableAkun = [
  { title: "No" },
  { title: "Nama" },
  { title: "Kode" },
  { title: "Aksi" },
];

function AkunPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Card elevation={0}>
        <TitleCard title="AKUN">
          <Button
            color="primary"
            variant="contained"
            disableElevation
            endIcon={<AddIcon />}
          >
            TAMBAH
          </Button>
        </TitleCard>
        <CardContent>
          <TableWrapper headers={HeaderTableAkun} align="center">
            <TableRow>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">Bank Mandiri</TableCell>
              <TableCell align="center">00001</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableWrapper>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AkunPage;
