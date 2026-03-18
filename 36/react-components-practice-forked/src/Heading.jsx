import React from "react";
import "./../public/styles.css";

function time() {
  const date = new Date();
  return date.getHours();
}

function gretting(time) {
  let greeting;
  if (time < 12) {
    greeting = "Good Morning";
  } else if (time < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Night";
  }
  return greeting;
}

function color(time) {
  const customStyle = {
    color: "",
  };
  if (time < 12) {
    customStyle.color = "red";
  } else if (time < 18) {
    customStyle.color = "green";
  } else {
    customStyle.color = "blue";
  }
  return customStyle;
}

function Heading() {
  const currentTime = time();
  let greeting = gretting(currentTime);
  const customStyle = color(currentTime);

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
