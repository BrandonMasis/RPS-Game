let availableChoices = ['rock', 'paper', 'scissors'];

function getUserChoice() {
  let userChoice = prompt(
    'Pick your element: 1 (rock) 2 (paper) 3 (scissors)'
  ).toLowerCase();

  if ((userChoice == '1') | (userChoice == '2') | (userChoice == '3')) {
    return availableChoices[parseInt(userChoice) - 1];
  } else {
    getUserChoice();
  }
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * availableChoices.length);
  return availableChoices[randomNumber];
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

function startRound() {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
  let winner = decideWinner(userChoice, computerChoice);

  console.log(`👤 ${userChoice} VS 🤖 ${computerChoice}`);

  return winner;
}

function playGame(rounds) {
  rounds = parseInt(rounds);
  let userScore = 0;
  let computerScore = 0;

  console.log('New game starts, good luck');

  for (let currentRounds = 0; currentRounds < rounds; currentRounds++) {
    let winner = startRound();

    if (winner == 'user') {
      userScore++;
    } else if (winner == 'computer') {
      computerScore++;
    }

    console.log(`👤 user:${userScore} | 🤖 computer:${computerScore}`);
  }

  if (userScore == computerScore) {
    console.log('Game finished, it was a Draw');
  } else if (userScore > computerScore) {
    console.log('Game finished, user wins!');
  } else {
    console.log('Game finished, computer wins!');
  }
}
//Play game
// count=0
// start rounds till counter reaches 5
// check player and machine scores, and say who won.
// restart the counters to 0
