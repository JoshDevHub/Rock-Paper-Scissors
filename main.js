const rpsArray = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let userScore = 0;

const showGameOverModal = () => {
  const modalBox = document.querySelector('.modal-box');
  if (computerScore >= 5 || userScore >= 5) {
    modalBox.classList.add('modal-show');
  }
};

const computerPlay = () => rpsArray[Math.floor(Math.random() * 3)];

const playRound = (userInput, computerInput) => {
  const resultArray = [userInput, computerInput];

  const userRPSIndex = rpsArray.indexOf(userInput);
  const computerRPSIndex = rpsArray.indexOf(computerInput);
  if (userInput === computerInput) {
    resultArray.push('Draw');
  } else if (
    userRPSIndex - 1 === computerRPSIndex ||
    userRPSIndex + 2 === computerRPSIndex
  ) {
    resultArray.push('Win');
  } else {
    resultArray.push('Lose');
  }
  console.log(resultArray);
  return resultArray;
};

const drawResults = (resultInfo) => {
  const formatResult =
    resultInfo[2] === 'Draw' ? "It's a draw!" : `You ${resultInfo[2]}!`;

  const resultDisplay = document.querySelector('.round-outcome');
  resultDisplay.textContent = `You threw ${resultInfo[0]} ... the computer throws ${resultInfo[1]}. ${formatResult}`;
};

const trackScore = (result) => {
  const scoreDisplay = document.querySelector('.total-score');
  if (result === 'Win') userScore++;
  if (result === 'Lose') computerScore++;
  scoreDisplay.textContent = `The score is You: ${userScore} - Computer: ${computerScore}`;
};

const resetResultsBox = () => {
  const scoreDisplay = document.querySelector('.total-score');
  scoreDisplay.textContent = 'First to Five Wins!';
  const resultDisplay = document.querySelector('.round-outcome');
  resultDisplay.textContent = 'Click a button to Play!';
};

const resetGame = () => {
  computerScore = 0;
  userScore = 0;

  const modalBox = document.querySelector('.modal-box');
  modalBox.classList.remove('modal-show');

  resetResultsBox();
};

const resetButton = document.querySelector('.modal-btn');
resetButton.addEventListener('click', resetGame);

const rpsClickHandler = (event) => {
  console.log(event.target.className);
  const userInput = event.target.getAttribute('data');
  const computerInput = computerPlay();
  const result = playRound(userInput, computerInput);
  drawResults(result);
  trackScore(result[2]);
  showGameOverModal();
};

const rpsButtons = document.querySelectorAll('.rps-btn');
rpsButtons.forEach((button) =>
  button.addEventListener('click', rpsClickHandler)
);
