////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
if (move) {
    return move
} else {
    return getInput(); 
    }
}

function getComputerMove(move) {
    if (move) {
    return move
} 
    else {
    return randomPlay(); 
    }
}

function play(playerMove,computerMove) {
    var playerTurn = getPlayerMove(playerMove);
    var computerTurn = getComputerMove(computerMove);

if(playerTurn === computerTurn) {
    return "The result is a tie!";
}

else if(playerTurn === "rock") {
        
    if(computerTurn === "scissors") {
        return "rock wins";  
    }
    else {
        return "paper wins";    
    }

}

else if(playerTurn=== "paper") {
        
    if(computerTurn === "rock") {
        return "paper wins";  
    }
    else {
        return "scissors wins";    
    }

}

else if(playerTurn === "scissors") {
        
    if(computerTurn === "paper") {
        return "scissors wins";  
    }
    else {
        return "rock wins";    
    }

    }

}

play("rock");


//STILL WORKING ON THIS//
/*function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    for (var playerWins = 0; playerWins <5; playerWins++){
        console.log(playerWins)
    }
    for (var computerWins = 0;computerWins <5;computerWins++){
        console.log(computerWins)
    }
    
    //  Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE 
    return [playerWins, computerWins];
}
    /* YOUR CODE HERE */

