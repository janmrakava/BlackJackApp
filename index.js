let firstCard = 11;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

if (sum <= 20) {
  message = "Chceš ještě další kartu? 🧐";
} else if (sum === 21) {
  message = "Máš Blackjack bráško 🥳";
  hasBlackJack = true;
} else {
  message = "Jseš mimo hru, máš vice jak 21. 😭"
  isAlive = false;
}

console.log(hasBlackJack);
console.log(isAlive);
console.log(message);
