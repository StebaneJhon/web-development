//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDON from "react-dom";

const date = new Date(); // "2/1/2013 1:37:08 PM"
const houer = date.getHours();

var greeting = "Good morning";
const greetingColor = { color: "red" };

switch (true) {
  case houer > 11 && houer <= 17:
    greeting = "Good Afternoon";
    greetingColor.color = "green";
    break;
  case houer > 17 && houer <= 23:
    greeting = "Good evening";
    greetingColor.color = "blue";
    break;
  default:
    greeting = "Good morning";
    greetingColor.color = "red";
}

ReactDON.render(
  <h1 className="heading" style={greetingColor}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
