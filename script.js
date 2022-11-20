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

function playRound(playerSelection, computerSelection) {
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
    alert(matchReport + " " + resultString);
    console.log(matchReport + " " + resultString);
    return result;
  }

  const getPlayerChoice = () =>{
    let done = false;
    let choice = "";
    while (!done)
    {
      choice = prompt("Rock, paper or scissors?");
      choice = choice.toLowerCase();
      if (choice == "rock" || choice == "paper" || choice == "scissors"){
          done = true;
      }
      else { 
        alert("Invalid choice");
      }
    }
    return choice;
  }     

  const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let result = 0;
    for (let i=0; i<5; i++)
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