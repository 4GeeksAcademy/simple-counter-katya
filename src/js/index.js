//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Counter from "./component/counter.jsx";

let seconds = 0;
let minutes = 0;
let hours = 0;

const intervalID = setInterval(function () {

    seconds++
    if (seconds == 60) {
        seconds = 0
        minutes++
    }

    if (minutes == 60) {
        minutes = 0
        hours++
    }

    ReactDOM.render(
        <Counter
            secondsValue={seconds}
            minutesValue={minutes}
            hoursValue={hours}
        />,
        document.querySelector("#app")
    );
}, 1000);

//export default intervalID;