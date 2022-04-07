import logo from "./logo.svg";
import "./App.css";
import BankAccount from "./BankAccount";

let startingBalance = 1000; // data coming from a database in real situations, from an api or server
let name = "Sean Savage";

function App() {
  return (
    <>
      <h1>My App</h1>
      <BankAccount startingBalance={startingBalance} name={name} />
    </>
  );
}

export default App;
