// VARIABLES
// array of letters to choose from
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// array to hold guessed letters
var guessedLetters = [];

// variable to hold value of randomly assigned letter
var letterToGuess = null;

// variable to define total guesses
var totalGuesses = 9;
// countdown guesses left
var guessesLeft = 9;

// counters for wins and losses
var wins = 0;
var losses = 0;

// FUNCTIONS
// generate a random letter and assign it to variable letterToGuess
var updateLetterToGuess = function() {
	this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
	console.log(this.letterToGuess);
};
updateLetterToGuess();

// set variable guessesLeft equal to it's HTML counterpart
var updateGuessesLeft = function() {
	document.querySelector("#guesses-left").innerHTML = guessesLeft;
	console.log(guessesLeft);
};
updateGuessesLeft();

// display guesses player has tried
var updateGuessesSoFar = function() {
	document.querySelector("guesses-so-far").innerHTML = guessedLetters.join(", ");
	console.log(guessedLetters);
};
updateGuessesSoFar();

var reset = function() {

};

// load game when page opens

// onkeyup function to capture letters guessed and use it for game logic