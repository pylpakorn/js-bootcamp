// var i=0;
// for(var i=1; i<4; i++){
//     console.log("var inside for-loop: "+i)
// }
// // i=0;
// console.log("var outside for-loop: "+i);

// let i=0;
// for(let i=0; i<3; i++){
//     console.log("let in for-loop: "+i)
// }
// i = 5;
// console.log("let out for-loop: "+i);

// const i=0;
// // i=1;
// for(const i=0;i<3;i++){
//     console.log("const in for-loop: "+i)
// } // expected output: error

// console.log("const out for-loop: "+i);
// console.log(greeter)
// var greeter = "hey";
// greeter = "Hi"
// var times = 3;

// if (times > 2) {
//   var greeter = "say Hello"; 
// }
// console.log(greeter)

// function printFood(){
//     if(true){
//         var food1 = "Pizza";
//         let food2 = "Donut";
//         const food3 = "Pie";
//     }
//     console.log(food1, food2, food3);
// }

// printFood();

const person = {
    name: "name"
};

const { name = "Name1" } = person;
console.log(name);