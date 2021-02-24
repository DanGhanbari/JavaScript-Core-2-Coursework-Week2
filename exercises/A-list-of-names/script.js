function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  for (let i = 0; i < arrayOfPeople.length; i++) {
    //Created "h1" tag and appended it to the "div"
    let h1El = document.createElement("h1");
    content.appendChild(h1El);

    //Created "h2" tag and appended it to the "div"
    let h2Els = document.createElement("h2");
    content.appendChild(h2Els);

    h1El.innerText = arrayOfPeople[i].name;
    h2Els.innerText = arrayOfPeople[i].job;
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
