const prompt = require("prompt-sync")();

const sentence = prompt("Sentence: ");
const letter = prompt("Letter to count: ");
let     i = 1;
let     output = 0;

while (sentence[i] != null) {
    if (sentence[i] == letter)
        output++;
    i++;
}
console.log(letter+" is present "+output+" times in your sentence.");