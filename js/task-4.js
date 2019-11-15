"use strict";

// const value = document.querySelector("#value");
// const btnDecrement = document.querySelector('button[data-action="decrement"]');
// const btnIncrement = document.querySelector('button[data-action="increment"]');
// btnDecrement.addEventListener("click", increment);
// btnIncrement.addEventListener("click", decrement);
// let counterValue = 0;

// function increment() {
//   counterValue += 1;
//   value.innerHTML = counterValue;
// }

// function decrement() {
//   counterValue -= 1;
//   value.innerHTML = counterValue;
// }

const counter = document.querySelector("#counter");
const value = document.querySelector("#value");

const actions = {
  state: {
    value: 0
  },
  decrement() {
    this.state.value -= 1;
  },
  increment() {
    this.state.value += 1;
  }
};

const changeValue = ({ target }) => {
  actions[target.dataset.action]();
  value.textContent = actions.state.value;
};

counter.addEventListener("click", changeValue);
