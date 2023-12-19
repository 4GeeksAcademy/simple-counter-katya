import React from "react";
import PropType from "prop-types";

export default function ButtonStop(props) {
  return (
    <button type="button" id="buttonStop" className="btn btn-danger m-3 col-2">
      <i className="fas fa-stop me-2"></i>
      Stop
    </button>
  );
};

ButtonStop.propTypes = {
  onClick: PropType.func
};
