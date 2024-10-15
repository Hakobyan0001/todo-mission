import { Box, Typography, Stack, Button } from "@mui/material";
import { TFilter, ITodo } from "../types";
import { ReactElement } from "react";

interface ITodoFooter {
  filter: TFilter;
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
  setFilter: (filter: TFilter) => void;
}

function TodoFooter({
  filter,
  todos,
  setTodos,
  setFilter,
}: ITodoFooter): ReactElement {
  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={3}
    >
      <Typography>
        {remainingTodos} {remainingTodos === 1 ? "item" : "items"} left
      </Typography>

      <Stack direction="row" spacing={1}>
        <Button
          variant={filter === "all" ? "contained" : "outlined"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "active" ? "contained" : "outlined"}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>
        <Button
          variant={filter === "completed" ? "contained" : "outlined"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </Stack>

      <Button onClick={clearCompleted}>Clear Completed</Button>
    </Box>
  );
}

export default TodoFooter;
