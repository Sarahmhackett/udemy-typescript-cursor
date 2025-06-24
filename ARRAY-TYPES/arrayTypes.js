// Arrays
var currentDogs = ["Homer", "Pablo", "Hugo"];
var currentCats = [];
currentCats.push("Mittens");
var ageList = [65, 12, 14, 16];
ageList[0] = 55;
// Array types alternative
var previousDogs = ["Homer", "Pablo", "Hugo"];
var ageDocs = [65, 12, 14, 16];
var myCoords = [];
myCoords.push({ x: 10, y: 20 });
// 2D Array of Strings
var board = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
];
// EXERCISES - Create an empty array of Numbers called Ages
var ages = [];
// Create an array variable called gameBoard that starts as an emty array. Typed to hold a 2 d arraoy of strings
var gameBoard = [
    ["string", "string"],
    ["string", "string"],
];
// write a function called getTotal that accepts an array of product types. It should return a sum of all of the prices
var getTotal = function (products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        total += product.price;
    }
    return total;
};
var products = [
    { name: "apple", price: 1.99 },
    { name: "banana", price: 0.99 },
    { name: "cherry", price: 2.99 },
];
// console.log(getTotal(products));
