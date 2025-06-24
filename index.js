"use strict";
const norma = {
    name: "Norma",
    age: 2,
    eggsPerWeek: 4,
};
const juniper = {
    name: "Juniper",
    age: 1,
    eggsPerWeek: 0,
};
const luna = {
    name: "Luna",
    age: 2,
    eggsPerWeek: 5,
};
const chickens = [norma, juniper, luna];
const names = chickens.map((chicken) => chicken.name);
