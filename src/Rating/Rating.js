import React, { useState } from "react";

import * as DefaultElement from "./DefaultElement";
import RatingItem from "./RatingItem";

const Rating = ({
  itemSize,
  clickHandler,
  ratingSize,
  externalValue,
  ComponentEmpty,
  ComponentHalfy,
  ComponentFully
}) => {
  externalValue >= ratingSize &&
    console.log("Warning: ratingSize should be greater than externalValue ");

  if (
    !(
      !!ComponentEmpty === !!ComponentHalfy &&
      !!ComponentHalfy === !!ComponentFully
    )
  ) {
    console.log("warning: use either all custom elements or default elements");
  }

  if (!ComponentEmpty) ComponentEmpty = () => <DefaultElement.empty />;
  if (!ComponentHalfy) ComponentHalfy = () => <DefaultElement.halfy />;
  if (!ComponentFully) ComponentFully = () => <DefaultElement.fully />;

  const [IDX, setIDX] = useState(parseInt(externalValue, 10));
  const [clickedIDX, setClickedIDX] = useState("");

  const [subIDX, setSubIDX] = useState(externalValue % 1);
  const [clickedSubIDX, setClickedSubIDX] = useState("");

  const onMouseOver = (e, idx, subIDX) => {
    setIDX(idx);
    setSubIDX(subIDX);
  };

  const onMouseLeave = () => {
    setIDX(clickedIDX);
    setSubIDX(clickedSubIDX);
  };

  const onClick = (e, idx, subIDX) => {
    setIDX(idx);
    setClickedIDX(idx);
    setSubIDX(subIDX);
    setClickedSubIDX(subIDX);
    clickHandler(idx + subIDX);
  };

  return (
    <div>
      <div className="rating">
        {Array(ratingSize)
          .fill(null)
          .map((star, idx) => {
            return (
              <RatingItem
                key={idx}
                itemSize={itemSize}
                ComponentEmpty={ComponentEmpty}
                ComponentFully={ComponentFully}
                ComponentHalfy={ComponentHalfy}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
                idx={idx}
                currentIDX={IDX}
                subIDX={subIDX}
              />
            );
          })}
      </div>
    </div>
  );
};

Rating.defaultProps = {
  itemSize: 100,
  ratingSize: 5
};

export default Rating;
