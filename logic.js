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
			return "You Lose! Paper beats rock";
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

function game() {
	// set up players
	let playerPoints = 0;
	let computerPoints = 0;

	// while the players have less than 5 points
	while (playerPoints < 5 && computerPoints < 5) {
		let playerSelection = prompt("📃 or ✂️ or 🪨?");
		let computerSelection = getComputerChoice();
		let roundWinner = playRound(playerSelection, computerSelection);

		if (roundWinner.includes("You Win!")) {
			playerPoints++;
			// if (player <= 5) {
			// 	console.log("YOU WIN!");
			// 	return;
		} else if (roundWinner.includes("You Lose!")) {
			computerPoints++;
			// if (computer <= 5) {
			// 	console.log("Computer WON! YOU LOSE!");
			// 	return;
		}
		console.log(roundWinner);
		console.log("player points " + playerPoints);
		console.log("computer points " + computerPoints);
	}

	if (computerPoints == 5) {
		console.log("Game over! Computer Wins! 🤖");
	} else if (playerPoints == 5) {
		console.log("Game over! You Win! 🎉🎉🎉");
	}
}

game();
