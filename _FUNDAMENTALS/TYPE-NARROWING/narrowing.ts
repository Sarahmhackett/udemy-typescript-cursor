// GUARDING
// When the outcomes differ based on the input we should type narrow.
// using typeof guards - typeof in a conditional.

function triple(value: number | string) {
  if (typeof value === "number") {
    return value * 3;
  }
  return value + value + value;
}

const value = triple(10);

// Truthy check
// if word exists, iterate.
const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("No word");
  }
};

// Equality Narrowing
// === or !==
// triple equals is more strict than double equals. It checks the type and the value.

function someDemo(x: number | string | boolean) {
  if (x === 10) {
    console.log("x is 10");
  } else if (x === "Hello") {
    console.log("x is a string");
  } else if (typeof x === "boolean") {
    console.log("x is a boolean");
  }
}

// IN Operator - checking for the presence of a property in an object.

interface CinemaListing {
  name: string;
  duration: number;
}

interface TVShow {
  name: string;
  numEpisodes: number;
  episodeDuration: number;
}

// Here typescript figures out that duration is only in CinemaListing
const getRuntime = (media: CinemaListing | TVShow) => {
  if ("duration" in media) {
    return media.duration;
  }
};

// INSTANCE OF - checking if an object is an instance of a class.

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    return date.toISOString();
  }
  return new Date(date).toISOString();
}

// Discriminated Unions - when we have a union type and we want to narrow down to a specific type.
// you need to know the ins and outs of the union types
interface Cow {
  kind: "cow";
  age: number;
  sound: string;
}

interface Pig {
  kind: "pig";
  weight: number;
  sound: string;
}

interface Sheep {
  kind: "sheep";
  color: string;
  sound: string;
}

type FarmAnimal = Cow | Pig | Sheep;

function getFarmSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "cow":
      return animal.sound + "moo";
    case "pig":
      return animal.sound + "oink";
    case "sheep":
      return animal.sound + "baa";
    default:
      const shouldNeverGetHere: never = animal;
      return shouldNeverGetHere;
  }
}

const MsMoo: Cow = {
  kind: "cow",
  age: 10,
  sound: "moo",
};

getFarmSound(MsMoo);
