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
          CustomElementEmpty ? <CustomElementEmpty /> : <DefaultElement.empty />
        }
        ComponentHalfy={() =>
          CustomElementHalfy ? <CustomElementHalfy /> : <DefaultElement.halfy />
        }
        ComponentFully={() =>
          CustomElementFully ? <CustomElementFully /> : <DefaultElement.fully />
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
