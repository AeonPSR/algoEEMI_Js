const prompt = require("prompt-sync")();

let unit = prompt("Celsius of Farenheit: ");
let value = prompt("Value: ");

//add security for value

if (unit == "C" || unit == "c" || unit == "celsius" || unit == "Celsius")
    console.log(value+"C is equal to "+((value*(9/5))+32)+"F.");
else if (unit == "F" || unit == "f" || unit == "farenheit" || unit == "Farenheit")
    console.log(value+"F is equal to "+((value-32)*(5/9))+"C.");
else
    console.log("Unknown or wrong unit.");