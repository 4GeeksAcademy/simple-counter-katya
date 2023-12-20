//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Counter from "./component/counter.jsx";

let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = true;

// -FUNCTIONS-

displayCounter();

let intervalID = setInterval(updateCounter, 1000)

function setButton() {
    clearInterval(intervalID);
    seconds = parseInt(document.querySelector("#secondsInput").value);
    minutes = parseInt(document.querySelector("#minutesInput").value);
    hours = parseInt(document.querySelector("#hoursInput").value);
    
    if (!seconds || !minutes || !hours) {
        alert("Please fill in the fields")
        
    } else if (seconds || minutes || hours) {
        intervalID = setInterval(updateCounter, 1000);
    }
    
};

function stopButton() {
    if (!seconds || !minutes || !hours) {
        alert("Please fill in the fields")
        
    } else {
        clearInterval(intervalID);
    isRunning = false;
};
    }
    

function resetButton() {
    clearInterval(intervalID);
    seconds = 0;
    minutes = 0;
    hours = 0;
    isRunning = false;
    displayCounter();
};

function resumeButton() {
    if (!seconds || !minutes || !hours) {
        alert("Please fill in the fields")
        
    } else {
        if (!isRunning) {
        isRunning = true;
        intervalID = setInterval(updateCounter, 1000);
    }
    }
    
};

function updateCounter() {

    seconds++
    if (seconds == 60) {
        seconds = 0
        minutes++
    }

    if (minutes == 60) {
        minutes = 0
        hours++
    };

    displayCounter();
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


