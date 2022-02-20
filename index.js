let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el") //už umíme dávno
//let sumEl = document.querySelector("#sum-el") //Více profesionáln možnost, proto je potřeba být více specifický
let cardsEl = document.getElementById("cards-el")

let player = {
  name : "Honza",
  credit : 2000,
  sayHello: function(){
    console.log("DObrej šéfe")
  }
  }

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " " + player.credit + " CZK"
player.sayHello();

function getRandomCard(){
  let randomNumber = Math.floor(Math.random()*13)+1;
  if (randomNumber === 1){
    return 11
  } else if (randomNumber > 10){
    return 10
  } else {
    return randomNumber
  }
}


function startGame(){
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum += firstCard + secondCard;
  renderGame();
}

function renderGame(){
  sumEl.textContent = "Součet: ";
  sumEl.textContent += sum;
  cardsEl.textContent = "Karty: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Chceš ještě další kartu?";
  } else if (sum === 21) {
    message = "Máš Blackjack bráško";
    hasBlackJack = true;
    player.credit+=100;
    playerEl.textContent = player.name + " " + player.credit + " CZK"

  } else {
    message = "Jseš mimo hru, máš vice jak 21."
    isAlive = false;
    player.credit-=100;
    playerEl.textContent = player.name + " " + player.credit + " CZK"
  }
  messageEl.textContent = message;
}

function newCard(){
  if (isAlive && !(hasBlackJack)){
  let card = getRandomCard();
  cards.push(card);
  console.log(cards);
  sum += card;
  renderGame();
}

}
