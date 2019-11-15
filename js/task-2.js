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

// const liList = ingredients.reduce(
//   (string, item) => string + `<li>${item}</li>`,
//   ""
// );

// list.innerHTML = liList;

const items = ingredients.map(e => {
  const li = document.createElement("li");
  li.textContent = e;
  return li;
});
list.append(...items);
