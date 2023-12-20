import React from "react";
import PropType from "prop-types";
import Buttons from "./buttons";
import SetTimerInputs from "./setTimerInputs";

export default function Counter(props) {
  return (
    <div>
      <div className="col-9 container-fluid py-5 d-flex justify-content-center bg-black rounded-bottom shadow text-white">
        <i className="far fa-clock fw-bold m-2 fs-1"></i>
        <h1 id="hours" className="fw-bold m-2">
          {props.hoursValue < 10 ? `0${props.hoursValue}` : props.hoursValue}h{" "}
        </h1>
        <h1 id="minutes" className="fw-bold m-2">
          {props.minutesValue < 10
            ? `0${props.minutesValue}`
            : props.minutesValue}
          m{" "}
        </h1>
        <h1 id="seconds" className="fw-bold m-2">
          {props.secondsValue < 10
            ? `0${props.secondsValue}`
            : props.secondsValue}
          s
        </h1>
      </div>
      <div>
        <SetTimerInputs />
       <Buttons stop = {props.stop} reset = {props.reset} resume = {props.resume}/>
      </div>
    </div>
  );
}

Counter.propTypes = {
  counter: PropType.number,
  minutesValue: PropType.number,
  secondsValue: PropType.number,
};
