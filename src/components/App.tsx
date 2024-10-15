import { Box, Container } from "@mui/material";
import TodoForm from "./TodoForm";
import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";
import { TFilter, ITodo } from "../types";
import { sessionStorageService } from "../services/SessionStorageService";

function App(): ReactElement {
  const [todos, setTodos] = useState<ITodo[]>(sessionStorageService.getTodos());
  const [filter, setFilter] = useState<TFilter>(
    sessionStorageService.getFilter()
  );

  useEffect(() => {
    sessionStorageService.setTodos(todos);
  }, [todos]);

  useEffect(() => {
    sessionStorageService.setFilter(filter);
  }, [filter]);

  const handleAddTodo = useCallback((text: string) => {
    if (text.trim() === "") return;
    const newTodo: ITodo = { id: Date.now(), text, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [filter, todos]);

  return (
    <Container
      sx={{ display: "flex", height: "100vh", backgroundColor: "#FFFFFF" }}
    >
      <Box
        sx={{
          margin: "auto",
          backgroundColor: "#E0E0E0",
          borderRadius: "10px",
          padding: "10px",
          width: "50%",
        }}
      >
        <TodoHeader />
        <TodoForm handleAddTodo={handleAddTodo} />
        <TodoList
          filteredTodos={filteredTodos}
          setTodos={setTodos}
          todos={todos}
        />
        <TodoFooter
          filter={filter}
          todos={todos}
          setTodos={setTodos}
          setFilter={setFilter}
        />
      </Box>
    </Container>
  );
}

export default App;
