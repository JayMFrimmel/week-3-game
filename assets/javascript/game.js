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
function initGame() {
var letterIndex = Math.floor(Math.random() * alphabet.length);
letterToGuess = alphabet[letterIndex];
guessesTaken = 0;
lettersGuessed = [];
document.getElementById("player-guesses").innerHTML = "";
document.getElementById("player-guesses-left").innerHTML = "9";
}

//capture key clicks
function eventKeyPressed(e) {
	var letterPressed = String.fromCharCode(e.keyCode);
	letterPressed = letterPressed.toLowerCase();

	guessIndex = alphabet.indexOf(letterPressed);
	if (guessIndex < 0) {
		console.log("That is not a letter.");
		return
	}
	handleGuessedLetter(letterPressed);
}

//test for letters guessed
function handleGuessedLetter(letter) {
	if (letter === letterToGuess) {
		handleWin();
	} else {
		handleMiss(letter);
	}
}
function handleWin() {
	numWins++;
	document.getElementById("wins").innerHTML = numWins;
	initGame();
}
function handleMiss(letter) {
	guessesTaken++;
	if (guessesTaken === numGuesses) {
		numLosses++;
		document.getElementById("losses").innerHTML = numLosses;
		initGame();
	} else {
		lettersGuessed.push(letter);
		document.getElementById("player-guesses").innerHTML = lettersGuessed.join(", ");
		document.getElementById("player-guesses-left").innerHTML = numGuesses - guessesTaken;
	}
}
window.addEventListener("keyup", eventKeyPressed, true);
initGame();
	
