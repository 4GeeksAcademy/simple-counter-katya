import React from "react";
import PropType from "prop-types";

export default function ButtonResume(props) {
  return (
    <button onClick={props.resume} type="button" className="btn btn-success m-3 col-2">
      <i className="fas fa-play me-2"></i>
      Resume
    </button>
  );
};

ButtonResume.propTypes = {
  onClick: PropType.func
};
