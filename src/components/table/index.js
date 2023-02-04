import PropTypes from "prop-types";
import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  Pagination,
  TableBody,
} from "@mui/material";

export default function Table({ 
  headers, 
  handleChangePage, 
  totalData,
  children
}) {
  return (
    <TableContainer>
      <MuiTable size="small">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {children}
        </TableBody>
      </MuiTable>
      {handleChangePage && (
        <Pagination
          count={totalData}
          color="primary"
          shape="rounded"
          sx={{ marginTop: 2 }}
        />
      )}
    </TableContainer>
  );
}

Table.defaultProps = {
  headers: ["Header 1", "Header 2", "Header 3"],
  totalData: 0,
};

Table.propTypes = {
  headers: PropTypes.array.isRequired,
  handleChangePage: PropTypes.func,
  totalData: PropTypes.number,
};
