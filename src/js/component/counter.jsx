import React from "react";
import PropType from "prop-types";

export default function Counter(props) {
  return (
    <div className="container-fluid py-5">
      <h1 className="display-5 fw-bold">
        {props.hoursValue}h {props.minutesValue}m {props.secondsValue}s
      </h1>
    </div>
  );
}

Counter.propTypes = {
  counter: PropType.number,
  minutesValue: PropType.number,
  secondsValue: PropType.number,
};
