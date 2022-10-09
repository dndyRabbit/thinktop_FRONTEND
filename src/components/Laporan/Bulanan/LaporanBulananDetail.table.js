import React from "react";
import { LoadingButton } from "@mui/lab";
import { CardContent, TableCell, TableRow } from "@mui/material";
import { formatRupiah } from "../../../core/utils/currency";
import { TableWrapper } from "../../shared/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "date-fns";

const LaporanBulananDetailTable = ({
  bulananData,
  total,
  handleDeleteJurnal,
}) => {
  console.log(bulananData);
  return (
    <CardContent>
      <TableWrapper headers={bulananData?.head} align="center">
        {bulananData?.data?.map((data, index) => {
          return (
            <TableRow key={index}>
              <TableCell align="center">{++index}</TableCell>
              <TableCell align="center">
                {format(new Date(data?.waktu), "dd MMM yyyy")}
              </TableCell>
              <TableCell align="center">
                {data?.product?.product_name}
              </TableCell>
              <TableCell align="center">
                {`Rp.${formatRupiah(data?.product?.price)},-`}
              </TableCell>
              <TableCell align="center">{data?.quantity}</TableCell>
              <TableCell align="center">
                {`Rp.${formatRupiah(data?.product?.price * data?.quantity)},-`}
              </TableCell>
              <TableCell align="center">{data?.tipe}</TableCell>
              <TableCell align="center">{data?.akun?.nama_akun}</TableCell>
              <TableCell align="center">
                <LoadingButton
                  color="success"
                  variant="contained"
                  startIcon={<EditIcon />}
                  sx={{
                    mx: 1,
                    my: 1,
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
          );
        })}
        <TableRow>
          <TableCell
            colSpan={5}
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
            Rp.{formatRupiah(total)},-
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            colSpan={5}
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
            {formatRupiah(total)} Rupiah
          </TableCell>
        </TableRow>
      </TableWrapper>
    </CardContent>
  );
};

export default LaporanBulananDetailTable;
