import { Typography } from "@mui/material";
import { ReactElement } from "react";

function TodoHeader() : ReactElement{
  return (
    <Typography variant="h4" gutterBottom align="center">
      Todos
    </Typography>
  );
}

export default TodoHeader;
