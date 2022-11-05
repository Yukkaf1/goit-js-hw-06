// console.log("HW6-task-01");



const navEl = document.querySelectorAll("li.item");
// console.log(navEl);
console.log("Number of categories:", navEl.length);
console.log("");

// const El = document.querySelectorAll("li.item li");
// console.log(El);

// console.log(navEl[0]);

const navEl0Text = navEl[0].querySelector("h2");
console.log("Category:", navEl0Text.textContent);

const El0 = navEl[0].querySelectorAll("li");
console.log("Elements:", El0.length);

console.log("");

const navEl1Text = navEl[1].querySelector("h2");
console.log("Category:", navEl1Text.textContent);

const El1 = navEl[1].querySelectorAll("li");
console.log("Elements:", El1.length);

console.log("");

const navEl2Text = navEl[2].querySelector("h2");
console.log("Category:", navEl2Text.textContent);

const El2 = navEl[2].querySelectorAll("li");
console.log("Elements:", El2.length);

// console.log("");

// const navEl3Text = navEl[3].querySelector("h2");
// console.log("Category:", navEl3Text.textContent);

// const El3 = navEl[3].querySelectorAll("li");
// console.log("Elements:", El0.length);