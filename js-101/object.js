var food = {
    name: "Pizza",
    calories: 350,
    getCalories: function(){
        return this.name + " has " + this.calories + " calories."
    }
}

console.log(food.name);
console.log(food["calories"]);
console.log(food.getCalories());

