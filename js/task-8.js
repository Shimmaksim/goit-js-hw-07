"use strict";

const refs = {
  input: document.querySelector('input[type="number"]'),
  render: document.querySelector('button[data-action="render"]'),
  destroy: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector("#boxes")
};

const randomColor = () => Math.floor(Math.random() * 256);

const randonRGB = () =>
  `rgb(${randomColor()},${randomColor()},${randomColor()})"`;

function createBoxes(n) {
  const initSize = 30;
  const step = 10;
  return Array(n)
    .fill("")
    .map(
      (e, i) => `<div style="width: ${initSize + step * i}px; 
        height: ${initSize + step * i}px; 
        background-color: ${randonRGB()};">
        </div>`
    )
    .join("\n");
}

refs.render.addEventListener("click", renderCollection);
refs.destroy.addEventListener("click", destroyCollection);

function renderCollection(e) {
  e.preventDefault();
  const num = +refs.input.value;
  refs.boxes.insertAdjacentHTML("afterbegin", createBoxes(num));
}

function destroyCollection(e) {
  e.preventDefault();
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}
