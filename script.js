const getComputerChoice = {} => {
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

console.log(getComputerChoice());