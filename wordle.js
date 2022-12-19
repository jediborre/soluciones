/*
Wordle is a word guessing game where the player is given 6 tries to guess a hidden English word consisting of 5 characters in the range a-z. After each guess, the game provides hints to the player by highlighting letters of the guessed word with one of three different colors.

Every letter that is in the correct position in the hidden word is colored green ("G").
Every letter that is in the guess as well as in the hidden word but isn't in the correct location is colored yellow ("Y").
Any remaining letters in the guessed word aren't present in the hidden word are colored black ("B").
For example, if the user guesses "alpha" when the hidden word is "ahead", the program will display "GBBYY", indicating that the letter "a" is in the correct location, the letters "l" and "p" aren't present in the result, and "h" and "a" are present in the result, but in different locations than indices 4 and 5.

When the word and/or guess have duplicate letters, the colorizing algorithm should only offer a hint one time for each letter.

For example, if the user guessed "elate" and the hidden word was "bible", the highlights would be "BYBBG", indicating that the first letter "e" in the guess isn't in the result because the last letter "e" in the guess is in the correct location of the result.

Similarly, when the guess is "mamma" for the hidden word "maxim", the game should show "GGYBB" rather than "GGYYY".

Please see the provided test cases for additional examples.

Rubric
Your solution will be evaluated primarily on successfully passing the submission test suite.

Beyond that, your code will be evaluated for clean and maintainable implementation.

Resources
You may wish to play Wordle online on many sites such as https://hello-wordle.netlify.app/ to help you get a sense of the algorithm.

*/

const colorizeWordle = (guess, word) => {
    let result = "";
    let wordArray = word.split("");
    let guessArray = guess.split("");
    let wordArrayCopy = wordArray.slice();
    let guessArrayCopy = guessArray.slice();
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === guessArray[i]) {
            result += "G";
            wordArrayCopy[i] = "";
            guessArrayCopy[i] = "";
        }
    }
    for (let i = 0; i < wordArrayCopy.length; i++) {
        if (wordArrayCopy[i] !== "") {
            for (let j = 0; j < guessArrayCopy.length; j++) {
                if (wordArrayCopy[i] === guessArrayCopy[j]) {
                    result += "Y";
                    wordArrayCopy[i] = "";
                    guessArrayCopy[j] = "";
                }
            }
        }
    }
    for (let i = 0; i < guessArrayCopy.length; i++) {
        if (guessArrayCopy[i] !== "") {
            result += "B";
        }
    }
    return result;
};