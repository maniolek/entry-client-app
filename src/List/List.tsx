import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";

export const List = () => {
  const [list, setList] = useState<{ id: Number; name: string }[]>([]);
  useEffect(() => {
    axios({ method: "get", url: config.url }).then((response) => {
      setList(response.data);
    });
  }, []);

  return (
    <ul>
      {list.map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  );
};
