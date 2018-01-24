var scores = [0, 0],
  currentScore = 0,
  dice = 0,
  activePlayer = 0;

//Shortcuts for DOM elements
var tablo = document.querySelector(".results__tablo");
var playerSelector = ".player__score--";
var showScore = document.querySelector(".results__tablo");

var diceShow = document.getElementById("results").classList;
//Dice's things. If dice is 1 that s
document.querySelector(".btn--dice").addEventListener("click", function() {
  dice = Math.floor(Math.random() * 6 + 1);

  if (dice !== 1) {
    currentScore += dice;
    showScore.textContent = currentScore;
    console.log("dice is " + dice + " and current score = " + currentScore);
    diceShow.remove(diceShow.item(0));
    diceShow.add("mDice-" + dice);
    console.log(diceShow);
  } else {
    nextPlayer();
    console.log(dice);
  }
});

// Save current score for active player
document.querySelector(".btn--hold").addEventListener("click", function() {
  scores[activePlayer] += currentScore;
  document.querySelector(playerSelector + activePlayer).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 10) {
    alert("Grats, " + activePlayer + " !");
    clearAll();
  }
  nextPlayer();
});

function clearAll() {
  dice = 0;
  currentScore = 0;
  
  activePlayer = 0; //?
  scores = [0, 0];
  document.querySelector(playerSelector + 0).textContent = 0;
  document.querySelector(playerSelector + 1).textContent = 0;
}

function nextPlayer() {
  console.log("Player = " + activePlayer);
  currentScore = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  tablo.textContent = 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
}

function clearLight(){
    currentScore = 0;
    diceShow.remove(diceShow.item(0));

}