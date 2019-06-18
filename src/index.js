import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Star from "./Star/Star";
import Rating from "./Star/Rating";

function App() {
  return (
    <div className="App">
      <Rating rating={26} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
