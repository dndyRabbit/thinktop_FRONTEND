import React from "react";
import { LoadingButton } from "@mui/lab";
import { CardContent, TableCell, TableRow } from "@mui/material";
import { formatRupiah } from "../../core/utils/currency";
import { TableWrapper } from "../shared/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "date-fns";

const DetailNeracaSaldoTable = ({ dataDetailNeracaSaldo, total }) => {
  return (
    <CardContent>
      <TableWrapper headers={dataDetailNeracaSaldo?.head} align="center">
        {dataDetailNeracaSaldo?.data?.map((data, index) => {
          return (
            <TableRow key={index}>
              <TableCell align="center">{++index}</TableCell>

              <TableCell align="center">{data?.akun}</TableCell>

              <TableCell align="center">
                {`Rp.${formatRupiah(data?.debet)},-`}
              </TableCell>
              <TableCell align="center">
                {`Rp.${formatRupiah(data?.kredit)},-`}
              </TableCell>
            </TableRow>
          );
        })}

        <TableRow>
          <TableCell
            colSpan={2}
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
            colSpan={2}
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

export default DetailNeracaSaldoTable;
