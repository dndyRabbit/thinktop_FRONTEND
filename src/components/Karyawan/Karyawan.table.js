import { LoadingButton } from "@mui/lab";
import { TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const KaryawanTable = ({ data, index, handleDelete, karyawan }) => {
  return (
    <TableRow key={index}>
      <TableCell align="center">{++index}</TableCell>
      <TableCell align="center">{data?.full_name}</TableCell>
      <TableCell align="center">{data?.personal_data?.nickname}</TableCell>
      <TableCell align="center">{data?.email}</TableCell>
      <TableCell align="center">
        {data?.personal_data?.gender === "00" ? "L" : "P"}
      </TableCell>
      <TableCell align="center">{data?.personal_data?.occupation}</TableCell>
      <TableCell align="center">{data?.personal_data?.address}</TableCell>
      <TableCell align="center">
        +62{data?.personal_data?.handphone?.substring(1)}
      </TableCell>
      <TableCell align="center">
        <LoadingButton
          color="success"
          variant="contained"
          startIcon={<EditIcon />}
          sx={{ mb: "1ch" }}
          loading={karyawan?.loading ? true : false}
          // onClick={() => handleEdit()}
        >
          Edit
        </LoadingButton>
        <LoadingButton
          color="error"
          variant="contained"
          startIcon={<DeleteIcon />}
          loading={karyawan?.loading ? true : false}
          onClick={() => handleDelete({ uuid_karyawan: data.uuid })}
        >
          Delete
        </LoadingButton>
      </TableCell>
    </TableRow>
  );
};

export default KaryawanTable;
