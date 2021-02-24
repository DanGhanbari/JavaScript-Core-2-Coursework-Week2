function todoList(todos) {
  const content = document.getElementById("content");
  // create ul and styling
  const ulEl = document.createElement("ul");
  ulEl.style.backgroundColor = "#BAB2B5";
  ulEl.style.padding = "10px";
  ulEl.style.width = "250px";

  for (let i = 0; i < todos.length; i++) {
    // create li and styling
    const liEl = document.createElement("li");
    liEl.style.backgroundColor = "EEE2DC";
    liEl.style.border = "2px #EDC7B7 solid";
    liEl.style.borderRadius = "10px";
    liEl.style.margin = "5px";
    liEl.style.padding = "5px";
    liEl.style.width = "200px";
    liEl.style.listStyle = "none";
    liEl.innerText = todos[i].todo;

    ulEl.appendChild(liEl);
    content.appendChild(ulEl);
  }
  // Line through styling
  const x = document.getElementsByTagName("li");
  for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click", () => {
      if (x[i].style.textDecoration !== "line-through")
        x[i].style.textDecoration = "line-through";
      else {
        x[i].style.textDecoration = "none";
      }
    });
  }
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
