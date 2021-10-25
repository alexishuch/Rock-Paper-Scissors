function computerPlay () {
    let randomNumber = Math.floor(Math.random()*3)+1;
    let playOutput = (randomNumber == 1) ? 'rock' :
    (randomNumber == 2) ? "paper" :
    "scissors";
    return playOutput;
}

function game() {

    let computerScore = 0;
    let playerScore = 0;

function playRound (playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt('Your Choice ?').toLowerCase();
    console.log(playerSelection);

    if (playerSelection == computerSelection) {
        alert("It's a tie !");
        return "tie";

//player chooses rock
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            alert("You Lose ! Paper beats Rock");
            computerScore++;
            return "computer";
        } else if (computerSelection == 'scissors') {
            alert("You Win ! Rock beats Scissors");
            playerScore++;
            return "player";
        }
    
//player chooses paper    
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            alert("You Win ! Paper beats Rock");
            playerScore++;
            return "player";
        } else if (computerSelection == 'scissors') {
            alert("You Lose ! Scissors beats Paper");
            computerScore++;
            return "computer";
        }
//player chooses scissors    
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            alert("You Lose ! Rock beats Scissors");
            computerScore++;
            return "computer";
        } else if (computerSelection == 'paper') {
            alert("You Win ! Scissors beats Paper");
            playerScore++;
            return "player";
        }
        }
    }

playRound();
    console.log(computerScore)
    console.log(playerScore)
playRound();
    console.log(computerScore)
    console.log(playerScore)
playRound();
    console.log(computerScore)
    console.log(playerScore)
playRound();
    console.log(computerScore)
    console.log(playerScore)
playRound();
    console.log(computerScore)
    console.log(playerScore)            

if (computerScore > playerScore) {
    alert(`You Lose ${computerScore} to ${playerScore}...`)
} else if (computerScore < playerScore) {
    alert(`You Win ${playerScore} to ${computerScore}!`)
}

}

//create 3 variables and assign them to names
//create a random number
//checks which number it corresponds to
//return the value

//prompt a choice and store it in lower case
//compare every possibilities between player and computer

//create a score variable for each player
//report a winner