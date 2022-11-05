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

const list = [];

ingredients.forEach((ingredient) => {
 
  const navEl = document.createElement("li");
  navEl.classList.add("item");
  navEl.textContent = ingredient;
  list.push(navEl)
  // console.log(navEl);
});

console.log(list);

navUl.append(...list);

// const navEl = document.createElement("li");
// navEl.classList.add("item");
// navEl.textContent = ingredients[0];
// console.log(navEl);




// navUl.appendChild(navEl);
// console.log(navUl);

