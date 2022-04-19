import logo from "./logo.svg";
import "./App.css";
import BankAccount from "./BankAccount";
import AppBar from "./AppBar";
import * as React from 'react';
import {ThemeProvider, createTheme} from "@mui/material/styles";

let startingBalance = 1000; // data coming from a database in real situations, from an api or server
let name = "Sean Savage";

function App() {
  return (
    <>
      {/* <h1>My App</h1> */}
      <AppBar />
      <BankAccount startingBalance={startingBalance} name={name} />
    </>
  );
}

export default App;
