import React from "react";
import { LoadingButton } from "@mui/lab";
import { CardContent, TableCell, TableRow } from "@mui/material";
import { formatRupiah } from "../../core/utils/currency";
import { TableWrapper } from "../shared/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const DetailJurnalTable = ({
  jurnalDetailDatas,
  total,
  handleDeleteJurnal,
}) => {
  return (
    <CardContent>
      <TableWrapper headers={jurnalDetailDatas?.head} align="center">
        {jurnalDetailDatas?.data?.map((data, index) => (
          <TableRow key={index}>
            <TableCell align="center">{++index}</TableCell>
            <TableCell align="center">{data?.nama_akun}</TableCell>
            <TableCell align="center">
              {data?.tipe === "Debet"
                ? `Rp.${formatRupiah(data?.nominal)},-`
                : "-"}
            </TableCell>
            <TableCell align="center">
              {/* {format(new Date(data), "dd/MM/yyyy")} */}
              {data?.tipe === "Kredit"
                ? `Rp.${formatRupiah(data?.nominal)},-`
                : "-"}
            </TableCell>

            <TableCell align="center">
              <LoadingButton
                color="success"
                variant="contained"
                startIcon={<EditIcon />}
                sx={{
                  mx: 1,
                }}
              >
                Edit
              </LoadingButton>
              <LoadingButton
                color="error"
                variant="contained"
                startIcon={<DeleteIcon />}
                onClick={() => handleDeleteJurnal(data?.uuid)}
              >
                Delete
              </LoadingButton>
            </TableCell>
          </TableRow>
        ))}
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
            Rp.{formatRupiah(total?.debet)},-
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

export default DetailJurnalTable;
