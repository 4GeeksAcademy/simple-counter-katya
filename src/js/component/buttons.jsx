import React from "react";
import PropType from "prop-types"; 
import ButtonSet from "./buttonSet";
import ButtonResume from "./buttonResume";
import ButtonStop from "./buttonStop";
import ButtonReset from "./buttonReset";
import SetTimerInputs from "./setTimerInputs";


export default function Buttons(props) {

  return (
    <div className="col-9 container-fluid mt-3 d-flex justify-content-center">
      <SetTimerInputs />
      <ButtonSet set = {props.set}/>
      <ButtonReset reset = {props.reset}/>
      <ButtonResume resume = {props.resume}/>
      <ButtonStop stop = {props.stop} />
    </div>
  );
};

Buttons.propTypes = {
  set: PropType.func,
  reset: PropType.func,
  resume: PropType.func,
  stop: PropType.func
}