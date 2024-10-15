import { ITodo, TFilter } from "../types";

class SessionStorageService {
  private todosKey = "todos";
  private filterKey = "filter";

  getTodos(): ITodo[] {
    const storedTodos = sessionStorage.getItem(this.todosKey);
    return storedTodos ? JSON.parse(storedTodos) : [];
  }

  setTodos(todos: ITodo[]): void {
    sessionStorage.setItem(this.todosKey, JSON.stringify(todos));
  }

  getFilter(): TFilter {
    const storedFilter = sessionStorage.getItem(this.filterKey);
    return storedFilter ? (storedFilter as TFilter) : "all";
  }

  setFilter(filter: TFilter): void {
    sessionStorage.setItem(this.filterKey, filter);
  }

  clear(): void {
    sessionStorage.removeItem(this.todosKey);
    sessionStorage.removeItem(this.filterKey);
  }
}

export const sessionStorageService = new SessionStorageService();
