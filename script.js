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
    let result = 0;
    if (playerSelection == computerSelection){
        //console.log("It's a tie!")
        result = 0;
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        //console.log("You lose!");
        result = 2;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        //console.log("You lose!");
        result = 2;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        //console.log("You lose!");
        result = 2;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        //console.log("You win!");
        result = 1;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        //console.log("You win!");
        result = 1;
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        //console.log("You win!");
        result = 1;
    }
    if (result == 1){
        console.log("You win!");
    }
    else if (result == 2){
        console.log("You lose!");
    }
    else {
        console.log("It's a draw!");
    }
    return result;
  }

  const getPlayerChoice = () =>{
    
  }

  const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let result = 0;
    for (let i=0, i<5, i++)
    {
        result = playRound(getPlayerChoice(), getComputerChoice());
        if (result === 1){
            playerScore++;
        }
        else if (result === 2){
            computerScore++;
        }
    }
    console.log(`You won ${playerScore} rounds. The computer won ${computerScore} rounds.`);
    if (playerScore>computerScore){
        console.log('You win!');
    }
    else if (computerScore>playerScore){
        console.log('You lose!');
    }
    else {
        console.log("It's a draw");
    }
  }