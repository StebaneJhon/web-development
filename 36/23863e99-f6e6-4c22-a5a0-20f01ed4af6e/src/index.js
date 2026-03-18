//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import react from "react";
import reactDom from "react-dom";

const date = new Date();
const year = date.getFullYear();

reactDom.render(
  <div>
    <p>Stebane</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
