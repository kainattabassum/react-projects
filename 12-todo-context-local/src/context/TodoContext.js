import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todo: [
    {
      id: 1,
      todo: " Todo Message",
      isCompleted: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
