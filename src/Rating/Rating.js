import React, { useRef, useState } from "react";
import RatingElement from "./RatingElement";

const Rating = ({
  rating,
  clickHandler,
  ratingSize,
  ComponentEmpty,
  ComponentHalfy,
  ComponentFully
}) => {
  const ref = useRef(null);

  const [progress = 0, setValue] = useState(rating || "");

  const [progressClick, setClickValue] = useState("");

  const onTrack = e => {
    const rating = document.getElementById("rating");
    return setValue(
      Math.round(((e.clientX - rating.offsetLeft) * 100) / rating.offsetWidth)
    );
  };

  const onClick = e => {
    const rating = document.getElementById("rating");
    clickHandler(
      Math.round(((e.clientX - rating.offsetLeft) * 100) / rating.offsetWidth)
    );
    return setClickValue(
      Math.round(((e.clientX - rating.offsetLeft) * 100) / rating.offsetWidth)
    );
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div
        className="rating"
        id="rating"
        ref={ref}
        onMouseMove={e => onTrack(e)}
        onMouseLeave={() => setValue("")}
        onClick={e => onClick(e)}
      >
        {Array(ratingSize)
          .fill(null)
          .map((star, idx, arr) => {
            return (
              <RatingElement
                ratingSize={arr.length}
                number={idx}
                key={idx}
                progress={progress || progressClick}
                ComponentEmpty={ComponentEmpty}
                ComponentHalfy={ComponentHalfy}
                ComponentFully={ComponentFully}
              />
            );
          })}
      </div>

      <br />

      <div>{"progress " + progress}</div>

      <input type="text" value={progress} onChange={e => onChange(e)} />
    </div>
  );
};

export default Rating;
