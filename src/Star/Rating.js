import React, { useRef, useState } from "react";
import "./Rating.css";
import Star from "./Star";

const Rating = props => {
  const ref = useRef(null);

  const [progress = 0, setValue] = useState(props.rating || "");

  const [progressClick, setClickValue] = useState("");

  const onTrack = e => {
    const rating = document.getElementById("rating");
    return setValue(
      Math.round(((e.clientX - rating.offsetLeft) * 100) / rating.offsetWidth)
    );
  };

  const onClick = e => {
    const rating = document.getElementById("rating");
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
        {Array(5)
          .fill(null)
          .map((star, idx) => {
            return (
              <Star
                number={idx}
                key={idx}
                progress={progress || progressClick}
              />
            );
          })}
      </div>

      <div>{"progress " + progress}</div>

      <input type="text" value={progress} onChange={e => onChange(e)} />
    </div>
  );
};

export default Rating;
