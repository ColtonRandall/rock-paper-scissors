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
	if (computerSelection == "scissors") {
		playerScore++;
		displayPlayerScore.textContent = 'Your score: ' + playerScore;
		displayResults.textContent = "You Win! Rock beats Scissors";
	} else if (computerSelection == "paper") {
		computerScore++;
		displayComputerScore.textContent = 'Computer\'s score: ' + computerScore;
		displayResults.textContent =  "You Lose! Paper beats rock";
	} else if (computerSelection == "rock") {
		displayResults.textContent =  "It's a tie!";
	}
}

// If the player chooses scissors, play the game with scissors
function scissorsResults(){
	if (computerSelection == "paper") {
		playerScore++;
		displayResults.textContent =  "You Win! Scissors beats paper";
		displayPlayerScore.textContent = 'Your score: ' + playerScore;
	} else if (computerSelection == "rock") {
		computerScore++;
		displayResults.textContent =  "You Lose! Rock beats paper";
		displayComputerScore.textContent = 'Computer\'s score: ' + computerScore;
	} else if (computerSelection == "scissors") {
		displayResults.textContent =  "It's a tie!";
	}
} 

// If the player chooses paper, play the game with scissors
function paperResults(){
	if (computerSelection == "rock") {
		playerScore++;
		displayResults.textContent =  "You Win! Paper beats rock";
		displayPlayerScore.textContent = 'Your score: ' + playerScore;
	} else if (computerSelection == "scissors") {
		computerScore++;
		displayResults.textContent =  "You Lose! Scissors beats paper";
		displayComputerScore.textContent = 'Computer\'s score: ' + computerScore;
	} else if (computerSelection == "paper") {
		displayResults.textContent =  "It's a tie!";
	}
}

// Player clicks a button and chooses
function playRound(playerSelection) {
	if(playerSelection == 'rock'){
		rockResults();
		determineWinner();
	} else if (playerSelection == 'scissors'){
		scissorsResults();
		determineWinner();
	} else if (playerSelection == 'paper'){
		paperResults();
		determineWinner();
	}
}

// Limit the game to 5 points
function determineWinner(){
	if(playerScore >= 5){
		displayResults.textContent = 'YOU WIN THE GAME! 😊';
		resetScores();
	} else if(computerScore >= 5){
		displayResults.textContent = 'COMPUTER WINS THE GAME! 👾';
		resetScores();
	}
}


function resetScores(){
	playerScore = 0;
	computerScore = 0;
	displayPlayerScore.textContent = 'Your score: ' + playerScore;
	displayComputerScore.textContent = 'Computer\'s score: ' + computerScore;
}