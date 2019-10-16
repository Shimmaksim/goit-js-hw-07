"use strict";

const value = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
btnDecrement.addEventListener("click", increment);
btnIncrement.addEventListener("click", decrement);
let counterValue = 0;

function increment() {
  counterValue += 1;
  value.innerHTML = counterValue;
}

function decrement() {
  counterValue -= 1;
  value.innerHTML = counterValue;
}
