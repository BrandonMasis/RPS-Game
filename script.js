const gameResults = document.querySelector('#results');
const elementBtns = document.querySelectorAll('.element');
const gameScores = document.querySelector('#scores');
const gameChoices = document.querySelector('#choices');

let availableChoices = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;

function elementClick(event) {
  let userChoice = event.target.getAttribute('data-element');
  playRound(userChoice);
  checkScores();
}

elementBtns.forEach((btn) => {
  btn.addEventListener('click', elementClick);
});

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * availableChoices.length);
  return availableChoices[randomNumber];
}

function getChoiceEmoji(choice) {
  switch (choice) {
    case 'rock':
      return '🪨';
    case 'paper':
      return '📄';
    case 'scissors':
      return '✂️';
    default:
      return '';
  }
}

function decideWinner(a, b) {
  if (a === b) return 'draw';
  if (
    (a === 'rock' && b === 'scissors') ||
    (a === 'scissors' && b === 'paper') ||
    (a === 'paper' && b === 'rock')
  ) {
    return 'user';
  }
  return 'computer';
}

function updateScores(winner) {
  if (winner == 'user') {
    userScore += 1;
  } else if (winner == 'computer') {
    computerScore += 1;
  }

  gameScores.textContent = `User: ${userScore} | Computer: ${computerScore}`;
}

function checkScores() {
  if (userScore == 5) {
    gameResults.textContent = `User wins the game!`;
    endGame();
    userScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    gameResults.textContent = `Computer wins the game!`;
    endGame();
    userScore = 0;
    computerScore = 0;
  }
}

function playRound(userChoice) {
  let computerChoice = getComputerChoice();
  let winner = decideWinner(userChoice, computerChoice);

  const userEmoji = getChoiceEmoji(userChoice);
  const computerEmoji = getChoiceEmoji(computerChoice);
  gameChoices.textContent = `${userEmoji} VS ${computerEmoji}`;

  if (winner == 'draw') {
    gameResults.textContent = `${winner}`;
  } else {
    gameResults.textContent = `${winner} wins`;
  }

  updateScores(winner);
}

function endGame() {
  gameScores.textContent = ``;
  gameChoices.textContent = ``;

  elementBtns.forEach((btn) => {
    let originalEmoji = btn.textContent;
    btn.textContent = '🎉';
    btn.classList.toggle('endgame');
    btn.removeEventListener('click', elementClick);

    setTimeout(() => {
      gameResults.textContent = `Rock Paper Scissors`;
      restoreGame(btn, originalEmoji);
    }, 5000); // 5000 milliseconds = 5 seconds
  });
}

function restoreGame(btn, originalEmoji) {
  btn.textContent = originalEmoji;
  btn.classList.toggle('endgame');
  btn.addEventListener('click', elementClick);
}
