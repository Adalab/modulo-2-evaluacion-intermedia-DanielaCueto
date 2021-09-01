"user strict";

//constantes
const boxNumber = document.querySelector(".js-boxNumber");
const tryButton = document.querySelector(".js-button");
const hintText = document.querySelector(".js-hint");
const numAttemptsText = document.querySelector(".js-attempts");
let numAttempts = 0;

//funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(99) + 1;
console.log(randomNumber);

function handleAttempt() {
  const guessValue = parseInt(boxNumber.value);
  //console.log(guessValue);
  if (guessValue === randomNumber) {
    hintText.innerHTML = "¡¡Has ganado campeona!!";
  } else if (guessValue < randomNumber) {
    hintText.innerHTML = "Demasiado bajo";
  } else {
    hintText.innerHTML = "Demasiado alto";
  }
  numAttempts = numAttempts + 1;
  numAttemptsText.innerHTML = numAttempts;
}

//eventos
tryButton.addEventListener("click", handleAttempt);

// que me piden:
// generar un número aleatorio entre el 1 y el 100
// pistas sobre si el numero que prueba esta demasiado alto o bajo
// contabiliza el numero de intentos que he ha introduzido
