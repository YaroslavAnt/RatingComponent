import React, { useState } from "react";

const Rating = ({
  clickHandler,
  ratingSize,
  ComponentEmpty,
  ComponentHalfy,
  ComponentFully
}) => {
  const [IDX, setIDX] = useState("");
  const [clickedIDX, setClickedIDX] = useState("");

  const [subIDX, setSubIDX] = useState("");
  const [clickedSubIDX, setClickedSubIDX] = useState("");

  const onMouseOver = (e, idx, subIDX) => {
    setIDX(idx);
    setSubIDX(subIDX);
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
            let ratingElement = <ComponentEmpty />;

            if (idx < IDX) {
              ratingElement = <ComponentFully />;
            }

            if (idx === IDX) {
              if (subIDX === 0.5) ratingElement = <ComponentHalfy />;
              if (subIDX === 1) ratingElement = <ComponentFully />;
            }

            return (
              <div key={idx} style={{ position: "relative" }}>
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
                    onMouseLeave={() => {
                      setIDX(clickedIDX);
                      setSubIDX(clickedSubIDX);
                    }}
                    onClick={e => onClick(e, idx, 0.5)}
                  />
                  <div
                    style={{ flex: 1 }}
                    onMouseOver={e => onMouseOver(e, idx, 1)}
                    onMouseLeave={() => {
                      setIDX(clickedIDX);
                      setSubIDX(clickedSubIDX);
                    }}
                    onClick={e => onClick(e, idx, 1)}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Rating;
