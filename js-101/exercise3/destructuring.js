// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// console.log(b);

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);

// Array destructuring
const num = ['one', 'two', 'three'];

const [x, y, z] = num;
console.log(x); // "one"
console.log(y); // "two"
console.log(z); // "three"

// default value
let m, n;
[m=5, n=7] = [1];
console.log(m); // 1
console.log(n); // 7

// swap value
[num[0],num[1]] = [num[1],num[2]]
console.log(num);

//-----------------------------

// Object destructuring
const user = {
    id: 42,
    name: "name"
};
const {id, name} = user;
console.log("id: "+id+" name: "+name); 

// normal access object
// console.log(user.id);   
// console.log(user.name);

// Assigning to new variables names and providing default values
const {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({ max, min }) => (max + min) / 2.0; 
console.log(half(stats));
