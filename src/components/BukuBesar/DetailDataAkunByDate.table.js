import React from "react";
import { LoadingButton } from "@mui/lab";
import { CardContent, TableCell, TableRow } from "@mui/material";
import { formatRupiah } from "../../core/utils/currency";
import { TableWrapper } from "../shared/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "date-fns";

const DetailDataAkunByDate = ({ dataDetailAkun, total }) => {
  return (
    <CardContent>
      <TableWrapper headers={dataDetailAkun?.head} align="center">
        <TableRow>
          <TableCell
            colSpan={3}
            align="center"
            sx={{
              fontWeight: "bold",
            }}
          >
            Transaksi
          </TableCell>
          <TableCell
            align="center"
            colSpan={3}
            sx={{
              fontWeight: "bold",
            }}
          >
            Saldo
          </TableCell>
        </TableRow>
        {dataDetailAkun?.data?.map((data, index) => (
          <TableRow key={index}>
            <TableCell align="center">{++index}</TableCell>
            <TableCell align="center">
              {format(new Date(data.waktu), "dd MMMM yyyy")}
            </TableCell>
            <TableCell align="center">
              {data.keterangan ? data.keterangan : "-"}
            </TableCell>
            <TableCell align="center">
              {data?.tipe === "Debet"
                ? `Rp.${formatRupiah(data?.nominal)},-`
                : "-"}
            </TableCell>
            <TableCell align="center">
              {data?.tipe === "Kredit"
                ? `Rp.${formatRupiah(data?.nominal)},-`
                : "-"}
            </TableCell>
          </TableRow>
        ))}

        <TableRow>
          <TableCell
            colSpan={3}
            align="center"
            sx={{
              fontWeight: "bold",
            }}
          >
            Total
          </TableCell>
          <TableCell
            align="center"
            sx={{
              fontWeight: "bold",
            }}
          >
            Rp.{formatRupiah(total?.debet)}.-
          </TableCell>
          <TableCell
            align="center"
            sx={{
              fontWeight: "bold",
            }}
          >
            Rp.{formatRupiah(total?.kredit)},-
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            colSpan={3}
            align="center"
            sx={{
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            Terbilang
          </TableCell>
          <TableCell
            align="center"
            sx={{
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            {formatRupiah(total?.debet)} Rupiah
          </TableCell>
          <TableCell
            align="center"
            sx={{
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            {formatRupiah(total?.kredit)} Rupiah
          </TableCell>
        </TableRow>
      </TableWrapper>
    </CardContent>
  );
};

export default DetailDataAkunByDate;
