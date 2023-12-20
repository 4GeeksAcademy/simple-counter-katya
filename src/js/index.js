//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Counter from "./component/counter.jsx";

let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = true;



displayCounter();

let intervalID = setInterval(updateCounter, 1000)

function setButton() {

    clearInterval(intervalID);

    seconds = parseInt(document.querySelector("#secondsInput").value);
    minutes = parseInt(document.querySelector("#minutesInput").value);
    hours = parseInt(document.querySelector("#hoursInput").value);

    if (seconds || minutes || hours) {

        if (!seconds) seconds = 0;
        if (!minutes) minutes = 0;
        if (!hours) hours = 0;

        intervalID = setInterval(countDown, 1000); 

    } else {

        alert("Please fill in the fields");

    };
};

function stopButton() {

    if (seconds || minutes || hours) {

        clearInterval(intervalID);
        isRunning = false;

    } else {

        alert("Please fill in the fields");

    };
};

function resetButton() {

    clearInterval(intervalID);

    seconds = 0;
    minutes = 0;
    hours = 0;
    isRunning = false;

    displayCounter();
};

function resumeButton() {

    if (!isRunning && (seconds || minutes || hours)) {

        isRunning = true;
        intervalID = setInterval(countDown, 1000);

    } else {

        alert("Please fill in the fields");

    };
};

function updateCounter() {

    seconds++;

    if (seconds == 60) {
        seconds = 0
        minutes++
    };

    if (minutes == 60) {
        minutes = 0
        hours++
    };

    displayCounter();
};

function countDown() {

    if (seconds === 0 && minutes === 0 && hours === 0) {

        clearInterval(intervalID);
        isRunning = false;

        alert("Countdown complete!");

    } else {
        if (seconds === 0) {

            if (minutes > 0) {
                minutes--;
                seconds = 59;

            } else if (hours > 0) {

                hours--;
                minutes = 59;
                seconds = 59;

            }
        } else {

            seconds--;
        };

        displayCounter();
    };
};

function displayCounter() {

    ReactDOM.render(
        <Counter
            secondsValue={seconds}
            minutesValue={minutes}
            hoursValue={hours}
            stop={stopButton}
            reset={resetButton}
            resume={resumeButton}
            set={setButton}
        />,
        document.querySelector("#app")
    );
};


