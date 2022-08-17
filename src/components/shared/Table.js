import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
} from "@mui/material";
import PropTypes from "prop-types";

export const Header = ({ data, align }) => {
  if (!Array.isArray(data)) return;
  return (
    <TableHead
      sx={{
        background: "#063970",
        ".MuiTableCell-root": {
          color: "white",
        },
      }}
    >
      <TableRow>
        {data.map((headerValue, keyHeader) => (
          <TableCell align={align ?? "left"} key={keyHeader}>
            {headerValue.title ?? ""}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export const TableWrapper = ({ headers, children, align }) => {
  return (
    <TableContainer>
      <Table>
        <Header data={headers} align={align} />
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};

TableWrapper.propTypes = {
  headers: PropTypes.array.isRequired,
  align: PropTypes.string,
};
