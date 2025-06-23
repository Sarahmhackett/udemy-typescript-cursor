// Arrays
const currentDogs: string[] = ["Homer", "Pablo", "Hugo"];

let currentCats: string[] = [];
currentCats.push("Mittens");

let ageList: number[] = [65, 12, 14, 16];
ageList[0] = 55;

// Array types alternative
let previousDogs: Array<string> = ["Homer", "Pablo", "Hugo"];
const ageDocs: Array<number> = [65, 12, 14, 16];

// Type Alias for Arrays
type Point = {
  x: number;
  y: number;
};

const myCoords: Point[] = [];
myCoords.push({ x: 10, y: 20 });

// 2D Array of Strings
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

// EXERCISES - Create an empty array of Numbers called Ages

const ages: number[] = [];

// Create an array variable called gameBoard that starts as an emty array. Typed to hold a 2 d arraoy of strings

const gameBoard: string[][] = [
  ["string", "string"],
  ["string", "string"],
];

// create a product type that contains a name and a price

type Product = {
  name: string;
  price: number;
};

// write a function called getTotal that accepts an array of product types. It should return a sum of all of the prices

const getTotal = (products: Product[]): number => {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  return total;
};

const products: Product[] = [
  { name: "apple", price: 1.99 },
  { name: "banana", price: 0.99 },
  { name: "cherry", price: 2.99 },
];

console.log(getTotal(products));
