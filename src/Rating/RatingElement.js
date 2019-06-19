import React from "react";

const RatingElement = ({
  ratingSize,
  progress,
  number,
  ComponentEmpty,
  ComponentHalfy,
  ComponentFully
}) => {
  if (+progress + 100 / ratingSize / 4 >= (1 + number) * (100 / ratingSize)) {
    return <ComponentFully />;
  }

  if (
    100 / ratingSize / 2 < +progress - +number * (100 / ratingSize) &&
    +progress - +number * (100 / ratingSize) < 100 / ratingSize
  ) {
    return <ComponentHalfy />;
  }

  return <ComponentEmpty />;
};

export default RatingElement;
