// Selecting buttons
const blueButton = document.getElementById("blueBtn");
const orangeButton = document.getElementById("orangeBtn");
const greenButton = document.getElementById("greenBtn");
// Selecting elements that we want to modify
const jumbotron = document.getElementsByClassName("jumbotron")[0];
const donateButton = document.getElementsByClassName(
  "btn btn-primary btn-lrg"
)[0];
const volunteerButton = document.getElementsByClassName(
  "btn btn-secondary btn-lrg"
)[0];
// Adding event listener to blue button
blueButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#588fbd";
  donateButton.style.backgroundColor = "#ffa500";
  volunteerButton.style.color = "white";
  volunteerButton.style.backgroundColor = "black";
});
// Adding event listener to orange button
orangeButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donateButton.style.backgroundColor = "#5751fd";
  volunteerButton.style.color = "white";
  volunteerButton.style.backgroundColor = "#31b0d5";
});
// Adding even listener to green button
greenButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateButton.style.backgroundColor = "black";
  volunteerButton.style.backgroundColor = "#8c9c08";
});

// Selecting submit Button
const submitButton = document.getElementsByClassName("btn btn-primary")[5];
const emailInput = document.getElementById("exampleInputEmail1");
const nameInput = document.getElementById("example-text-input");
const descriptionInput = document.getElementById("exampleTextarea");

// Email Validator function
function emailValidation(email) {
  if (/\S+@/g.test(email.value)) {
    return true;
  } else {
    return false;
  }
}
// Adding event listener to submit button
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!emailValidation(emailInput)) {
    alert("Invalid Email address!");
    emailInput.style.backgroundColor = "red";
  } else if (nameInput.value.length === 0) {
    nameInput.style.backgroundColor = "red";
  } else if (descriptionInput.value.length === 0) {
    nameInput.style.backgroundColor = "";
    descriptionInput.style.backgroundColor = "red";
  } else {
    descriptionInput.style.backgroundColor = "";
    alert("thank you for filling out the form");
  }
});
