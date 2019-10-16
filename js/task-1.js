"use strict";

const categories = document.querySelectorAll("li.item");

console.log(`'В списке ${categories.length} категории.'`);
// let i = 0;
// categories.forEach(item => {
//   console.log(`Категория: ${item.firstElementChild.innerHTML}`);
//   console.log(`Количество элементов: ${item[i].children.length}`);
// });

const title = document.querySelectorAll(".item > h2");
const liItems = document.querySelectorAll(".item > ul");

for (let i = 0; i < liItems.length; i += 1) {
  console.log(`Категория: '${title[i].textContent}'`);
  console.log(`Количество элементов: ${liItems[i].children.length}`);
}
