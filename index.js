let firstCard = 11;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el") //už umíme dávno
//let sumEl = document.querySelector("#sum-el") //Více profesionáln možnost, proto je potřeba být více specifický
let cardsEl = document.getElementById("cards-el")

function startGame(){
  sumEl.textContent += sum;
  cardsEl.textContent += firstCard + " " + secondCard;
  if (sum <= 20) {
    message = "Chceš ještě další kartu?";
  } else if (sum === 21) {
    message = "Máš Blackjack bráško";
    hasBlackJack = true;
  } else {
    message = "Jseš mimo hru, máš vice jak 21."
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard(){
  console.log("Nová karta vytažena");
}

console.log(hasBlackJack);
console.log(isAlive);
console.log(message);
