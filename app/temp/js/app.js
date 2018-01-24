var scores = [0, 0],
  currentScore = 0,
  dice = 0,
  activePlayer = 0;

//Shortcuts for DOM elements
var playerSelector = ".player__score--";
var diceShow = document.getElementById("dice").classList;

//Dice's things. If dice is 1 current scrore gets 0 and active player is changed;
document.querySelector(".btn--dice").addEventListener("click", function() {
  dice = Math.floor(Math.random() * 6 + 1);
  
  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(".results__tablo").textContent = currentScore;
    // console.log("dice is " + dice + " and current score = " + currentScore);
    diceShow.remove(diceShow.item(0));
    diceShow.add("mDice-" + dice);
    // console.log(diceShow);
} else {
    nextPlayer();
    clearLight();
    diceShow.add("mDice-" + dice);
    // console.log(dice);
  }
});

// Save current score for active player
document.querySelector(".btn--hold").addEventListener("click", function() {
  scores[activePlayer] += currentScore;
  document.querySelector(playerSelector + activePlayer).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    alert("Grats, " + activePlayer + " !");
    clearAll();
  }
  clearLight();
  nextPlayer();
});

// New Game
document.querySelector(".btn--new-game").addEventListener('click', function(){
    clearAll();
    alert('New game');
});


// FUNCTOINS

//Clear all data
function clearAll() {
  clearLight();
  activePlayer = 0; //?
  scores = [0, 0];
  document.querySelector(playerSelector + 0).textContent = 0;
  document.querySelector(playerSelector + 1).textContent = 0;
}

// Change player
function nextPlayer() {
//   console.log("Player = " + activePlayer);
  currentScore = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".results__tablo").textContent = 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
}

//Clears current score and dice img
function clearLight() {
  currentScore = 0;
  diceShow.remove(diceShow.item(0));
}
