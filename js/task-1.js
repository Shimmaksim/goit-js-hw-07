"use strict";

const task = document.querySelectorAll("li.item");

console.log(`'В списке ${task.length} категории.'`);

// const title = document.querySelectorAll(".item > h2");
// const liItems = document.querySelectorAll(".item > ul");

// for (let i = 0; i < liItems.length; i += 1) {
//   console.log(`Категория: '${title[i].textContent}'`);
//   console.log(`Количество элементов: ${liItems[i].children.length}`);
// }

const categories = document.querySelector("#categories");
// const res = categories.children.length;
// console.log(res);

const str = [...categories.children]
  .map(e => `${e.children[0].textContent}: ${e.children[1].children.length}`)
  .join("\n");
console.log(str);
