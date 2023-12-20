//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Counter from "./component/counter.jsx";

let seconds = 0;
let minutes = 0;
let hours = 0;

function stopButton() {
    clearInterval(intervalID)
};

function resetButton() {
    clearInterval(intervalID);
    document.querySelector("#seconds").innerHTML = "00s";
    document.querySelector("#minutes").innerHTML = "00m";
    document.querySelector("#hours").innerHTML = "00h"
};

function resumeButton() {
    clearInterval(intervalID)
}

const intervalID = setInterval(function () {

    seconds++
    if (seconds == 60) {
        seconds = 0
        minutes++
    }

    if (minutes == 60) {
        minutes = 0
        hours++
    };


    ReactDOM.render(
        <Counter
            secondsValue={seconds}
            minutesValue={minutes}
            hoursValue={hours}
            stop={stopButton}
            reset={resetButton}
            resume={resumeButton}
        />,
        document.querySelector("#app")
    );
}, 1000);

