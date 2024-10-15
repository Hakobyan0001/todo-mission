import { render, screen, fireEvent } from "@testing-library/react";
import App from "./components/App";

test("adds a new todo", () => {
  render(<App />);

  // Find input field and 'Add' button
  const input = screen.getByLabelText(/what needs to be done?/i);
  const addButton = screen.getByText(/Add/i);

  // Add a new todo item
  fireEvent.change(input, { target: { value: "Buy milk" } });
  fireEvent.click(addButton);

  // Check if the new todo appears in the list
  expect(screen.getByText(/Buy milk/i)).toBeInTheDocument();
});

test("filters tasks by all, active, and completed", () => {
  render(<App />);

  // Add two todos
  fireEvent.change(screen.getByLabelText(/New Task/i), {
    target: { value: "Task 1" },
  });
  fireEvent.click(screen.getByText(/Add/i));

  fireEvent.change(screen.getByLabelText(/New Task/i), {
    target: { value: "Task 2" },
  });
  fireEvent.click(screen.getByText(/Add/i));

  // Mark the first task as completed
  fireEvent.click(screen.getAllByRole("checkbox")[0]); // Check the first checkbox to mark it as completed

  // Filter by active tasks
  fireEvent.click(screen.getByText(/Active/i));
  expect(screen.queryByText(/Task 1/i)).not.toBeInTheDocument(); // Completed task should not appear
  expect(screen.getByText(/Task 2/i)).toBeInTheDocument(); // Active task should appear

  // Filter by completed tasks
  fireEvent.click(screen.getByText(/Completed/i));
  expect(screen.queryByText(/Task 2/i)).not.toBeInTheDocument(); // Active task should not appear
  expect(screen.getByText(/Task 1/i)).toBeInTheDocument(); // Completed task should appear
});
