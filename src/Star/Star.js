import React from "react";
import "./Star.css";

const Star = props => {
  const { progress = 0, number } = props;
  let backgroundPositionX = "50%";

  if (+progress + 5 >= (1 + number) * 20) {
    backgroundPositionX = "0%";
  }

  if (10 < +progress + 5 - +number * 20 && +progress + 5 - +number * 20 < 20) {
    backgroundPositionX = "25%";
  }

  return <div className="rating__star" style={{ backgroundPositionX }} />;
};

export default Star;
