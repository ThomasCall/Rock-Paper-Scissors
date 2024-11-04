let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if(choice == 0){
        return "rock"
    } else if (choice == 1){
        return "paper"
    } else{
        return "scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("Rock, paper or scissors?")
    if(choice.toLowerCase() == "rock" ||
        choice.toLowerCase() == "paper" ||
        choice.toLowerCase() == "scissors"
    ){ 
        return choice.toLowerCase()
    }
}

function playRound(humanChoice, computerChoice){
    switch(humanChoice) {
        case "rock":
            if(computerChoice == "paper"){
                computerScore++
                break;
            }
            else if (computerChoice == "scissors"){
                humanScore++
                break;
            }
            else{
                break;
            }
        case "paper":
            if(computerChoice == "scissors"){
                computerScore++
                break;
            }
            else if (computerChoice == "rock"){
                humanScore++
                break;
            }
            else{
                break;
            }
        case "scissors":
            if(computerChoice == "rock"){
                computerScore++
                break;
            }
            else if (computerChoice == "paper"){
                humanScore++
                break;
            }
            else{
                break;
            }
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        console.log(humanSelection)
        console.log(computerSelection)
        playRound(humanSelection, computerSelection)
    }

    if(humanScore > computerScore){
        console.log(`Player: ${humanScore} - Computer: ${computerScore}`)
        console.log("I win!")
    } else if (computerScore > humanScore){
        console.log(`Player: ${humanScore} - Computer: ${computerScore}`)
        console.log("You lose!")
    } else{
        console.log(`Player: ${humanScore} - Computer: ${computerScore}`)
        console.log("It's a draw!")
    }
}

playGame()