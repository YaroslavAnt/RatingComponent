import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Rating from "./Rating/Rating";

const App = ({ size }) => {
  const clickHandler = progress => {
    console.log(progress);
  };

  return (
    <div className="App">
      <Rating
        rating={26}
        clickHandler={clickHandler}
        ratingSize={7}
        ComponentEmpty={() => (
          <div
            className="rating__element rating__star"
            style={{
              backgroundPositionX: "50%",
              width: size,
              height: size
            }}
          />
        )}
        ComponentHalfy={() => (
          <div
            className="rating__element rating__star"
            style={{
              backgroundPositionX: "25%",
              width: size,
              height: size
            }}
          />
        )}
        ComponentFully={() => (
          <div
            className="rating__element rating__star"
            style={{
              backgroundPositionX: "0%",
              width: size,
              height: size
            }}
          />
        )}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App size={100} />, rootElement);
