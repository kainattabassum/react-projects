import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// only one store in application: single source of truth
export const store = configureStore({
  reducer: todoReducer,
});
