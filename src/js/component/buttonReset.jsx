import React from "react";
import PropType from "prop-types";

export default function ButtonReset(props) {
  return (
    <button
      onClick={props.reset}
      type="button"
      className="btn btn-warning m-3 col-2"
    >
      <i className="fas fa-sync-alt me-2"></i>
      Reset
    </button>
  );
}

ButtonReset.propTypes = {
  onClick: PropType.func,
};
