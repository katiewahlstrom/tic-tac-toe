const squareOneElement = document.querySelector("#squareOne");
const squareTwoElement = document.querySelector("#squareTwo");
const squareThreeElement = document.querySelector("#squareThree");
const squareFourElement = document.querySelector("#squareFour");
const squareFiveElement = document.querySelector("#squareFive");
const squareSixElement = document.querySelector("#squareSix");
const squareSevenElement = document.querySelector("#squareSeven");
const squareEightElement = document.querySelector("#squareEight");
const squareNineElement = document.querySelector("#squareNine");

const currentPlayersTurnElement = document.querySelector("#currentPlayersTurn");
const winMessageElemenet = document.querySelector("#winMessage");
const resetButtonElement = document.querySelector("#resetButton");

const squares = [
  squareOneElement,
  squareTwoElement,
  squareThreeElement,
  squareFourElement,
  squareFiveElement,
  squareSixElement,
  squareSevenElement,
  squareEightElement,
  squareNineElement,
];

let isGameOver = false;
let currentPlayersTurn = "X";

squares.forEach((element) => {
  element.addEventListener("click", () => {
    const button = event.target;

    if (button.innerText || isGameOver) {
      return;
    }

    button.innerText = currentPlayersTurn;

    const winnerMessage = checkIfGameIsOver(currentPlayersTurn);

    if (winnerMessage) {
      isGameOver = true;

      winMessageElemenet.innerText = winnerMessage;
      return;
    }

    //Setting a variable based on a condition
    // = condition ? (value if true) : (value if false)
    //turnary statement
    currentPlayersTurn = currentPlayersTurn === "X" ? "O" : "X";
    currentPlayersTurnElement.innerText = currentPlayersTurn;
  });
});

function checkIfGameIsOver(playersTurn) {
  let hasPlayerWon = false;

  if (
    squareOneElement.innerText === playersTurn &&
    squareTwoElement.innerText === playersTurn &&
    squareThreeElement.innerText === playersTurn
  ) {
    hasPlayerWon = true;
  } else if (
    squareFourElement.innerText === playersTurn &&
    squareFiveElement.innerText === playersTurn &&
    squareSixElement.innerText === playersTurn
  ) {
    hasPlayerWon = true;
  } else if (
    squareSevenElement.innerText === playersTurn &&
    squareEightElement.innerText === playersTurn &&
    squareNineElement.innerText === playersTurn
  ) {
    hasPlayerWon = true;
  } else if (
    squareOneElement.innerText === playersTurn &&
    squareFourElement.innerText === playersTurn &&
    squareSevenElement.innerText === playersTurn
  ) {
    hasPlayerWon = true;
  } else if (
    squareTwoElement.innerText === playersTurn &&
    squareFiveElement.innerText === playersTurn &&
    squareEightElement.innerText === playersTurn
  ) {
    hasPlayerWon = true;
  } else if (
    squareThreeElement.innerText === playersTurn &&
    squareSixElement.innerText === playersTurn &&
    squareNineElement.innerText === playersTurn
  ) {
    hasPlayerWon = true;
  } else if (
    squareOneElement.innerText === playersTurn &&
    squareFiveElement.innerText === playersTurn &&
    squareNineElement.innerText === playersTurn
  ) {
    hasPlayerWon = true;
  } else if (
    squareThreeElement.innerText === playersTurn &&
    squareFiveElement.innerText === playersTurn &&
    squareSevenElement.innerText === playersTurn
  ) {
    hasPlayerWon = true;
  }

  if (hasPlayerWon) {
    return `🙈🙉🙊CONGRATULATIONS PLAYER ${playersTurn}!!!🙊🙉🙈`;
  } else if (
    squareOneElement.innerText !== "" &&
    squareTwoElement.innerText !== "" &&
    squareThreeElement.innerText !== "" &&
    squareFourElement.innerText !== "" &&
    squareFiveElement.innerText !== "" &&
    squareSixElement.innerText !== "" &&
    squareSevenElement.innerText !== "" &&
    squareEightElement.innerText !== "" &&
    squareNineElement.innerText !== ""
  ) {
    return "😵 TIE - NO WINNER 🥴";
  }
  return "";
}

resetButtonElement.addEventListener("click", () => {
  squares.forEach((element) => {
    element.innerText = "";
  });

  isGameOver = false;
  winMessageElemenet.innerText = "";
  currentPlayersTurn = "X";
});
