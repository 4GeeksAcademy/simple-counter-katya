import React from "react";
import PropType from "prop-types";
import Buttons from "./buttons";

export default function Counter(props) {
  return (
    <div>
      <div className="col-9 container-fluid py-5 d-flex justify-content-center bg-black rounded-bottom shadow text-white">
        <i className="far fa-clock fw-bold m-2 fs-1"></i>
        <h1 className="fw-bold m-2">{props.hoursValue}h </h1>
        <h1 className="fw-bold m-2">{props.minutesValue}m </h1>
        <h1 className="fw-bold m-2">{props.secondsValue}s</h1>
      </div>
      <div>
        <Buttons />
      </div>
    </div>
  );
}

Counter.propTypes = {
  counter: PropType.number,
  minutesValue: PropType.number,
  secondsValue: PropType.number,
};
