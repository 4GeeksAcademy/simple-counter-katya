import React from "react";
import ButtonSet from "./buttonSet";
import ButtonResume from "./buttonResume";
import ButtonStop from "./buttonStop";
import ButtonReset from "./buttonReset";


export default function Buttons(props) {

  return (
    <div className="col-9 container-fluid mt-3 d-flex justify-content-center">
      <ButtonSet />
      <ButtonReset reset = {props.reset}/>
      <ButtonResume resume = {props.resume}/>
      <ButtonStop stop = {props.stop} />
    </div>
  );
};
