// array type with a fixed length and order of elements with a fixed set of types

// first element is a string
// second element is a number
// third element is a boolean

const myTuple: [string, number, boolean] = ["hello", 1, true];

//useful application
const aValidColour: [number, number, number] = [222, 224, 5426];

type HTTPREsponse = [number, string];

const goodRes: HTTPREsponse = [200, "OK"];
const badRes: HTTPREsponse = [404, "Not Found"];
