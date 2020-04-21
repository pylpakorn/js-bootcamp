// define array
var fruits = ["Orange", "Grape", "Apple", "Avocado", "Watermelon"];

// length of arrray
var length = fruits.length;
console.log(length);

// access array
console.log(fruits[0]);
fruits[0] = "Mango";
console.log(fruits[0]);
console.log(fruits[length-1]);

// add new element to end of array push()
fruits.push("Guava");
console.log(fruits);

// remove last element pop()
fruits.pop();
console.log(fruits);

// remove first element shift()
fruits.shift()
console.log(fruits);

//add new element to first of array unshift() 
fruits.unshift(["Papaya", "Banana"]);
console.log(fruits);

// find index of element in array
var index = fruits.indexOf("Grape");
console.log(index);

// remove element by index
// fruits.splice(0,1);
fruits.splice(index,1);
console.log(fruits);


console.log(fruits.sort());

var filter = fruits.filter(function(fruit){
    return fruit.length > 5;
})

console.log(filter);



