function listOfColours(colours) {
  const content = document.getElementById("content");
  //create "select" element
  const selectEl = document.createElement("select");
  //create "p" element
  const pEl = document.createElement("p");

  for (let i = 0; i < colours.length; i++) {
    const optionEl = document.createElement("option");
    optionEl.innerText = colours[i];
    selectEl.appendChild(optionEl);
  }

  selectEl.addEventListener("change", () => {
    pEl.innerText = `You have selected: ${selectEl.value}`;
    pEl.style.color = `${selectEl.value}`;
  });

  content.appendChild(pEl);
  content.appendChild(selectEl);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
