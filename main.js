const rpsArray = ['rock', 'paper', 'scissors'];

const computerPlay =() => rpsArray[Math.floor(Math.random() * 3)];

const getUserInput = () => {
  const userInput = prompt('Choose Rock, Paper, or Scissors').toLowerCase();
  const userInputLowerCase = userInput.toLowerCase();
  if (rpsArray.includes(userInputLowerCase)) return userInputLowerCase;
  console.log('You didn\'t input one of the correct choices!');
  return getUserInput();
}

// Function to play a single round of rock, paper, scissors
const playRound = (userChoice, computerChoice) => {
  // Switch to compare userChoice with computerChoice and return the result;
  switch (userChoice) {
    case computerChoice:
      return 'Tie Game';
    case 'rock':
      return computerChoice === 'paper' ? 'Computer Wins' : 'User Wins';
    case 'paper':
      return computerChoice === 'scissors' ? 'Computer Wins' : 'User Wins';
    case 'scissors':
      return computerChoice === 'rock' ? 'Computer Wins' : 'User Wins';
      // default to catch any errors.
    default:
      return 'Error';
  }
}

// Plays a full RPS Game in best of 5 --> so first to 3 wins is the overall winner.
const game = () => {
  let computerScore = 0;
  let userScore = 0;
  let userInput, computerInput;
  while (computerScore < 3 && userScore < 3) {
    userInput = getUserInput();
    computerInput = computerPlay();
    let result = playRound(userInput, computerInput);
    // check & display results/gamestate
    if (result === 'Computer Wins') {
      computerScore++;
      console.log(`Computer wins this round! The current score is computer: ${computerScore} you: ${userScore}.`);
    } else if (result === 'User Wins') {
      userScore++;
      console.log(`User wins this round! The current score is computer: ${computerScore} you: ${userScore}.`);
    } else if (result === 'Tie Game') {
      console.log(`It's a draw! The current score is computer: ${computerScore} you: ${userScore}.`);
    } else {
      console.log('Error');
    }
  }
  // returns winner
  if (computerScore > userScore) {
    return `Computer wins by a score of ${computerScore} to ${userScore}!`;
  }
  if (userScore > computerScore) {
    return `You win by a score of ${userScore} to ${computerScore}`;
  }
  return 'Error';
}

console.log(game());