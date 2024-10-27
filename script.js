// let character = txt.charAt("12");
// console.log(character);

// concat
const greet = "Hello";
const person = " John Wick";
const dog = " John Wick's Dog";
// const greetings = greet.concat(person, dog);
// console.log(greetings);

// includes
// const isAvailable = txt.includes("M");
// console.log(isAvailable);

// indexOf
const txt = "Hello, This is Javascript Methods Masterclass";

// const findIndexOf = txt.indexOf("s");
// console.log(findIndexOf);

// lastIndexOf
const findLastIndex = txt.lastIndexOf("J");
// console.log(findLastIndex);

// Slice
// let text = "Hello world!";
// let result = text.slice(-7, -1);
// console.log(result);

// Split

// let text = "How are you doing today?";
// const splittedString = text.split("", 3);
// console.log(splittedString);

// toLowerCase() = convert a string into lowercase
// toUpperCase() = convert a string into uppercase

// Replace

// let text = "Record The Arrays Methods MasterClass Video as Well";
// let result = text.replace("Arrays", "Objects");
// console.log(result);

// substring
// let statement = "I Love Playig Guitar";
// let result = statement.substring(1, 6);
// console.log(result);

// StartsWith
// let statement = "You Love Playig Guitar";
// let result = statement.startsWith("You");
// let result2 = statement.endsWith("John Wick");
// console.log(result);
// console.log(result2);
// Endswith

// trim
const text = "     This is a statement    ";
// console.log(text.trim());

// @codeblockdev
// Javascript ARRAY methods
let simpleArray = [
    42,
    "Hello, World!",
    true,
    null,
    { name: "John Wick", job: "Boogeyman Slayer" },
    [1, 2, 3],
    false,
    "magazinerichkids.com",
    99.9,
    { id: 7, status: "active" },
];
// Push => In Last
simpleArray.push("John Wick");
simpleArray.push(23, { id: 34, description: "Boogeyman slayer" });
simpleArray.push("I was inserted from the last");

// Pop = Deletes form last
// simpleArray.pop();
// simpleArray.pop();
// simpleArray.pop();
// simpleArray.pop();

// simpleArray.shift();

// simpleArray.unshift("Strawberry");

// console.log(simpleArray);

//           ->      FRUITS     <-           ->      VEGETABLES     <-
// const fruitsAndVeggies = [
//     "Cherry",
//     "Guava",
//     "Apple",
//     "Potato",
//     "Onion",
//     "Cababge",
// ];
// const vegetables = fruitsAndVeggies.slice(3);
// const fruits = fruitsAndVeggies.slice(0, 3);
// const allDataUptoThisIndex = fruitsAndVeggies.slice(2);

// console.log(allDataUptoThisIndex);
// console.log(vegetables);
// console.log(fruits);

// Splice

//             0  1  2  3  4  5
let numbers = [1, 2, 3, 4, 5, 6];

// splice() => lets you modify an array by removing, adding,
// or replacing elements at any position.

// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// Removing

// console.log(numbers);
// const deletedNumbers = numbers.splice(2, 4);
// console.log(numbers);
// console.log(deletedNumbers);

// Adding
// const added = numbers.splice(2, 0, "10", "20");
// console.log(added);
// console.log(numbers);

// Replace
// const updateNumbersArray = numbers.splice(1, 2, "X", "Y");
// console.log(numbers);

// concat

// The array.concat() method in JavaScript is used to merge two or
// more arrays into a new array.
// It does not change the existing arrays but returns a new one.
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = ["Apple", "Keyboard"];
let result = arr1.concat(arr2);
let newArr = result.concat(arr3, "John WIck", 12, 13);
// console.log(result, newArr);

//

// Join => By any type of Seperator
const countries = ["India", "Russia", "Japan"];

const joinedCountries = countries.join(" - ");
console.log();

// console.log(joinedCountries);

// Reverse

const reverseArray = countries.reverse();
// console.log(reverseArray);

// sort
const fruits = ["Banana", "Orange", "Apple", "Mango"]; // Alphabetically

// const sortedArray = fruits.sort();

// console.log(sortedArray);

// const numbersArray = [12, 13, 9, 8, 7, 4, 20];

