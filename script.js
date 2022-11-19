const getComputerChoice = () => {
    let choice = Math.floor(Math.random()*3);
    let computerChoice;
    switch(choice){
        case 0:
          computerChoice = "Rock";
          break;
        case 1: 
          computerChoice = "Paper";
          break;
        case 2:
          computerChoice = "Scissors";
          break;
          
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}.`);
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection){
        return "It's a tie!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lose!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose!";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You win!";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You win!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win!";
    }
  }