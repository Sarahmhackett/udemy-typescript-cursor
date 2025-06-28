"use strict";
const dogs = {
    name: "Homer",
    breed: "Golden",
    age: 1,
    favFood: "Purina",
};
function printDogs(dogs) {
    return `Name: ${dogs.name}, Breed: ${dogs.breed}, Age: ${dogs.age}`;
}
// Object literals must contain only the properties defined in the type
// console.log(printDogs({ name: "Homer", breed: "Golden", age: 1 }));
// Object can contain more properties than the ones defined in the type
// console.log(printDogs(dogs));
// This is the pattern it should follow, then you make it follow the pattern
let coords = {
    x: 10,
    y: 10,
};
function randomCoord() {
    return { x: Math.random(), y: Math.random() };
}
const homerDog = {
    name: "Homer",
    breed: "Golden",
    age: 1,
    favFood: "Purina",
};
const pabloDog = {
    name: "Pablo",
    breed: "lab",
    age: 1,
    favFood: "Purina",
};
function printDog(dog) {
    return `Name: ${dog.name}, Breed: ${dog.breed}, Age: ${dog.age}, Favorite Food: ${dog.favFood}`;
}
// Nested Object type annotations
const describeCat = (cat) => {
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
function calcPay(song) {
    return song.numPlays * 0.033;
}
function printSong(song) {
    return `Title: ${song.title}, Artist: ${song.artist}`;
}
const mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numPlays: 10000,
    duration: 18,
};
const user = {
    id: 10,
    username: "Sarah",
};
const happyFace = {
    radius: 4,
    colour: "red",
};
const nemo = {
    numLives: 1,
    breed: "Blue Whale",
    food: "Coral",
};
// EXERCISES
// CREATE A  TYPE FOR MOVIE:
const dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 108.4,
        grossUS: 40.2,
        grossWorldWide: 68.2,
    },
};
const cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 100.4,
        grossUS: 50.2,
        grossWorldWide: 65.2,
    },
};
// write function that is get profit.
// const getProfit = (movie: Movie): number => {
//   const { budget, grossWorldWide, grossUS } = movie.boxOffice;
//   return budget - (grossWorldWide + grossUS);
// };
// console.log(getProfit(dune));
// console.log(getProfit(cats));
const getProfit = ({ boxOffice: { grossWorldWide, grossUS, budget }, }) => {
    return budget - (grossWorldWide + grossUS);
};
console.log(getProfit(dune));
console.log(getProfit(cats));
