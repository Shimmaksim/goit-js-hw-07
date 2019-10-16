"use strict";

const slider = document.querySelector("#font-size-slider");
const span = document.querySelector("#text");

slider.addEventListener("input", function() {
  span.style.fontSize = slider.value + "px";
});
