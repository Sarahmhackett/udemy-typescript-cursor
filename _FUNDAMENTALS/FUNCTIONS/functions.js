"use strict";
// FUNCTIONS
function greet(person) {
    return `Hello ${person}`;
}
greet("John");
function square(num) {
    return num * num;
}
square(2);
// Multiple parameters
const doSomething = (person, age, isFunny) => {
    return "Hi ${person}";
};
doSomething("John", 20, true);
// doSomething(50, 20, true);
// Default parameters
function greetingDefault(person = "Sarah") {
    return `Hello ${person}`;
}
greet("John");
// Return types - obvious what function returns
function addNums(num) {
    return num + 1;
}
// Return multiple types
function random(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    else {
        return num;
    }
}
// Return type inference
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
    return color.toUpperCase();
});
// Voice types - void means no return
function printTwice(msg) {
    //   console.log(msg);
    //   console.log(msg);
}
printTwice("Hello");
// Never type - function that never returns - this should never have a chance to return anything
// VOID VS NEVER - void is for functions that don't return anything, never is for functions that throw an error
// function makeError(msg: string): never {
//   throw new Error(msg);
// }
// makeError("Error");
// EXERCISES:
//  1: wrte a function twoFer that accepts a person's name as an argument and returns a string "One for {name}, one for me". If there's no name default to 'you'
const twoFer = (person = "you") => {
    return `One for ${person}, one for me`;
};
twoFer("John");
// console.log(twoFer("John"));
// console.log(twoFer());
// 2: write a isLeapYear function that accepts a year and returns true or false if it is a leap year
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
// console.log(isLeapYear(2020));
// console.log(isLeapYear(2021));
