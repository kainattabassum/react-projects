import Card from "./components/Card";

function App() {
  let myObj = {
    username: "kainat",
    age: 27,
  };
  let myArray = [1, 2, 3, 4, 5];
  return (
    <div className="m-4">
      <h1 className="bg-green-400 text-black font-bold p-4 rounded-xl mb-4">
        Tailwind CSS
      </h1>
      <Card username="channel" btnTxt="click here" />
      <Card username="kainat" btnTxt="visit profile" />
      <Card username="tabassum" />
    </div>
  );
}

export default App;
