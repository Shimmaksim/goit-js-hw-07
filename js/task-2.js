"use strict";
const list = document.querySelector("#ingredients");

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const liList = ingredients.reduce(
  (string, item) => string + `<li>${item}</li>`,
  ""
);

list.innerHTML = liList;
