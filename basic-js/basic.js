// callback function
function add(a, func) {
  func(a);
  console.log(func(a));
}

function sub(b) {
  return b + 10;
}

// add(1, sub);

// console.log("running ...");
// setTimeout(() => {
//   console.log("will run ...");
// }, 2000);

// console.log("finished ...");

// js object
let obj = {
  name: "John",
  age: 25,
  isMarried: false,
  sayHello: function () {
    console.log("Hello");
  },
};

let newObj = {
  ...obj,
  varsity: "cuet",
};
// console.log(newObj);

// console.log(obj);

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Create Source Object
const person2 = { firstName: "Anne", lastName: "Smith" };

Object.assign(person1, person2);

// console.log(person1);

let ans = Object.entries(person1);
// console.log(ans);

// Create an Array
const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];

// Callback function to Group Elements

// Group by Quantity
const result = Object.groupBy(fruits, (fruit) => {
  return fruit.quantity > 200 ? "big" : "small";
});
// console.log(result);

// promise
let promise = new Promise((resolve, reject) => {
  let a = 2;
  if (a === 1) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

promise.then((value) => {
  console.log("then", value);
});

promise.catch((value) => {
  console.log("catch", value);
});
