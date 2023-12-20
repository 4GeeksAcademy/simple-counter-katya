import React from "react";

export default function SetTimerInputs() {
  return (
    <div className="col-5 container-fluid mt-4 d-flex justify-content-start">
      <input
        type="number"
        className="form-control mx-2"
        id="hoursInput"
        placeholder="Hours"
        aria-label="Hours"
        min="1"
        max="23"
      />

      <input
        type="number"
        className="form-control mx-2"
        id="minutesInput"
        placeholder="Minutes"
        aria-label="Minutes"
        min="0"
        max="59"
      />

      <input
        type="number"
        className="form-control mx-2"
        id="secondsInput"
        placeholder="Seconds"
        aria-label="Seconds"
        min="0"
        max="59"
      />
    </div>
  );
}
