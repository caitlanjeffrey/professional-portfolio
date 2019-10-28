// variables
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessRemain = 9; //total guesses per round
var userGuessSoFar = []; //user choice array

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("Computer Guess: " + computerGuess);

document.onkeyup = function(event) {
    var userGuess = event.key;
    userGuessSoFar.push(userGuess);
    
    for (i = 0; i < userGuessSoFar.length; i++) {
        document.getElementById("userguess").innerHTML = ("<p><strong>Letters Guessed: </strong></p>" + userGuessSoFar);
        console.log("User Guess: " + userGuess);
    };

    if (userGuess === computerGuess) {
        alert("You won this round...");
        wins++;
        guessRemain = 9
        userGuessSoFar = [];
        document.getElementById("wins").innerHTML = wins;
        resetgame();
    };
    
    if (userGuess !== computerGuess) {
        guessRemain--;
        document.getElementById("guesses").innerHTML = guessRemain;
        document.getElementById("userguess").innerHTML = ("<p><strong>Letters Guessed: </strong></p>" + userGuessSoFar);
        resetgame();
    };
    
    if (guessRemain < 1) {
        guessRemain = 9;
        userGuessSoFar = [];
        losses++;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guesses").innerHTML = guessRemain;
        resetgame();
    };
};

function resetgame() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("Computer Guess: " + computerGuess);
};