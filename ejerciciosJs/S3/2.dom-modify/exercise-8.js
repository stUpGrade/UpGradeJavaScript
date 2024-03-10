let pElement = document.createElement("p");
pElement.textContent = "Voy en medio!";
let secondDiv = document.querySelector("div:nth-of-type(2)");
document.body.insertBefore(pElement, secondDiv);