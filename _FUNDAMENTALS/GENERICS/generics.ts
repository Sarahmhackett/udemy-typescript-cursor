function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

// NOT GOOD PRACTICE:
// could accept a string and return a number - but we'd want to avoid this and have a relationship between input and output
function exampleIdentity(item: any): any {
  return item;
}

// GENERIC:
// Whatever input type is, is the return type
function identity<T>(item: T): T {
  return item;
}

identity<number>(7);

interface Cat {
  name: string;
  breed: string;
}

identity<Cat>({
  name: "Whiskers",
  breed: "Siamese",
});

function getRandomElement<T>(list: T[]): T {
  const randIndex = Math.floor(Math.random() * list.length);
  return list[randIndex];
}

getRandomElement<number>([1, 2, 3, 4, 5]);
getRandomElement<string>(["a", "b", "c", "d", "e"]);

getRandomElement([1, 2, 3, 4, 5]); // inferring

// Accepting multiple types with different types
function merge<T, U>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

const merged = merge({ name: "Sarah" }, { age: 37 });

function mergedObjects<T extends object, U extends object>(
  object1: T,
  object2: U
) {
  return {
    ...object1,
    ...object2,
  };
}

const merged = mergedObjects({ name: "Sarah" }, { age: 37 });
