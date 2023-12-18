//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Counter from "./component/counter.jsx";

let seconds = 0;
let minutes = 0;
let hours = 0;

const intervalID = setInterval(function () {

    if (seconds < 59) {
        seconds++
    } else {
        seconds = 0
        if (minutes < 59) {
            minutes++
        } else {
            minutes = 0
            if (hours < 24) {
                hours++
            } else {
                hours = 0
            }
        }
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

//render your react application
