const gameResults = document.querySelector('#results');
const elementBtns = document.querySelectorAll('.element');
const gameScores = document.querySelector('#scores');
const gameChoices = document.querySelector('#choices');

let availableChoices = ['rock', 'paper', 'scissors'];

function elementClick(event) {
  let userChoice = event.target.getAttribute('data-element');
  playRound(userChoice);
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
  let winner = '';

  if (a == b) {
    winner = 'draw';
  } else {
    if ((a == 'rock') & (b == 'scissors')) {
      winner = 'user';
    } else if ((a == 'scissors') & (b == 'paper')) {
      winner = 'user';
    } else if ((a == 'paper') & (b == 'rock')) {
      winner = 'user';
    } else {
      winner = 'computer';
    }
  }

  return winner;
}

function playRound(userChoice) {
  let computerChoice = getComputerChoice();
  let winner = decideWinner(userChoice, computerChoice);

  const userEmoji = getChoiceEmoji(userChoice);
  const computerEmoji = getChoiceEmoji(computerChoice);
  gameChoices.textContent = `${userEmoji} VS ${computerEmoji}`;
  gameResults.textContent = `${winner} won`;

  return winner;
}
