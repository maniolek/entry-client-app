import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";

export const List = () => {
  const [list, setList] = useState<{ id: Number; name: string }[]>([]);
  const [rick, setRick] = useState<string>("");
  useEffect(() => {
    axios({ method: "get", url: `${config.url}/entry` }).then((response) => {
      setList(response.data);
    });
    axios({ method: "get", url: `${config.url}/rick` }).then((response) => {
      setRick(response.data);
    });
  }, []);

  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>

      {rick && <img src={rick}></img>}
    </>
  );
};
