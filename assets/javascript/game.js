//create array for the computer
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//establish variables and tally counters
var lettersGuessed = [];
var numWins = 0;
var numLosses = 0;
var numGuesses = 9;
var guessesTaken;
var letterToGuess;

//code to start the game 
var letterIndex = Math.floor(Math.random() * alphabet.length);



//capture key clicks
document.onkeyup = function(event) {
	//determine which key pressed and change it to lower case
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// Create code to randomly choose one of the three options (Computer) 
	var computerGuess = options[Math.floor(Math.random()*options.length)];

	if ((userGuess == 'a') || (userGuess == 'b') || (userGuess == 'c')){

		document.querySelector('#game').innerHTML = 'you chose: ' + userGuess + '. The computer chose: ' + computerGuess;

	}
}






var userGuess = prompt("Choose a letter!");
var userGuessLower = userGuess.toLowerCase();
var letterCount = 3;
if(letterGuess.indexOf(userGuessLower) == -1) {
	else{

	}
}
var isLetter = true;
