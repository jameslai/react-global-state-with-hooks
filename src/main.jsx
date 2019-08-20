import React from "react";
import ReactDOM from "react-dom";

import { StateProvider } from "./StateProvider/StateProvider";
import { App } from "./App/App";
import databaseReducer from "./reducers/database";
import userReducer from "./reducers/user";

const initialState = {
  databases: [],
  user: {}
};

const reducer = ({ databases, user }, action) => ({
  databases: databaseReducer(databases, action),
  user: userReducer(user, action)
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>,
    document.getElementById("app")
  );
});
