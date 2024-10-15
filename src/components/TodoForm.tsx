import { Box, TextField, Button } from "@mui/material";
import { ReactElement, useState } from "react";

interface TodoFormProps {
  handleAddTodo: (text: string) => void;
}

function TodoForm({ handleAddTodo }: TodoFormProps): ReactElement {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      handleAddTodo(text);
      setText("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}
    >
      <TextField
        fullWidth
        label="what needs to be done?"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
}

export default TodoForm;
