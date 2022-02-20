let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el") //už umíme dávno
//let sumEl = document.querySelector("#sum-el") //Více profesionáln možnost, proto je potřeba být více specifický
let cardsEl = document.getElementById("cards-el")


function startGame(){
  renderGame();
}

function renderGame(){
  sumEl.textContent += sum;
  cardsEl.textContent += cards[0] + " " + cards[1];
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
  let card = 7;
  sum += card;
  renderGame();

}
