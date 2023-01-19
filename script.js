let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const getComputerChoice = () => {
    let choice = Math.floor(Math.random()*3);
    let computerChoice;
    switch(choice){
        case 0:
          computerChoice = "rock";
          break;
        case 1: 
          computerChoice = "paper";
          break;
        case 2:
          computerChoice = "scissors";
          break;
          
    }
    return computerChoice;
}


function playRound(playerSelection) {
    if (gameOver){
        computerScore = 0;
        playerScore = 0;
        const winner = document.querySelector('.winner');
        winner.textContent = "";
        gameOver = false;
        
    }
    let computerSelection = getComputerChoice();
    const banner = document.querySelector('.console');
    let matchReport = `You chose ${playerSelection}. Computer chose ${computerSelection}.`;
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
    let resultString = "";
    if (result == 1){
        resultString = "You win!";
    }
    else if (result == 2){
        resultString = "You lose!";
    }
    else {
        resultString = "It's a draw!";
    }
    banner.textContent = (matchReport + " " + resultString);
    console.log(matchReport + " " + resultString);
    game(result);
  }   

  const game = (result) => {
    if (result == 1){
        playerScore++;
    }
    else if (result == 2){
        computerScore++;
    }
    const yourScore = document.querySelector('.yourScore');
    yourScore.textContent = playerScore;
    const computerScores = document.querySelector('.computerScores');
    computerScores.textContent = computerScore;
    const winner = document.querySelector('.winner');
    if (playerScore === 5){
        winner.textContent = "You win!";
        gameOver = true;
    }
    else if (computerScore === 5){
        winner.textContent = "Computer wins!";
        gameOver = true;
    }
    
  }