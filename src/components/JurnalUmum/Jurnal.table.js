import React from "react";
import { LoadingButton } from "@mui/lab";
import { TableCell, TableRow } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { format } from "date-fns";

const JurnalTable = ({ data, index, handleNavToDetail }) => {
  return (
    <TableRow>
      <TableCell align="center">{++index}</TableCell>
      <TableCell align="center">
        {format(new Date(data), "dd/MM/yyyy")}
      </TableCell>

      <TableCell align="center">
        <LoadingButton
          color="info"
          variant="contained"
          startIcon={<InfoIcon />}
          onClick={() => handleNavToDetail(data)}
        >
          Detail
        </LoadingButton>
      </TableCell>
    </TableRow>
  );
};

export default JurnalTable;
