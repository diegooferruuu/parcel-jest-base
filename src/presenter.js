import sumar from "./sumador";
import mult from "./mult";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const firstMult = document.querySelector("#primer-numero-mult");
const secondMult = document.querySelector("#segundo-numero-mult");
const formMult = document.querySelector("#mult-form");
const divMult = document.querySelector("#resultado-mult-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

formMult.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstMult.value);
  const secondNumber = Number.parseInt(secondMult.value);

  divMult.innerHTML = "<p>" + mult(firstNumber, secondNumber) + "</p>";
});