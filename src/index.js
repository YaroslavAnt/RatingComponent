import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Rating from "./Star/Rating";

const App = () => {
  const clickHandler = progress => {
    console.log(progress);
  };

  return (
    <div className="App">
      <Rating rating={26} clickHandler={clickHandler} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
