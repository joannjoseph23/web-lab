let word = ['F', 'O', 'X']; 
let guessedLetters = ['_', '_', '_']; 

function guessLetter(letter) {
    let foundNewLetter = false;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter && guessedLetters[i] === '_') {
            guessedLetters[i] = letter;
            foundNewLetter = true;
        }
    }
    console.log(guessedLetters.join(''));
    if (foundNewLetter) {
        console.log(`Congratulations, you found a new letter: ${letter}!`);
    }
    if (!guessedLetters.includes('_')) {
        console.log('You guessed the word! Congratulations, you won!');
    }
}

guessLetter('F');
guessLetter('O');
guessLetter('X'); 
guessLetter('Z');
