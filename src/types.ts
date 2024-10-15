export type TFilter = "all" | "active" | "completed";

export interface ITodo {
    id: number;
    text: string;
    completed: boolean;
  }
  