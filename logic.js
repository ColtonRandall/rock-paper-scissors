

/* TODO:
	- Add logic to each button (as done for Rock below)
	- Fix playRound() logic to not hard code playerSelection or computerSelection
		within the method lines 35/36)
	- Add div to show current score for each round.
*/

const displayResults = document.querySelector('#results');

//Add event listeners to each button that call playRound()
const chooseRock = document.querySelector('#rock');
	chooseRock.addEventListener('click', () => {
		playRound();
		console.log('success');
	});



// function getComputerChoice() {
// 	let choice = Math.round(Math.random() * 2);
// 	if (choice === 0) {
// 		return "rock";
// 	} else if (choice === 1) {
// 		return "paper";
// 	} else if (choice === 2) {
// 		return "scissors";
// 	}
// }



function playRound() {
	let playerSelection = 'rock';
	let computerSelection = 'paper';
		if (playerSelection == "rock" && computerSelection == "scissors") {
			displayResults.textContent = "You Win! Rock beats Scissors";
		} else if (playerSelection == "rock" && computerSelection == "paper") {
			displayResults.textContent =  "You Lose! Paper beats rock";
		}

		if (playerSelection == "scissors" && computerSelection == "paper") {
			displayResults.textContent =  "You Win! Scissors beats paper";
		} else if (playerSelection == "scissors" && computerSelection == "rock") {
			displayResults.textContent =  "You Lose! Rock beats paper";
		}

		if (playerSelection == "paper" && computerSelection == "rock") {
			displayResults.textContent =  "You Win! Paper beats rock";
		} else if (playerSelection == "paper" && computerSelection == "scissors") {
			displayResults.textContent =  "You Lose! Scissors beats paper";
		
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

