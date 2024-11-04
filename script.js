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
    let choice = prompt("Rock, paper or scissors?").toLowerCase()
    if(choice == "rock"){
        return "rock"
    } else if(choice == "paper"){
        return "paper"
    } else if(choice == "scissors"){
        return "scissors"
    } else{
        return "You didn't choose rock, paper or scissors"
    }
}

function playRound(humanChoice, computerChoice){
    switch(humanChoice) {
        case "rock":
            if(computerChoice == "paper"){
                console.log("You lose! Paper beats Rock")
                computerScore++
                break;
            }
            else if (computerChoice == "scissors"){
                console.log("I win! Rock beats Scissors")
                humanScore++
                break;
            }
            else{
                console.log("No winner!")
                break;
            }
        case "paper":
            if(computerChoice == "scissors"){
                console.log("You lose! Scissors beats Paper")
                computerScore++
                break;
            }
            else if (computerChoice == "rock"){
                console.log("I win! Paper beats Rock")
                humanScore++
                break;
            }
            else{
                console.log("No winner!")
                break;
            }
        case "scissors":
            if(computerChoice == "rock"){
                console.log("You lose! Rock beats Scissors")
                computerScore++
                break;
            }
            else if (computerChoice == "paper"){
                console.log("I win! Scissors beats Paper")
                humanScore++
                break;
            }
            else{
                console.log("No winner!")
                break;
            }
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()
playRound(humanSelection, computerSelection)