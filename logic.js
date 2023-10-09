// Create computer selection
let computerSelection;

// Get the computer's choice
function getComputerChoice() {
	let choice = Math.round(Math.random() * 2);
	if (choice === 0) {
		return "rock";
	} else if (choice === 1) {
		return "paper";
	} else if (choice === 2) {
		return "scissors";
	}
}

// Div to display results on screen
const displayResults = document.querySelector('#results');

// Div to display player's score
let playerScore = 0;
let displayPlayerScore = document.querySelector('#playerScore');
displayPlayerScore.textContent = 'Your score: ' + playerScore;

// Div to display computer's score
let computerScore = 0;
let displayComputerScore = document.querySelector('#computerScore');
displayComputerScore.textContent = 'Computer\'s score: ' + computerScore;



// Add event listeners to each button that call playRound()
const chooseRock = document.querySelector('#rock');
const choosePaper = document.querySelector('#paper');
const chooseScissors = document.querySelector('#scissors'); 

// Player chooses rock
chooseRock.addEventListener('click', () => {
	computerSelection = getComputerChoice();
	playerSelection = 'rock';
	playRound(playerSelection, computerSelection);
});

// Player chooses paper
choosePaper.addEventListener('click', () => {
	computerSelection = getComputerChoice();
	playerSelection = 'paper';
	playRound(playerSelection, computerSelection);
})

// Player chooses scissors
chooseScissors.addEventListener('click', () =>{
	computerSelection = getComputerChoice();
	playerSelection = 'scissors';
	playRound(playerSelection, computerSelection);
})

// If the player chooses rock, play the game with rock
function rockResults(){
	if (playerSelection == "rock" && computerSelection == "scissors") {
		displayResults.textContent = "You Win! Rock beats Scissors";
		displayPlayerScore.textContent = 'Your score: ' + playerScore++;
	} else if (playerSelection == "rock" && computerSelection == "paper") {
		displayResults.textContent =  "You Lose! Paper beats rock";
		displayComputerScore.textContent = 'Computer\'s score: ' + computerScore++;
	} else if (playerSelection == "rock" && computerSelection == "rock") {
		displayResults.textContent =  "It's a tie!";
	}
}

// If the player chooses scissors, play the game with scissors
function scissorsResults(){
	if (playerSelection == "scissors" && computerSelection == "paper") {
		displayResults.textContent =  "You Win! Scissors beats paper";
		displayPlayerScore.textContent = 'Your score: ' + playerScore++;
	} else if (playerSelection == "scissors" && computerSelection == "rock") {
		displayResults.textContent =  "You Lose! Rock beats paper";
		displayComputerScore.textContent = 'Computer\'s score: ' + computerScore++;
	} else if (playerSelection == "scissors" && computerSelection == "scissors") {
		displayResults.textContent =  "It's a tie!";
	}
} 

// If the player chooses paper, play the game with scissors
function paperResults(){
	if (playerSelection == "paper" && computerSelection == "rock") {
		displayResults.textContent =  "You Win! Paper beats rock";
		displayPlayerScore.textContent = 'Your score: ' + playerScore++;
	} else if (playerSelection == "paper" && computerSelection == "scissors") {
		displayResults.textContent =  "You Lose! Scissors beats paper";
		displayComputerScore.textContent = 'Computer\'s score: ' + computerScore++;
	} else if (playerSelection == "paper" && computerSelection == "paper") {
		displayResults.textContent =  "It's a tie!";
	}
}

function playRound(playerSelection) {
	if(playerSelection == 'rock'){
		rockResults();
	} else if (playerSelection == 'scissors'){
		scissorsResults();
	} else if (playerSelection == 'paper'){
		paperResults();
	}
		return "It's a tie!";
}


// function game() {
// 	let playerPoints = 0;
// 	let computerPoints = 0;

// 	while (playerPoints < 5 && computerPoints < 5) {
// 		let playerSelection = prompt("📃 or ✂️ or 🪨?");
// 		let computerSelection = getComputerChoice();
// 		let roundWinner = playRound(playerSelection, computerSelection);

// 		if (roundWinner.includes("You Win!")) {
// 			playerPoints++;
// 		} else if (roundWinner.includes("You Lose!")) {
// 			computerPoints++;
// 		}
// 		console.log(roundWinner);
// 		console.log("player points " + playerPoints);
// 		console.log("computer points " + computerPoints);
// 	}

// 	if (computerPoints == 5) {
// 		console.log("Game over! Computer Wins! 🤖");
// 	} else if (playerPoints == 5) {
// 		console.log("Game over! You Win! 🎉🎉🎉");
// 	}
// }

