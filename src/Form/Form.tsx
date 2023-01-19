import axios from "axios";
import { useState } from "react";
import { config } from "../config";

export const Form = () => {
  const [name, setName] = useState<string>();
  const onInputChange = (e: any) => {
    setName(e.target.value);
  };

  const onSubmitClickHandler = () => {
    axios({
      method: "post",
      url: config.url,
      data: { name: name },
    }).then((response) => {
      setName("");
    });
  };

  return (
    <>
      <input placeholder="name" value={name} onChange={onInputChange} />
      <button onClick={onSubmitClickHandler}>Save</button>
    </>
  );
};
