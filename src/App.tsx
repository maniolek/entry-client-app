import React from "react";
import "./App.css";
import { Form } from "./Form/Form";
import { List } from "./List/List";

function App() {
  return (
    <div className="App">
      <h1>Entries</h1>

      <Form />
      <List />
    </div>
  );
}

export default App;
