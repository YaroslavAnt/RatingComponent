import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Rating from "./Rating/Rating";

const App = () => {
  const clickHandler = rating => {
    console.log(rating);
  };

  return (
    <div className="App">
      <Rating clickHandler={clickHandler} externalValue={3.5} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
