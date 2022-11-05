const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const navUl = document.querySelector("ul[id=ingredients]");
console.log(navUl);

// const list = [];

// ingredients.forEach((ingredient) => {
 
//   const navEl = document.createElement("li");
//   navEl.classList.add("item");
//   navEl.textContent = ingredient;
//   list.push(navEl)
//   // console.log(navEl);
// });

const list = ingredients.map(ingredient => {
  const navEl = document.createElement("li");
  navEl.classList.add("item");
  navEl.textContent = ingredient;
  return navEl
});

console.log(list);

navUl.append(...list);

