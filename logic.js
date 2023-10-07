
const displayResults = document.querySelector('#results');

// Add event listeners to each button that call playRound()
const chooseRock = document.querySelector('#rock');
const choosePaper = document.querySelector('#paper');
const chooseScissors = document.querySelector('#scissors'); 

// Create computer selection
let computerSelection;
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

chooseRock.addEventListener('click', () => {
	computerSelection = getComputerChoice();
	playerSelection = 'rock';
	playRound(playerSelection, computerSelection);
	console.log('successfully chose rock');
	console.log('computer: ' + computerSelection);
	console.log('player: ' + playerSelection);
});

choosePaper.addEventListener('click', () => {
	computerSelection = getComputerChoice();
	playerSelection = 'paper';
	playRound(playerSelection, computerSelection);
	console.log('successfully chose paper');
})

chooseScissors.addEventListener('click', () =>{
	computerSelection = getComputerChoice();
	playerSelection = 'scissors';
	playRound(playerSelection, computerSelection);
	console.log('successfully chose scissors');
})



function playRound(playerSelection, computerSelection) {
		if (playerSelection == "rock" && computerSelection == "scissors") {
			displayResults.textContent = "You Win! Rock beats Scissors";
		} else if (playerSelection == "rock" && computerSelection == "paper") {
			displayResults.textContent =  "You Lose! Paper beats rock";
		} else if (playerSelection == "rock" && computerSelection == "rock") {
			displayResults.textContent =  "It's a tie!";
		}

		if (playerSelection == "scissors" && computerSelection == "paper") {
			displayResults.textContent =  "You Win! Scissors beats paper";
		} else if (playerSelection == "scissors" && computerSelection == "rock") {
			displayResults.textContent =  "You Lose! Rock beats paper";
		} else if (playerSelection == "scissors" && computerSelection == "scissors") {
			displayResults.textContent =  "It's a tie!";
		}

		if (playerSelection == "paper" && computerSelection == "rock") {
			displayResults.textContent =  "You Win! Paper beats rock";
		} else if (playerSelection == "paper" && computerSelection == "scissors") {
			displayResults.textContent =  "You Lose! Scissors beats paper";
		} else if (playerSelection == "paper" && computerSelection == "paper") {
			displayResults.textContent =  "It's a tie!";
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

