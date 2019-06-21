import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Rating from "./Rating/Rating";
import * as DefaultElement from "./Rating/DefaultElement";

const App = ({
  itemSize,
  ratingSize,
  externalValue,
  CustomElementEmpty,
  CustomElementHalfy,
  CustomElementFully
}) => {
  const clickHandler = progress => {
    console.log(progress);
  };

  return (
    <div className="App">
      <Rating
        clickHandler={clickHandler}
        itemSize={itemSize}
        ratingSize={ratingSize}
        externalValue={externalValue}
        ComponentEmpty={() =>
          CustomElementEmpty ? (
            <CustomElementEmpty itemSize={itemSize} />
          ) : (
            <DefaultElement.empty itemSize={itemSize} />
          )
        }
        ComponentHalfy={() =>
          CustomElementHalfy ? (
            <CustomElementHalfy itemSize={itemSize} />
          ) : (
            <DefaultElement.halfy itemSize={itemSize} />
          )
        }
        ComponentFully={() =>
          CustomElementFully ? (
            <CustomElementFully itemSize={itemSize} />
          ) : (
            <DefaultElement.fully itemSize={itemSize} />
          )
        }
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App itemSize={100} ratingSize={5} externalValue={2.3} />,
  rootElement
);
