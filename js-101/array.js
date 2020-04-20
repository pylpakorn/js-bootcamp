// define array
var fruits = ["Orange", "Grape", "Strawberry"];

// length of arrray
var length = fruits.length;
console.log(length);

// access array
console.log(fruits[0]);
fruits[0] = "Apple";
console.log(fruits[0]);
console.log(fruits[length-1]);

// add new element to end of array push()
fruits.push("Guava");
console.log(fruits);

// remove last element pop()
fruits.pop();
console.log(fruits);

//remove first element shift()
fruits.shift()
console.log(fruits);

// add new element to first of array unshift() 
fruits.unshift(["Papaya", "Banana"], 1000);
console.log(fruits);

