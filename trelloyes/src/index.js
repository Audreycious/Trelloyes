import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from "./store";

// going to have to change prop={Store}
ReactDOM.render(<App store={store} />, document.getElementById("root"));
