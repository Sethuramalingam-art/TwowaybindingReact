import logo from "./logo.svg";
import "./App.css";
import useModel from "./useModel";

function App() {
  const { model, setModel } = useModel("john", (e) => {
    console.log("model", e.target.value);
  });

  const reset = () => setModel("");
  return (
    <div className="App">
      <label>Name:</label>
      <input id="name" {...model} />
      <label>{model.value}</label>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
