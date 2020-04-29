// Rest Parameter
function restFunction(a, b, ...rest) {
    console.log("a", a);
    console.log("b", b);
    console.log("rest", rest);
    console.log("rest length",rest.length);
}
restFunction("one", "two", "three", "four", "five");

// Spread in array
const bw = ['black', 'white']; 
const colors = ['yellow', ...bw, 'red', 'green']; 
console.log(colors);

// Copy an array
let arr = [1, 2, 3];
let arr2 = [...arr]; // like arr.slice()
arr2.unshift(4);
console.log(arr2);
console.log(arr);

// concat array
arr = [...arr,...arr2];
console.log(arr);

// unshift
arr = [...arr2, ...arr]

// Spread object
const obj1 = { name: 'name1', age: 42 };
const obj2 = { name: 'name2', gender: "female" };

const clonedObj = { ...obj1 };
console.log(clonedObj);

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
