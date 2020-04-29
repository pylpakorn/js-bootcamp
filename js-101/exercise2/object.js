var food = {
    name: "Pizza",
    calories: 350,
    getCalories: function(){
        return this.name + " has " + this.calories + " calories."
    }
}

// ES6
// const food = {
//     name: "Pizza",
//     calories: 350,
//     getCalories(){  // declaring function in ES6
//         return this.name + " has " + this.calories + " calories."
//     }
// }

console.log(food.name);
console.log(food["calories"]);
console.log(food.getCalories());


// Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
    return {
      name,
      age,
      gender
    };
};
console.log(createPerson("Bew",23,"female"));

