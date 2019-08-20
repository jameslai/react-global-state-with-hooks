import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";

export const Counter = () => {
  const [{ databases }] = useStateValue();
  return <p>{databases.length} database(s) loaded</p>;
};
