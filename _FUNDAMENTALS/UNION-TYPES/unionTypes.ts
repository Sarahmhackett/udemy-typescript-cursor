// Union Types - give a value a few different possible types

let age: number | string = 21;
age = "24";
age += 1;

// Not limited to two types
type MyPoint = {
  x: number;
  y: number;
};

type MyLoc = {
  lat: number;
  long: number;
};

// Allowed because it follows the MyPoint pattern
let myLocation: MyPoint | MyLoc = {
  x: 10,
  y: 20,
};

myLocation = {
  lat: 32.123123,
  long: 32.123123,
};

// Union Types and Functions

const printMyAge = (age: number | string): void => {
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

const calcTax = (price: number | string, tax: number) => {
  if (typeof price === "string") {
    price.replace("$", ""); // price is a string
  } else {
    price * tax; // price has to be a number
  }
};

// Union Types and Arrays
// Any is too broad
const myWrongThings: any[] = [1, true, "string"];

const myTypesArray: (number | string | boolean)[] = [1, "string", true];
const myLocations: (MyPoint | MyLoc)[] = [
  { x: 10, y: 20 },
  { lat: 32.123123, long: 32.123123 },
];

// Literal Types - it is not just any number, it is THE number.
// Instead of saying number, we can say 0
const zero: 0 = 0;
const word: "hello" = "hello";
const bool: true = true;

// Literal and Union Types are useful.
const giveAnswer = (answer: "yes" | "no") => {
  return answer;
};

giveAnswer("yes");
// giveAnswer("I'm not sure!");

let mood: "happy" | "sad" = "happy";
mood = "sad";

// Useful examples:
type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";
let today: DayOfWeek = "Monday";

// EXERCISES:

// Create a variable called highScore that can be a number or a boolean

let highScore: number | boolean = 0;
highScore = 20;

// create array called stuff. it can be an array of numbers or strings. It cannot be mixed together.

const stuff: number[] | string[] = [1, 2, 3];

// Create a literal type called SkillLevel - there are 4 allowed values: "Beginner", "Intermediate", "Advanced", "Expert"

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// Create a type called SkiSchoolStudent - name = string, age = number, sport = ski or snowboard and level must be a value from Skil level type

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

// Create a type called RBG and HSL Colour.

type RBGColour = {
  red: number;
  green: number;
  blue: number;
};

type HSLColour = {
  h: number;
  s: number;
  l: number;
};

const Colours: (RBGColour | HSLColour)[] = [
  { red: 255, green: 0, blue: 0 },
  { h: 255, s: 0, l: 0 },
];

const myGreeting = (name: string | string[]): string | string[] => {
  if (typeof name === "string") {
    return "Hello " + name;
  } else {
    return name.map((person) => `Hello ${person}`);
  }
};

console.log(myGreeting("John"));
// ➝ Hello John

console.log(myGreeting(["John", "Jane", "Jim"]));
// ➝ [ 'Hello John', 'Hello Jane', 'Hello Jim' ]
