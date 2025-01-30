// 1. New Global Functions in ES6
console.log(Number.isNaN(50 / "hello"));   // true
console.log(Number.isNaN(123)); // false
console.log(Number.isFinite(500)); // true
console.log(Number.isFinite(-Infinity)); // false
console.log(globalThis); // Browser میں `window`, Node.js میں `global`

// 2. Array Destructuring
const cars = ["Tesla", "BMW", "Toyota"];
const [car1, car2, car3] = cars;
console.log(car1, car2, car3); // Tesla BMW Toyota

// Skipping elements
const prices = [1000, 2000, 3000, 4000];
const [price1, , price3] = prices;
console.log(price1, price3); // 1000 3000

// Default values
const drinks = ["Pepsi"];
const [drink1, drink2 = "Coca-Cola"] = drinks;
console.log(drink1, drink2); // Pepsi Coca-Cola

// 3. Object Destructuring
const employee = { empName: "Ayesha", empAge: 25 };
const { empName, empAge } = employee;
console.log(empName, empAge); // Ayesha 25

// Renaming variables
const developer = { devFullName: "Ayesha Khan", devRole: "Backend Developer" };
const { devFullName: devName, devRole } = developer;
console.log(devName, devRole); // Ayesha Khan Backend Developer

// Default values
const teacher = { tName: "Shoaib" };
const { tName, subject = "Mathematics" } = teacher;
console.log(tName, subject); // Shoaib Mathematics

// Nested Object Destructuring
const customer = {
  cName: "Hassan",
  cAddress: {
    city: "Lahore",
    country: "Pakistan"
  }
};
const { cName, cAddress: { city: custCity, country: custCountry } } = customer;
console.log(cName, custCity, custCountry); // Hassan Lahore Pakistan

// 4. Spread Operator
const arrA = [5, 10, 15];
const arrB = [20, 25, 30];
const mergedArray = [...arrA, ...arrB];
console.log(mergedArray); // [5, 10, 15, 20, 25, 30]

const objA = { x: 100, y: 200 };
const objB = { z: 300, w: 400 };
const newObj = { ...objA, ...objB };
console.log(newObj); // { x: 100, y: 200, z: 300, w: 400 }

// Copying an array
const originalNums = [7, 14, 21];
const copiedNums = [...originalNums];
console.log(copiedNums); // [7, 14, 21]

// Function with Spread Operator
const multiply = (a, b, c) => a * b * c;
const values = [2, 3, 4];
console.log(multiply(...values)); // 24
