import React from "react";

export default function Buttons() {
  return (
    <div className="col-9 container-fluid mt-3 d-flex justify-content-center">
      <button type="button" className="btn btn-info m-3 col-2">
        <i className="fas fa-user-clock me-2"></i>
        Set timer
      </button>
      <button type="button" className="btn btn-warning m-3 col-2">
        <i className="fas fa-pause me-2"></i>
        Pause
      </button>
      <button type="button" className="btn btn-success m-3 col-2">
        <i className="fas fa-play me-2"></i>
        Resume
      </button>
      <button type="button" className="btn btn-danger m-3 col-2">
        <i className="fas fa-stop me-2"></i>
        Stop
      </button>
    </div>
  );
}
