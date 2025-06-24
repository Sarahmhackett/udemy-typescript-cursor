"use strict";
// Interfaces are a way to define the shape of an object and only objects
const me = {
    name: "Sarah",
    age: 37,
};
const them = {
    name: "Sarah",
    age: 37,
    sayHello: () => "Hello",
    sayGoodbye: () => "Goodbye",
};
const shoes = {
    name: "Nike",
    price: 100,
    applyDiscount(discount) {
        const newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return newPrice;
    },
};
const ratty = {
    name: "Patty the Ratty",
    age: 0.5,
    food: "cheese",
};
// Can extend multiple interfaces
const mutant = {
    name: "Patty the Mutant",
    age: 0.5,
    food: "cheese",
    power: "toxic",
};
