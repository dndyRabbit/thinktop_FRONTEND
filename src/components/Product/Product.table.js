import { LoadingButton } from "@mui/lab";
import { TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { error } from "../shared/Notification";
import { formatRupiah } from "../../core/utils/currency";

const ProductTable = ({ data, index, handleDelete, akun }) => {
  return (
    <TableRow key={index}>
      <TableCell align="center">{++index}</TableCell>
      <TableCell align="center">{data?.product_name}</TableCell>
      <TableCell align="center">{data?.description}</TableCell>
      <TableCell align="center">Rp.{formatRupiah(data?.price)},-</TableCell>
      <TableCell align="center">{data?.stock}</TableCell>
      <TableCell align="center">
        <LoadingButton
          color="success"
          variant="contained"
          startIcon={<EditIcon />}
          sx={{ mr: "1ch" }}
          loading={akun?.loading ? true : false}
          // onClick={() => handleEdit()}
        >
          Edit
        </LoadingButton>
        <LoadingButton
          color="error"
          variant="contained"
          startIcon={<DeleteIcon />}
          loading={akun?.loading ? true : false}
          onClick={() => handleDelete({ uuid_akun: data.uuid })}
        >
          Delete
        </LoadingButton>
      </TableCell>
    </TableRow>
  );
};

export default ProductTable;
