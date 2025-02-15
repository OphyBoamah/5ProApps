'use script'

// Selecting Elements
const playerOneScore = document.querySelector('#score--0');
const playerTwoScore = document.querySelector('#score--1');
const diceImage = document.querySelector('.dice');
const diceRoll = document.querySelector('.btn--roll')
const playerOneCurrent = document.querySelector('#current--0')
const playerTwoCurrent = document.querySelector('#current--1')
const holdButton = document.querySelector('.btn--hold')
const newGame = document.querySelector('.btn--new')
const players = document.querySelectorAll('.player')
const playerOne = document.querySelector('.player--0')
const playerTwo = document.querySelector('.player--1')


// Initial Value or Game Empty State
  playerOneScore.textContent=0;
  playerTwoScore.textContent=0;
  diceImage.classList.add('hidden')

// Initialize a New Game
const startAfresh = () => {
  const scores = [0, 0]
  let currentScore = 0;
  let activePlayer = 0;
  let playing = true;
  playerOneScore.textContent=0;
  playerTwoScore.textContent=0;
  playerOneCurrent.textContent=0;
  playerTwoCurrent.textContent=0;
  playerOne.classList.remove('player--winner');
  playerTwo.classList.remove('player--winner');
  playerOne.classList.add('player--active');
  playerTwo.classList.remove('player--active');
  diceImage.classList.add('hidden')
}
startAfresh();

newGame.addEventListener('click', startAfresh)

const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      playerOne.classList.toggle('player--active')
      playerTwo.classList.toggle('player--active')
}

let rndRoll = 0;

const rollDice = () => {
  rndRoll = Math.floor(Math.random() * 6) + 1;
    
  // c. Display dice according to number
  diceImage.classList.remove('hidden')
  diceImage.src = `./img/dice-${rndRoll}.png`
  // console.log(rndRoll)
}


  const addCurrentScore = () => {
    if (rndRoll !== 1) {
      currentScore += rndRoll
      document.getElementById(`current--${activePlayer}`).textContent = currentScore
      // playerOneCurrent.textContent = currentScore;
    } else {
      switchPlayer()
    }
    console.log(currentScore)
  } 

//    const activePlayerToggle = () => {
//      activePlayer = activePlayer === 0 ? 1 : 0;
//      currentScore = 0;
//       //  player.classList.toggle('player--active')
// }

    const updateScores = () => {
    if (currentScore !== 0) {
      playerOneScore.textContent = currentScore;
      currentScore = 0;
      playerOneCurrent.textContent = currentScore;
    } else {
      currentScore = 0;
    }
    
  } 

 
// Player 1's Turn
// a. Roll dice
diceRoll.addEventListener('click', function () {
  if (playing) {
  // b. Generate Random number between 1 and 6
  rollDice();
    // d. If it's 1 display 0 and pass to player 2 else add to current score
  addCurrentScore()
  activePlayerToggle()
} 
})

// e. Hold adds current score to total score and pass to player 2
holdButton.addEventListener('click', function () {
  if (playing) {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

  // Check if player's score is >= 100
  if (scores[activePlayer] >= 20) {
    playing = false;
    diceImage.classList.add('hidden')
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  }
  switchPlayer()
  } else {
    holdButton.ariaDisabled = true;
  }
})

// New Game
