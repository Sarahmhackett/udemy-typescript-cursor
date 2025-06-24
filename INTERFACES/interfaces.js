// Interfaces are a way to define the shape of an object and only objects
var me = {
    name: "Sarah",
    age: 37,
};
var them = {
    name: "Sarah",
    age: 37,
    sayHello: function () { return "Hello"; },
    sayGoodbye: function () { return "Goodbye"; },
};
var shoes = {
    name: "Nike",
    price: 100,
    applyDiscount: function (discount) {
        var newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return newPrice;
    },
};
var ratty = {
    name: "Patty the Ratty",
    age: 0.5,
    food: "cheese",
};
// Can extend multiple interfaces
var mutant = {
    name: "Patty the Mutant",
    age: 0.5,
    food: "cheese",
    power: "toxic",
};
