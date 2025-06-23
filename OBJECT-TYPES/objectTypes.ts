const dogs: { name: string; breed: string; age: number; favFood: string } = {
  name: "Homer",
  breed: "Golden",
  age: 1,
  favFood: "Purina",
};

function printDogs(dogs: { name: string; breed: string; age: number }): string {
  return `Name: ${dogs.name}, Breed: ${dogs.breed}, Age: ${dogs.age}`;
}

// Object literals must contain only the properties defined in the type
// console.log(printDogs({ name: "Homer", breed: "Golden", age: 1 }));
// Object can contain more properties than the ones defined in the type
// console.log(printDogs(dogs));

// This is the pattern it should follow, then you make it follow the pattern
let coords: { x: number; y: number } = {
  x: 10,
  y: 10,
};

function randomCoord(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

// Creating Type Aliases

type Dog = {
  name: string;
  breed: string;
  age: number;
  favFood: string;
};

const homerDog: Dog = {
  name: "Homer",
  breed: "Golden",
  age: 1,
  favFood: "Purina",
};

const pabloDog: Dog = {
  name: "Pablo",
  breed: "lab",
  age: 1,
  favFood: "Purina",
};

function printDog(dog: Dog) {
  return `Name: ${dog.name}, Breed: ${dog.breed}, Age: ${dog.age}, Favorite Food: ${dog.favFood}`;
}

// Nested Object type annotations

const describeCat = (cat: {
  name: string;
  age: number;
  ownerNames: {
    mum: string;
    dad: string;
  };
}) => {
  return `Name: ${cat.name}, Age: ${cat.age}, Owner Names: ${cat.ownerNames.mum} and ${cat.ownerNames.dad}`;
};

describeCat({
  name: "Cat",
  age: 1,
  ownerNames: {
    mum: "John",
    dad: "Jane",
  },
});

function calcPay(song: Song): number {
  return song.numPlays * 0.033;
}

function printSong(song: Song): string {
  return `Title: ${song.title}, Artist: ${song.artist}`;
}

type Song = {
  title: string;
  artist: string;
  numPlays: number;
  duration: number;
};

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numPlays: 10000,
  duration: 18,
};

console.log(calcPay(mySong));
console.log(printSong(mySong));
