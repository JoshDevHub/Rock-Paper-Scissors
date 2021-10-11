const rpsArray = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let userScore = 0;

const getComputerInput = () =>
  rpsArray[Math.floor(Math.random() * rpsArray.length)];

const playRound = (userInput, computerInput) => {
  let result = '';

 /**
  * Using index arithmetic with the rpsArray to check the winner saves a lot of 
  * lines & avoids messy, nested conditional checking.
  */ 
  const userRPSIndex = rpsArray.indexOf(userInput);
  const computerRPSIndex = rpsArray.indexOf(computerInput);
  if (userInput === computerInput) {
    result += 'Draw';
  } else if (
    userRPSIndex - 1 === computerRPSIndex ||
    userRPSIndex + 2 === computerRPSIndex
  ) {
    result += 'Win';
    userScore++;
  } else {
    result += 'Lose';
    computerScore++;
  }
  return result;
};

const drawResults = (userInput, computerInput, result) => {
  const formatResult = result === 'Draw' ? "It's a draw!" : `You ${result}!`;

  const resultDisplay = document.querySelector('.round-outcome');
  resultDisplay.textContent = `You threw ${userInput} ... the computer throws ${computerInput}. ${formatResult}`;
};

const drawScore = () => {
  const scoreDisplay = document.querySelector('.total-score');
  scoreDisplay.textContent = `The score is You: ${userScore} - Computer: ${computerScore}`;
};

const isGameOver = () => {
  return computerScore > 4 || userScore > 4;
};

const toggleModal = () => {
  const modalBox = document.querySelector('.modal-box');
  const modalOverlay = document.querySelector('.modal-overlay');
  modalBox.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
};

const resetResultsBox = () => {
  const scoreDisplay = document.querySelector('.total-score');
  scoreDisplay.textContent = 'First to Five Wins!';
  const resultDisplay = document.querySelector('.round-outcome');
  resultDisplay.textContent = 'Click a button to Play!';
};

const resetClickHandler = () => {
  computerScore = 0;
  userScore = 0;

  toggleModal();
  resetResultsBox();
};

const modalResult = document.querySelector('.modal-result');
modalResult.textContent = userScore > 4 ? 'You Win!' : 'Computer Wins';

const resetButton = document.querySelector('.modal-btn');
resetButton.addEventListener('click', resetClickHandler);

const rpsClickHandler = (event) => {
  const userInput = event.target.getAttribute('data');
  const computerInput = getComputerInput();
  const result = playRound(userInput, computerInput);
  drawResults(userInput, computerInput, result);
  drawScore();
  if (isGameOver()) toggleModal();
};

const rpsButtons = document.querySelectorAll('.rps-btn');
rpsButtons.forEach((button) =>
  button.addEventListener('click', rpsClickHandler)
);
