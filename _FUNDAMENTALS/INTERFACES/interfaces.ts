// Interfaces are a way to define the shape of an object and only objects

interface Person {
  readonly name: string;
  age: number;
  eyes?: string;
}

const me: Person = {
  name: "Sarah",
  age: 37,
};

// METHODS

interface AnotherPerson {
  readonly name: string;
  age: number;
  eyes?: string;
  sayHello: () => string;
  sayGoodbye(): string;
}

const them: AnotherPerson = {
  name: "Sarah",
  age: 37,
  sayHello: () => "Hello",
  sayGoodbye: () => "Goodbye",
};

// Passing Params

interface Items {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Items = {
  name: "Nike",
  price: 100,
  applyDiscount(discount: number) {
    const newPrice = this.price * (1 - discount);
    this.price = newPrice;
    return newPrice;
  },
};

// Extending Interfaces

interface Animal {
  name: string;
  age: number;
}

// interhit types from Animat
interface Rat extends Animal {
  food: "cheese" | "bread" | "apples";
}

const ratty: Rat = {
  name: "Patty the Ratty",
  age: 0.5,
  food: "cheese",
};

interface Mutant extends Rat, Animal {
  power: string;
}

// Can extend multiple interfaces

const mutant: Mutant = {
  name: "Patty the Mutant",
  age: 0.5,
  food: "cheese",
  power: "toxic",
};
