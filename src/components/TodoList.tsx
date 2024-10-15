import { Typography, List } from "@mui/material";
import TodoItem from "./TodoItem";
import { ITodo } from "../types";
import { ReactElement } from "react";

interface ITodoList {
  filteredTodos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
  todos: ITodo[];
}

function TodoList({ filteredTodos, setTodos, todos }: ITodoList): ReactElement {
  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <List style={{ marginTop: "20px" }}>
      {todos.length === 0 ? (
        <Typography align="center" color="textSecondary">
          No todos yet!
        </Typography>
      ) : (
        filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </List>
  );
}

export default TodoList;
