let firstCard = 11;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")


function startGame(){
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
  sumEl.textContent += sum;
}

console.log(hasBlackJack);
console.log(isAlive);
console.log(message);
