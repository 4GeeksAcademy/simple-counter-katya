import React from "react";
import ButtonSet from "./buttonSet";
import ButtonPause from "./buttonPause";
import ButtonResume from "./buttonResume";
import ButtonStop from "./buttonStop";
//import intervalID from "..";

export default function Buttons() {

  return (
    <div className="col-9 container-fluid mt-3 d-flex justify-content-center">
      <ButtonSet />
      <ButtonPause />
      <ButtonResume />
      <ButtonStop />
    </div>
  );
}
