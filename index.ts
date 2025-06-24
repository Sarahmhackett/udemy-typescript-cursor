interface Chicken {
  name: string;
  age: number;
  eggsPerWeek: number;
}

const norma: Chicken = {
  name: "Norma",
  age: 2,
  eggsPerWeek: 4,
};

const juniper: Chicken = {
  name: "Juniper",
  age: 1,
  eggsPerWeek: 0,
};

const luna: Chicken = {
  name: "Luna",
  age: 2,
  eggsPerWeek: 5,
};

const chickens: Chicken[] = [norma, juniper, luna];

const names = chickens.map((chicken) => chicken.name);
