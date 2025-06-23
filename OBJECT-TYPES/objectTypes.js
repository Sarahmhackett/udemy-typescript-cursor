var dogs = {
    name: "Homer",
    breed: "Golden",
    age: 1,
    favFood: "Purina",
};
function printDogs(dogs) {
    return "Name: ".concat(dogs.name, ", Breed: ").concat(dogs.breed, ", Age: ").concat(dogs.age);
}
// Object literals must contain only the properties defined in the type
// console.log(printDogs({ name: "Homer", breed: "Golden", age: 1 }));
// Object can contain more properties than the ones defined in the type
// console.log(printDogs(dogs));
// This is the pattern it should follow, then you make it follow the pattern
var coords = {
    x: 10,
    y: 10,
};
function randomCoord() {
    return { x: Math.random(), y: Math.random() };
}
var homerDog = {
    name: "Homer",
    breed: "Golden",
    age: 1,
    favFood: "Purina",
};
var pabloDog = {
    name: "Pablo",
    breed: "lab",
    age: 1,
    favFood: "Purina",
};
function printDog(dog) {
    return "Name: ".concat(dog.name, ", Breed: ").concat(dog.breed, ", Age: ").concat(dog.age, ", Favorite Food: ").concat(dog.favFood);
}
// Nested Object type annotations
var describeCat = function (cat) {
    return "Name: ".concat(cat.name, ", Age: ").concat(cat.age, ", Owner Names: ").concat(cat.ownerNames.mum, " and ").concat(cat.ownerNames.dad);
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
    return "Title: ".concat(song.title, ", Artist: ").concat(song.artist);
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numPlays: 10000,
    duration: 18,
};
var user = {
    id: 10,
    username: "Sarah",
};
var happyFace = {
    radius: 4,
    colour: "red",
};
var nemo = {
    numLives: 1,
    breed: "Blue Whale",
    food: "Coral",
};
// EXERCISES
// CREATE A  TYPE FOR MOVIE:
var dune = {
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
var cats = {
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
var getProfit = function (_a) {
    var _b = _a.boxOffice, grossWorldWide = _b.grossWorldWide, grossUS = _b.grossUS, budget = _b.budget;
    return budget - (grossWorldWide + grossUS);
};
console.log(getProfit(dune));
console.log(getProfit(cats));
