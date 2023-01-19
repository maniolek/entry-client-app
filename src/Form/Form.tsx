import axios from "axios";
import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState<string>();
  const onInputChange = (e: any) => {
    setName(e.target.value);
  };

  const onSubmitClickHandler = () => {
    axios({
      method: "post",
      url: "http://localhost:3000/entry",
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
