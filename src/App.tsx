import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { config } from "./config";
import { Form } from "./Form/Form";
import { List } from "./List/List";

export const App = () => {
  const [apiEnv, setApiEnv] = useState<string>("");
  useEffect(() => {
    axios({ method: "get", url: config.url }).then((response) => {
      setApiEnv(response.data.server);
    });
  }, []);

  return (
    <div className="App">
      <h1>Entries</h1>
      <h5>Server: {(window as any).env.HOSTNAME}</h5>
      <h5>API Server: {apiEnv}</h5>
      <Form />
      <List />
    </div>
  );
};

export default App;
