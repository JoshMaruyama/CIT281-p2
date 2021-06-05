/*
    CIT 281 Project 2
    Name: Josh Maruyama
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

// Returns the random length string
const getRandomString = function(minLength, maxLength) {
    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
        result += getRandomLetter();
    }
    return result;
}

// this function returns a single, random, lowercase letter
const getRandomLetter = function(){
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Returns a string in ascending order
const getSortedString = function(string){return string.split("").sort().join("");}

console.log(getSortedString(getRandomString(10, 20)));