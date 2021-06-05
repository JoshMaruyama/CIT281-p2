/*
    CIT 281 Project 2
    Name: Josh Maruyama
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

// Returns the random length string
function getRandomString(minLength, maxLength) {
    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
        result += getRandomLetter();
    }
    return result;
}

console.log(getSortedString(getRandomString(10, 20)));

// this function returns a single, random, lowercase letter
function getRandomLetter(){
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Returns a string in ascending order
function getSortedString(string){return string.split("").sort().join("");}