import React from "react";

export default function SetTimerInputs() {
  return (

    <div className="container-fluid d-flex justify-content-start">
      <input
        type="number"
        className="form-control my-3 mx-2"
        id="hoursInput"
        placeholder="Hour"
        aria-label="Hours"
        min="1"
        max="23"
      />
      
      <input
        type="number"
        className="form-control my-3 mx-2"
        id="minutesInput"
        placeholder="Min"
        aria-label="Minutes"
        min="0"
        max="59"
      />

      <input
        type="number"
        className="form-control my-3 mx-2"
        id="secondsInput"
        placeholder="Sec"
        aria-label="Seconds"
        min="0"
        max="59"
      />
    </div>
  );
}