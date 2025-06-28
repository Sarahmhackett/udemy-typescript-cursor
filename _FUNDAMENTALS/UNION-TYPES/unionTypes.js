"use strict";
// Union Types - give a value a few different possible types
let age = 21;
age = "24";
age += 1;
// Allowed because it follows the MyPoint pattern
let myLocation = {
    x: 10,
    y: 20,
};
myLocation = {
    lat: 32.123123,
    long: 32.123123,
};
// Union Types and Functions
const printMyAge = (age) => {
    console.log(`You are ${age} years old`);
};
printMyAge(21);
printMyAge("21");
// NAUGHTY:
// const calcTax = (price: number | string, tax: number) => {
//     return price * tax
//   };
// const calcTax = (price: number | string, tax: number) => {
//     price.replace("$", "")
//   };
// TYPE NARROWING..... using if statements to check the type of the value within functions
const calcTax = (price, tax) => {
    if (typeof price === "string") {
        price.replace("$", ""); // price is a string
    }
    else {
        price * tax; // price has to be a number
    }
};
// Union Types and Arrays
// Any is too broad
const myWrongThings = [1, true, "string"];
const myTypesArray = [1, "string", true];
const myLocations = [
    { x: 10, y: 20 },
    { lat: 32.123123, long: 32.123123 },
];
// Literal Types - it is not just any number, it is THE number.
// Instead of saying number, we can say 0
const zero = 0;
const word = "hello";
const bool = true;
// Literal and Union Types are useful.
const giveAnswer = (answer) => {
    return answer;
};
giveAnswer("yes");
// giveAnswer("I'm not sure!");
let mood = "happy";
mood = "sad";
let today = "Monday";
// EXERCISES:
// Create a variable called highScore that can be a number or a boolean
let highScore = 0;
highScore = 20;
// create array called stuff. it can be an array of numbers or strings. It cannot be mixed together.
const stuff = [1, 2, 3];
const Colours = [
    { red: 255, green: 0, blue: 0 },
    { h: 255, s: 0, l: 0 },
];
const myGreeting = (name) => {
    if (typeof name === "string") {
        return "Hello " + name;
    }
    else {
        return name.map((person) => `Hello ${person}`);
    }
};
console.log(myGreeting("John"));
// ➝ Hello John
console.log(myGreeting(["John", "Jane", "Jim"]));
// ➝ [ 'Hello John', 'Hello Jane', 'Hello Jim' ]
