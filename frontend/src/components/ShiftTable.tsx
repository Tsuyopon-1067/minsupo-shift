import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ShiftTableRow from "./ShiftTableRow";
import { ShiftData } from "./types";

interface Props {
  dates: string[];
  shiftData: ShiftData[];
}
export default function ShiftTable({ dates, shiftData }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">なまえ</TableCell>
            {
              dates.map(date => (
                <TableCell align="center">{date}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {shiftData.map((row) => (
            <ShiftTableRow row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}