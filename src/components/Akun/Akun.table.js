import { LoadingButton } from "@mui/lab";
import { TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { error } from "../shared/Notification";

const AkunTable = ({ data, index, handleDelete, akun }) => {
  return (
    <TableRow key={index}>
      <TableCell align="center">{++index}</TableCell>
      <TableCell align="center">{data?.nama_akun}</TableCell>
      <TableCell align="center">{data.kode_akun}</TableCell>
      <TableCell align="center">
        <LoadingButton
          color="success"
          variant="contained"
          startIcon={<EditIcon />}
          sx={{ mr: "1ch" }}
          loading={akun?.loading ? true : false}
          onClick={() => error("Data Tidak ada")}
        />
        <LoadingButton
          color="error"
          variant="contained"
          startIcon={<DeleteIcon />}
          loading={akun?.loading ? true : false}
          onClick={() => handleDelete({ uuid_akun: data.uuid })}
        />
      </TableCell>
    </TableRow>
  );
};

export default AkunTable;
