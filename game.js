const resultDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');
const winnerDiv = document.querySelector('#winner');
const buttons = document.querySelectorAll('button');

let computerScore = 0;
let playerScore = 0;

function resetGame () {
    computerScore = 0;
    playerScore = 0;
    scoreDiv.textContent = '';
    resultDiv.textContent = '';
}

function playRound (playerSelection) {

    winnerDiv.textContent = '';

    let computerPlay = function () {
        let randomNumber = Math.floor(Math.random()*3)+1;
        let playOutput = (randomNumber == 1) ? 'rock' :
        (randomNumber == 2) ? "paper" :
        "scissors";
        return playOutput;
    }

computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        resultDiv.textContent = "It's a tie !";
        scoreDiv.textContent = `${playerScore} - ${computerScore}` ;
        return "tie";

//player chooses rock
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            computerScore++;
            scoreDiv.textContent = `${playerScore} - ${computerScore}` ;
        resultDiv.textContent = "It's a tie !";    
        } else if (computerSelection == 'scissors') {
            resultDiv.textContent = "You Win ! Rock beats Scissors";
            playerScore++;
            scoreDiv.textContent = `${playerScore} - ${computerScore}` ;
        }
    
//player chooses paper    
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            resultDiv.textContent = "You Win ! Paper beats Rock";
            playerScore++;
            scoreDiv.textContent = `${playerScore} - ${computerScore}` ;
        } else if (computerSelection == 'scissors') {
            resultDiv.textContent = "You Lose ! Scissors beats Paper";
            computerScore++;
            scoreDiv.textContent = `${playerScore} - ${computerScore}` ;
        }
        
//player chooses scissors    
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            resultDiv.textContent = "You Lose ! Rock beats Scissors";
            computerScore++;
            scoreDiv.textContent = `${playerScore} - ${computerScore}` ;
        } else if (computerSelection == 'paper') {
            resultDiv.textContent = "You Win ! Scissors beats Paper";
            playerScore++;
            scoreDiv.textContent = `${playerScore} - ${computerScore}` ;
        }
    }
    
//declare winner
    if (playerScore == 5) {
        winnerDiv.textContent = `You won ${playerScore} to ${computerScore} !`;
        resetGame();
      } else if (computerScore == 5) {
        winnerDiv.textContent = `You lost ${computerScore} to ${playerScore}...`;
        resetGame();
      };

}

buttons.forEach(button => button.addEventListener('click',() => {console.log(button.id);
    playRound(button.id);
    })
    )

