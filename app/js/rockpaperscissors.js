////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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
        return "player";  
    }
    else {
        return "computer";    
    }

}

else if(playerTurn=== "paper") {
        
    if(computerTurn === "rock") {
        return "player";  
    }
    else {
        return "computer";    
    }

}

else if(playerTurn === "scissors") {
        
    if(computerTurn === "paper") {
        return "player";  
    }
    else {
        return "computer";    
    }

    }

}



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner;
    var playerMove;
    var computerMove;
    
    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
   
        winner = play(playerMove, computerMove);

        if (winner === "player") {
            playerWins +=1;
            console.log("joy! you, the player, have won!");
        }
        else if (winner === "computer") {
            computerWins +=1;
            console.log("sadness--the computer has won.");
        }
        else if (playerMove === computerMove) {
            console.log("A tie. No one has one. Play another round?");
        }
    
    console.log("Player played " + playerMove +  " and computer played " + computerMove +".");
    console.log("The score is player " + playerWins + " and Computer " + computerWins + ".");
       
        }
    

    return [playerWins, computerWins];
    
    }


playToFive();