// Having a compare function for sorting number, by default shorting is
//  done lexicographically

// const sortedNumbers = numbersArray.sort((a, b) => {
//     return b - a;
// });
// console.log(sortedNumbers);

// 4, 7, 8, 9, 12, 13, 14

// Map
// array.map(callback(currentValue, index, array), thisArg);

// callback: A function that is executed on each element in the array.
// It takes three arguments:
// 1.) currentValue: The current element being processed in the array.
// 2.) index (optional): The index of the current element being processed.
// 3.) array (optional): The array on which map() was called.
// 4.) thisArg (optional): A value to use as this when
// executing the callback function.

const results = [20, 30, 40, 45];

const doubledResult = results.map(function (double) {
    return double * 2;
});
// console.log(results);
// console.log(doubledResult);

// console.log(results[0] * 2);
// console.log(results[1] * 2);
// console.log(results[2] * 2);
// console.log(results[3] * 2);

// 0  1  2

const numbersToDeal = [10, 20, 30, 50, 60];
const resultA = numbersToDeal.map((num, index) => num * index);

// console.log(resultA); // Output: [0, 20, 60]

const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Alex", age: 40 },
];

const names = users.map((user) => user.name);
const age = users.map((user) => user.age);

// console.log(names, age);

// filter

const itemPrice = [5, 10, 15, 20, 25];
const filtered = itemPrice.filter(function (price) {
    return price > 10;
});
// console.log(filtered);

// =======
// Any number that can be exactly divided by 2 is called as an even number.
const filteredEven = itemPrice.filter(function (price) {
    return price % 2 === 0;
});
// console.log(filteredEven);

// =======

const words = ["apple", "banana", "kiwi", "grapefruit"];
const longWords = words.filter(function (words) {
    return words.length > 5;
});
// console.log(longWords);

// Reduce
let arrayData = [1, 2, 3, 4];
// accumulator
let sumOfAllElements = arrayData.reduce(function (acc, curr) {
    return acc * curr;
    // 1  +  2 = 3
    // 3 + 3  = 6
    // 6 + 4 = 10
});
// console.log(sumOfAllElements);

// accumulator: The result from the previous iteration
// (or the initial value on the first iteration).
// currentValue: The current element being processed.
// currentIndex: (Optional) The index of the current element.
// array: (Optional) The array that the reduce method is called on.

// Finding maximum value using the reduce method
let maxValue = arrayData.reduce((acc, curr) => {
    if (curr > acc) {
        // console.log(curr, acc);
        return curr;
    }
    return acc;
});
// console.log(`The maximum value is ${maxValue}`);

let minValue = arrayData.reduce((acc, curr) => {
    if (curr < acc) {
        // console.log(curr, acc);
        return curr;
    }
    return acc;
});
// console.log(`The minimum value is ${minValue}`);

// forEach()
let numbersArray = [1, 2, 3, 4];
let individualElements = numbersArray.forEach((allElements) => {
    // console.log(allElements);
});

let data = [1, 2, 3];
data.forEach((curr, index, array) => {
    array[index] = curr * 2;
    array[0];
});
// console.log(data);

// Printing the data with it's index

let fruitsData = ["apple", "Oranges", "Strawberry"];
fruitsData.forEach((fruits, index) => {
    // console.log(`${fruits}: ${index}`);
});

// find()
let dataSet = [5, 8, 130, 44, 12, 14, 145];
let found = dataSet.find((element) => element > 10);
// console.log(found);

let usersData = [
    { name: "John", age: 30 },
    { name: "Jack", age: 22 },
    { name: "Jane", age: 22 },
    { name: "Tom", age: 40 },
];
let user = usersData.find((person) => person.age === 22);
// console.log(user);

// findIndex()
let findIndexOF = [5, 8, 130, 44];
let index = findIndexOF.findIndex((element) => element > 10);
// console.log(index);

// some()

let dataSet1 = [1, 2, 3, 4, 5];
let hasEvenNumber = dataSet1.some((num) => num % 2 === 0);
// console.log(hasEvenNumber);

// every()

let dataSet2 = [2, 4, 6, 8, 10];
let hasEvenNumberEvery = dataSet2.every((num) => num % 2 === 0);
// console.log(hasEvenNumberEvery);

//

//
