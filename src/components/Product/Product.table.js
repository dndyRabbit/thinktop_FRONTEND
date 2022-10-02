import { LoadingButton } from "@mui/lab";
import { TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { formatRupiah } from "../../core/utils/currency";

const ProductTable = ({ data, index, handleDelete, product }) => {
  return (
    <TableRow key={index}>
      <TableCell align="center">{++index}</TableCell>
      <TableCell align="center">{data?.product_name}</TableCell>
      <TableCell align="center">{data?.description}</TableCell>
      <TableCell align="center">Rp.{formatRupiah(data?.price)},-</TableCell>
      <TableCell align="center">
        <LoadingButton
          color="success"
          variant="contained"
          startIcon={<EditIcon />}
          sx={{ mr: "1ch" }}
          loading={product?.loading ? true : false}
          // onClick={() => handleEdit()}
        >
          Edit
        </LoadingButton>
        <LoadingButton
          color="error"
          variant="contained"
          startIcon={<DeleteIcon />}
          loading={product?.loading ? true : false}
          onClick={() => handleDelete({ uuid_product: data.uuid })}
        >
          Delete
        </LoadingButton>
      </TableCell>
    </TableRow>
  );
};

export default ProductTable;
