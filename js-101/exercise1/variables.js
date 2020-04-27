// variable in js can handle many types

// declared variable and give initial value
var name = "name"; // String
var one = 1; // Number
console.log(one);

var obj = {name: "name", age: 23};
var getName = function(){
    // statement
};

// rules of declared name variable
// var 1first= "first";	// false -> must start with a letter, underscore (_), or dollar sign ($).
// var function = "function";  // false -> Reserved words cannot be used as names.
// var #twitter = "twitter";   // false -> can contain only letters, digits, underscore (_), or dollar sign ($). 
// var camelCase = "camel";    // case sensitive 
// var Camelcase = "camel";    // camelCase and Camelcase are different.

// declared variable, not give initial value
var two;
console.log(two);   // initial value of var is 'undefined'
two = 2; // give value
console.log(two);

// update value
one = "one"; 
console.log(one);

