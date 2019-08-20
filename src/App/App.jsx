import React from "react";
import { Databases } from "../Databases/Databases";
import { User } from "../User/User";
import { Counter } from "../Counter/Counter";

export const App = () => {
  console.log("Rendering app");
  return (
    <>
      <User />
      <h1>Databases</h1>
      <Counter />
      <Databases />
    </>
  );
};
