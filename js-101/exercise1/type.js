// String
let str = "String";
let str1 = 'String ';
console.log(str);
console.log(str1.length);
console.log(str.concat(" "+str1));

// Number
var num = 10;
var dec = 1.1;
// Math function -> floor, ceil, max, min, round, random, pow, ...

// boolean -> true,false
var f = (1>2), t=(1<2);
console.log(f);
console.log(t);
console.log(Boolean(str));
console.log(0);

// object
var obj = {
    name: "Object",  // name - value pairs
    color: "Red"
};

// function
function firstFunction(){   // no parameter
    console.log("First function");
}
firstFunction();

function secondFunction(param1, param2){    // with 2 arguments
    console.log(param1+", "+param2);
}
secondFunction(10,20);

// Symbol
var id = Symbol("id");
console.log(id);

var id1 = Symbol("id");
console.log(id === id1);    //Symbol is unique

var objSym = {
    [id]: 1,
    name: "Name"
};


