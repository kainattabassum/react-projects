import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="text-center h-screen flex flex-col justify-center w-full">
      <h1 className="text-3xl text-white-600 font-medium">
        Redux Toolkit - Todo
      </h1>

      <div className="max-w-[750px] w-full mx-auto">
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
