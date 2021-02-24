function shoppingList(arrayOfPeople) {
  const divEl = document.getElementById("content");
  const ulEl = document.createElement("ul");
  divEl.appendChild(ulEl);
  for (let i = 0; i < arrayOfPeople.length; i++) {
    const liEls = document.createElement("li");
    liEls.innerHTML = arrayOfPeople[i];
    ulEl.appendChild(liEls);
  }
  console.log(divEl);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
