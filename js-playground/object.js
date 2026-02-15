const human = {
  name: "johan",
  age: 23,
};

human["name"] = "test";
human[5] = "how??";

console.log(Object.keys(human)[0]);
console.log(human);

console.log(human["5"]);

const test = new Object({});

console.log(test.constructor());
console.log(test.hasOwnProperty());
console.log(test.isPrototypeOf());
console.log(test.toLocaleString());
console.log(test.toString());
console.log(test.valueOf());
console.log(test.Object);
