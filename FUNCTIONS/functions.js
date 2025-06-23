// FUNCTIONS
function greet(person) {
    return "Hello ".concat(person);
}
greet("John");
function square(num) {
    return num * num;
}
square(2);
// Multiple parameters
var doSomething = function (person, age, isFunny) {
    return "Hi ${person}";
};
doSomething("John", 20, true);
// doSomething(50, 20, true);
