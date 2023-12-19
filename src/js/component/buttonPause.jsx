import React from "react";
import PropType from "prop-types";

export default function ButtonPause(props) {
  return (
    <button type="button" className="btn btn-warning m-3 col-2">
      <i className="fas fa-pause me-2"></i>
      Pause
    </button>
  );
};

ButtonPause.propTypes = {
  onClick: PropType.func
};
