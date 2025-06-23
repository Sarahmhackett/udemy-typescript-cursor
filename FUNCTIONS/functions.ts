// FUNCTIONS

function greet(person: string) {
  return `Hello ${person}`;
}
greet("John");

function square(num: number) {
  return num * num;
}
square(2);

// Multiple parameters
const doSomething = (person: string, age: number, isFunny: boolean) => {
  return "Hi ${person}";
};

doSomething("John", 20, true);
// doSomething(50, 20, true);

// Default parameters
function greetingDefault(person: string = "Sarah") {
  return `Hello ${person}`;
}
greet("John");

// Return types - obvious what function returns
function addNums(num: number): number {
  return num + 1;
}

// Return multiple types
function random(num: number): string | number {
  if (Math.random() < 0.5) {
    return num.toString();
  } else {
    return num;
  }
}
