import { TableCell, TableRow, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import CircleCrossSwitch from "./CircleCrossSwitch";
import { ShiftData } from "./types";

interface Props {
 row: ShiftData;
}

function ShiftTableRow({row}: Props) {
  const [name, setName] = useState(row.name);
  const textOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const handleBlur = () => {
    row.setName(name);
  }
  return (
  <TableRow
    key={row.name}
    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
  >
    <TableCell component="th" scope="row" align="center">
      <TextField
        id="standard-basic"
        label="なまえ"
        variant="standard"
        value={name}
        onChange={textOnChange}
        onBlur={handleBlur}
         />
    </TableCell>
    {
    row.isOks.map(switchData => (
      <TableCell component="th" scope="row" align="center">
        <CircleCrossSwitch isOk={switchData.isOk} onChange={switchData.setIsOk} />
      </TableCell>
    ))
      }
  </TableRow>
  );
}

export default ShiftTableRow;