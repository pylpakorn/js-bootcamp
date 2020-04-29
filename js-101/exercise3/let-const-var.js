var i=0;
for(var i=1; i<4; i++){
    console.log("var inside for-loop: "+i)
}
// i=0;
console.log("var outside for-loop: "+i);

let j=0;
for(let j=0; j<3; j++){
    console.log("let in for-loop: "+j)
}
// i=0;
console.log("let out for-loop: "+j);

// const k;    // SyntaxError: Missing initializer in const declaration
const k=0;
for(const k=0;k<3;k++){     // TypeError: Assignment to constant variable.
    console.log("const in for-loop: "+k)
} // expected output: error

console.log("const out for-loop: "+k);

function printFood(){
    let food2 = "Suki";
    if(true){
        var food1 = "Pizza";
        let food2 = "Donut";
        const food3 = "Pie";
    }
    console.log(food1, food2, food3);
}
printFood();

function checkScope() {
    let i = 'function scope';
    if (true) {
      i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
}
checkScope();

