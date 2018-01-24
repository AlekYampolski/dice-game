// import { currentId } from "async_hooks";

// var scores = [0, 0]; //Store scores of players
// var playerScore = ".player__score--"; // Acces to DOM element
// var activePlayer = 0;
// var dice = 0;

// var player0 = document.querySelector(playerScore + activePlayer);
// var tablo = document.querySelector(".results__tablo");
// var btnDice = document.querySelector(".btn--dice");

// // player0.textContent = 0;
// var currentScore = 0;
// // console.log(holdBtn);
// btnDice.addEventListener("click", function() {
//   dice = Math.floor(Math.random() * 6 + 1);
//   if (dice === 1) {
//     console.log("Alert! " + dice);
//     tablo.textContent = 0;
//     currentScore = 0;
//     document.querySelector(playerScore+'0').classList.toggle('active');
//     document.querySelector(playerScore+'1').classList.toggle('active');
//   } else {
//     currentScore += dice;
//     console.log(dice);
//     tablo.textContent = currentScore;
//   }
// });

// var btnHold = document.querySelector(".btn--hold");
// btnHold.addEventListener("click", function() {
//   scores[activePlayer] += currentScore;
//   player0.textContent = scores[activePlayer];
//   dice = 0;
//   currentScore = 0;
//   tablo.textContent = 0;
//   activePlayer === 0 ? activePlayer = 1 : activePlayer= 0;
//   document.querySelector(playerScore+'0').classList.toggle('active');
//   document.querySelector(playerScore+'1').classList.toggle('active');
// });


var scores = [0,0];
var playerSelector = '.player__score--';
var currentScore = 0;
var dice = 0;
var activePlayer = 0;

var players = [
    document.querySelector(playerSelector + '0'),
    document.querySelector(playerSelector + '1')
]

var tablo = document.querySelector('.results__tablo');
document.querySelector(playerSelector + '0').textContent = 2;


clearData();
var classList = document.getElementById('results').classList;
while (classList.length > 0) {
    classList.remove(classList.item(0));
}
console.log(document.getElementById('results'));
//Action for button .btn--dice
document.querySelector('.btn--dice').addEventListener('click', function(){
    dice = Math.floor(Math.random()*6  + 1);
    console.log(dice);
    if (dice !== 1){
        currentScore += dice;
        console.log("activeplayer is " + activePlayer);
    } else {
        playerChange();
        currentScore = 0;
    }
    tabloScore(currentScore);
  

/* In a case of multiple classes
     
     while (classList.length > 0) {
        classList.remove(classList.item(0));
     }
 */
    document.getElementById('results').classList.remove(classList.item(0));
    document.getElementById('results').classList.add('mDice-'+dice);

});

//Action for hold
document.querySelector('.btn--hold').addEventListener('click', function(){
    scores[activePlayer] += currentScore;
    document.querySelector('.player__score--' + activePlayer).textContent = scores[activePlayer];
    
    currentScore = 0;
    if(scores[activePlayer] >= 10) {
        clearData();
        console.log('new game');
    };
    playerChange();
    tabloScore(0);
});

//Functions

function clearData(){
    document.querySelector(playerSelector + '0').textContent = 0;
    document.querySelector(playerSelector + '1').textContent = 0;
}

function playerChange(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
}

function tabloScore(num){
    document.querySelector('.results__tablo').textContent = num;
}