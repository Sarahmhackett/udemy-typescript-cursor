"use strict";
// Arrays
const currentDogs = ["Homer", "Pablo", "Hugo"];
let currentCats = [];
currentCats.push("Mittens");
let ageList = [65, 12, 14, 16];
ageList[0] = 55;
// Array types alternative
let previousDogs = ["Homer", "Pablo", "Hugo"];
const ageDocs = [65, 12, 14, 16];
const myCoords = [];
myCoords.push({ x: 10, y: 20 });
// 2D Array of Strings
const board = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
];
// EXERCISES - Create an empty array of Numbers called Ages
const ages = [];
// Create an array variable called gameBoard that starts as an emty array. Typed to hold a 2 d arraoy of strings
const gameBoard = [
    ["string", "string"],
    ["string", "string"],
];
// write a function called getTotal that accepts an array of product types. It should return a sum of all of the prices
const getTotal = (products) => {
    let total = 0;
    for (let product of products) {
        total += product.price;
    }
    return total;
};
const products = [
    { name: "apple", price: 1.99 },
    { name: "banana", price: 0.99 },
    { name: "cherry", price: 2.99 },
];
// console.log(getTotal(products));
