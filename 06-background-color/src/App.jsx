import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <Button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            handleClick={() => setColor("red")}
            text="Red"
          />
          <Button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            handleClick={() => setColor("green")}
            text="Green"
          />
          <Button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            handleClick={() => setColor("blue")}
            text="Blue"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
