import React from "react";

export const empty = () => (
  <div
    className="rating__element rating__star"
    style={{
      backgroundPositionX: "50%",
      width: "100%",
      height: "100%"
    }}
  />
);

export const halfy = () => (
  <div
    className="rating__element rating__star"
    style={{
      backgroundPositionX: "25%",
      width: "100%",
      height: "100%"
    }}
  />
);

export const fully = () => (
  <div
    className="rating__element rating__star"
    style={{
      backgroundPositionX: "0%",
      width: "100%",
      height: "100%"
    }}
  />
);
