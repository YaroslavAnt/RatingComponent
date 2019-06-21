import React from "react";

export const empty = ({ itemSize }) => (
  <div
    className="rating__element rating__star"
    style={{
      backgroundPositionX: "50%",
      width: itemSize,
      height: itemSize
    }}
  />
);

export const halfy = ({ itemSize }) => (
  <div
    className="rating__element rating__star"
    style={{
      backgroundPositionX: "25%",
      width: itemSize,
      height: itemSize
    }}
  />
);

export const fully = ({ itemSize }) => (
  <div
    className="rating__element rating__star"
    style={{
      backgroundPositionX: "0%",
      width: itemSize,
      height: itemSize
    }}
  />
);
