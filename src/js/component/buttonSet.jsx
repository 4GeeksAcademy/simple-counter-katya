import React from "react";
import PropType from "prop-types";

export default function ButtonSet(props) {
  return (
    <button type="button" className="btn btn-info m-3 col-2">
      <i className="fas fa-user-clock me-2"></i>
      Set Timer
    </button>
  );
};

ButtonSet.propTypes = {
  onClick: PropType.func
};
