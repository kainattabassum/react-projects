import React, { useEffect, useState } from "react";
import { TodoForm, TodoItem } from "./components";
import { TodoContextProvider } from "./context";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodo) => {
      [{ id: Date.now(), ...todo }, ...prevTodo];
    });
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodo) =>
      prevTodo.map((todoValue) => {
        todoValue.id === id ? todo : todoValue;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) => {
      prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const toggleTodo = (id) => {
    setTodos((prevTodo) => {
      prevTodo.map((todoValue) =>
        todoValue === id
          ? { ...todoValue, isCompleted: !todoValue.isCompleted }
          : todoValue
      );
    });
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your List
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
