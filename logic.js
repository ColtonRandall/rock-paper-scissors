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

function playRound(playerSelection, computerSelection) {
	while (playerSelection != computerSelection) {
		playerSelection = playerSelection.toLowerCase();
		console.log("player selection is " + playerSelection);

		if (playerSelection == "rock" && computerSelection == "scissors") {
			return "You Win! Rock beats Scissors";
		} else if (playerSelection == "rock" && computerSelection == "paper") {
			return "You lose! Paper beats rock";
		}

		if (playerSelection == "scissors" && computerSelection == "paper") {
			return "You Win! Scissors beats paper";
		} else if (playerSelection == "scissors" && computerSelection == "rock") {
			return "You Lose! Rock beats paper";
		}

		if (playerSelection == "paper" && computerSelection == "rock") {
			return "You Win! Paper beats rock";
		} else if (playerSelection == "paper" && computerSelection == "scissors") {
			return "You Lose! Scissors beats paper";
		}
	}
	return "It's a tie!";
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
console.log("computer selection is " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
