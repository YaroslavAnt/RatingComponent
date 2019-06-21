import React from "react";

const RatingItem = ({
  itemSize,
  ComponentEmpty,
  ComponentFully,
  ComponentHalfy,
  onMouseOver,
  onMouseLeave,
  onClick,
  idx,
  currentIDX,
  subIDX
}) => {
  let ratingElement = <ComponentEmpty />;

  if (idx < currentIDX) {
    ratingElement = <ComponentFully />;
  }

  if (idx === currentIDX) {
    if (subIDX <= 0.5 && subIDX > 0) ratingElement = <ComponentHalfy />;
    if (subIDX <= 1 && subIDX > 0.5) ratingElement = <ComponentFully />;
  }

  return (
    <div
      style={{
        position: "relative",
        cursor: "pointer",
        width: itemSize,
        height: itemSize
      }}
    >
      {ratingElement}
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <div
          style={{ flex: 1 }}
          onMouseOver={e => onMouseOver(e, idx, 0.5)}
          onMouseLeave={onMouseLeave}
          onClick={e => onClick(e, idx, 0.5)}
        />
        <div
          style={{ flex: 1 }}
          onMouseOver={e => onMouseOver(e, idx, 1)}
          onMouseLeave={onMouseLeave}
          onClick={e => onClick(e, idx, 1)}
        />
      </div>
    </div>
  );
};

export default RatingItem;
