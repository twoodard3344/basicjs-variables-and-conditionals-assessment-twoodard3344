// Exercise Two - Calculating your future age.
//
// You want to know how old you will be in any given year.  Create a piece of code that will computer
// your age given your birth year and a year in the future.
//
// Step One:
// prompt for the year the user was born.  Then prompt them for a year in the future.
// Store both of these in descriptively named variables.
//
// Step Two:
// Calculate the two possible ages for that year based on their inputs.
//
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//
// Store the two possible ages in two different variables.
//
// Step Three:
// Create a variable called message which describes the result.
// "I will be either NN or NN in YYYY", substituting the values.
//
// Step Four:
// Print your message to the browser using document.write()
//
// Write your code here 👇

let userYear = prompt("Please enter the year your birth year: ");
let futureYear = prompt("Please enter a future year: ");
if (futureYear <= userYear)
{
   futureYear= prompt("Please enter a year after your birth year.");
}
else
{
futureYear = futureYear;
}


let futureAgeTwo = futureYear - userYear;
let futureAgeOne = futureAgeTwo--;


let message = ("I will be either " + futureAgeTwo + " or " + futureAgeOne + " in " + futureYear + ".");

document.write(message);
