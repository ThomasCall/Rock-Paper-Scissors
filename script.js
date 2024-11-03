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

console.log(getComputerChoice())
console.log(getHumanChoice())