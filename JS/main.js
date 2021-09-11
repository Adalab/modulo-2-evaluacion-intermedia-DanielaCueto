"user strict";

const boxNumber = document.querySelector(".js-boxNumber");
const tryButton = document.querySelector(".js-button");
const hintText = document.querySelector(".js-hint");
const numAttemptsText = document.querySelector(".js-attempts");
let numAttempts = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(99) + 1;

function handleAttempt(ev) {
  ev.preventDefault();
  giveFeedBack();
  updateAttempts();
}
function giveFeedBack() {
  const guessValue = parseInt(boxNumber.value);
  if (guessValue < 1 || guessValue > 100) {
    hintText.innerHTML = "El número es inválido";
  } else if (guessValue === randomNumber) {
    hintText.innerHTML = "¡¡Has ganado campeona!!";
  } else if (guessValue < randomNumber) {
    hintText.innerHTML = "Demasiado bajo";
  } else {
    hintText.innerHTML = "Demasiado alto";
  }
}
function updateAttempts() {
  numAttempts = numAttempts + 1;
  numAttemptsText.innerHTML = numAttempts;
}

tryButton.addEventListener("click", handleAttempt);
