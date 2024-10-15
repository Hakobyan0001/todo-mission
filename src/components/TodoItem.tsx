import React, { ReactElement } from "react";
import {
  ListItem,
  Checkbox,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ITodo } from "../types";


interface TodoItemProps {
  todo: ITodo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoItem({
  todo,
  toggleComplete,
  deleteTodo,
}: TodoItemProps): ReactElement {
  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            onClick={() => deleteTodo(todo.id)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        }
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        <Checkbox
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          edge="start"
        />
        <Typography
          variant="body1"
          style={{ marginLeft: "10px", opacity: todo.completed ? 0.5 : 1 }}
        >
          {todo.text}
        </Typography>
      </ListItem>
      <Divider />
    </>
  );
}

export default TodoItem;
