"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.oninput = function() {
  output.innerHTML = input.value;
  if (!input.value.length) {
    output.textContent = "незнакомец";
  }
};
