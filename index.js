const content = document.getElementById("content");
const startBtn = document.getElementById("start-btn");
const startDiv = document.getElementById("start-div");
const videoDiv = document.getElementById("video");
const result = document.getElementById("result");
const computerChoice = document.getElementById("computer-choice");
const playerChoice = document.getElementById("player-choice");
const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");
const stone = document.getElementById("stone");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const modalResult = document.getElementById("modal-result");
const restart = document.getElementById("restart");
const myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
const video = document.getElementById("myVideo");

let compScore = 0;
let playScore = 0;
let start = 0;
let compChoice = "";
let playChoice = "";

function generateComputerChoice() {
  let choice = Math.round(Math.random() * 100);
  if (choice >= 0 && choice <= 33) {
    return "stone";
  } else if (choice > 33 && choice <= 66) {
    return "paper";
  } else {
    return "scissor";
  }
}

function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}

function fight(comp, user) {
  if (comp === "stone" && user === "paper") {
    playScore++;
    result.innerText = "Player wins";
  } else if (comp === "stone" && user === "scissor") {
    compScore++;
    result.innerText = "Computer wins";
  } else if (comp === "paper" && user === "stone") {
    compScore++;
    result.innerText = "Computer wins";
  } else if (comp === "paper" && user === "scissor") {
    playScore++;
    result.innerText = "Player wins";
  } else if (comp === "scissor" && user === "stone") {
    playScore++;
    result.innerText = "Player wins";
  } else if (comp === "scissor" && user === "paper") {
    compScore++;
    result.innerText = "Computer wins";
  } else {
    result.innerText = "Tie";
  }
  computerScore.innerText = compScore;
  playerScore.innerText = playScore;
  if (compScore === 3 || playScore === 3) {
    setTimeout(() => {
      showResult();
    }, 500);
  }
}

function showResult() {
  if (compScore > playScore) {
    modalResult.innerText = "Computer Wins";
  } else if (compScore < playScore) {
    modalResult.innerText = "Player Wins";
  } else {
    modalResult.innerText = "Tie";
  }
  myModal.show();
  compScore = 0;
  playScore = 0;
  compChoice = "blank";
  playChoice = "blank";
  result.innerText = "Start Game!!";
  computerScore.innerText = "";
  playerScore.innerText = "";
  playerChoice.src = "./images/blank.png";
  computerChoice.src = "./images/blank.png";
}

stone.addEventListener("click", () => {
  playChoice = "stone";
  playerChoice.src = "./images/stone.png";
  compChoice = generateComputerChoice();
  computerChoice.src = `./images/${compChoice}.png`;
  fight(compChoice, playChoice);
});

paper.addEventListener("click", () => {
  playChoice = "paper";
  playerChoice.src = "./images/paper.png";
  compChoice = generateComputerChoice();
  computerChoice.src = `./images/${compChoice}.png`;
  fight(compChoice, playChoice);
});

scissor.addEventListener("click", () => {
  playChoice = "scissor";
  playerChoice.src = "./images/scissor.png";
  compChoice = generateComputerChoice();
  computerChoice.src = `./images/${compChoice}.png`;
  fight(compChoice, playChoice);
});

restart.addEventListener("click", () => {
  myModal.hide();
  content.style.display = "none";
  videoDiv.style.display = "block";
  playVideo();
  setTimeout(() => {
    videoDiv.style.display = "none";
    content.style.display = "block";
  }, 2500);
});

startBtn.addEventListener("click", () => {
  startDiv.style.display = "none";
  videoDiv.style.display = "block";
  playVideo();
  setTimeout(() => {
    videoDiv.style.display = "none";
    content.style.display = "block";
  }, 2500);
});
