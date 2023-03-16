import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";

export const List = () => {
  const [list, setList] = useState<{ id: Number; name: string }[]>([]);
  useEffect(() => {
    axios({ method: "get", url: `${config.url}/entry` }).then((response) => {
      setList(response.data);
    });
  }, []);

  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>

      <img src="https://maniolek-1.s3.eu-central-1.amazonaws.com/rick-astley.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJHMEUCIQCeIKK93ke3Er3OJWP7qtiF0ChRw2BLbFRKe%2FJdyccEGAIgFofOuctbU3%2BDgXUDZ70YmjoGztNCC2TAaetWek1oAUYq4QMIQxAFGgw4OTA3Njk5MjEwMDMiDHpZ3%2BLdXRSNBWTlkiq%2BA5Hpnz7AnhtiNO5GRFZ6ywshKn53%2FDoq0GzbKRWBrokZS9r4o6fGpgMnXYgrT8qyd%2B4g4toyrh1ejWpxa3z6K3fm%2B2%2FdhE%2FtSjtoLwske7nNXGJ7ovV0uNU5CI9H6bvX1pbH%2BTPR2U%2ByhMcqFu57hFCP2CKu%2F5PQ9LeQ8UgJNuQkpxJEAUxhSOfE1zDUS%2BVct7gGNq%2BJhq1HdPBPKG8ET6%2F%2BVinMIVA1DgY6DFT2mKXEJ3t6ZCi%2BanHHW0sZFblI58JzS7adzAZ%2By%2FenI98NOyvi7MmpgjNtoDgQ3hwdp3MsxcJUmIfpSjxhWdFkO7BLQBMYXnzYBSCjTIPWd7jDchH6%2B6%2FVN%2BKFlFxFIgfrnVXHKVijx6FVqxlVY5wnfAa2wKqPA%2FQKt1%2BxNZ2vuiZCxiSK7TJS6iihX0bzl519GZaijrjo78hpy2u%2FCnutc57AUIc1Eic4Ymgzk8ArSHwEDKdGggsWMIEfAe8IA8Dtx9E5JvCJTy54FtnvLHToEEQPweikQc1k9xAjH9aiKSA2DEpmGsQZGHLkjGC0aS%2FT%2BXcWoLdEvRi7pm9M9mYyZVJb2z2rwt3kMlDbEZod%2F2ObMKXHzp4GOpQCgN4BSdwZMgAy7PgxEZHi3uZkecpXgcn9ckx%2BErwjIcmBKaoI%2Bjz7ZCdPcq05vAqaambKO6%2F%2BMS%2F2nUXSe85fdEyz1AUK27j24cVtQNzxCxeFWXZFbjOTqREt60JliKd2Ko2pgAvvQTSz5ykfZCXtsuL51WqXBFMUNSp4Rst3aGmMctIyqbsmyvMAEsx%2BPL9HqS3fVOTfdC%2FwytXUQkaA6dZ2fy29fUTNfAA3zqqXs9YmAlRgYG5CZ3BEiyidUxvd32mZ8umqt1Ocq%2BcjWmcRgGonJNdrdItIsznL7o1RJn9nP4S5OLzzxJ%2FZWhLvdJpnTcpGUlo%2FBauxjq5b9JI3lQs6QxlkOJS681hcXhTnA523iWT9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230127T101359Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43199&X-Amz-Credential=ASIA46ZQGKPVQ2SC76UW%2F20230127%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=ab4ff56f9fa78c7657f572f4b0ae9bcbb8f86595f77cf32d159e8aa527114bb4"></img>
    </>
  );
};
