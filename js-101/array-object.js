var foods = [
    {   name: "Pizza",
        calories: 350 
    },
    {
        name: "Salad",
        calories: 180
    },
    {
        name: "Ice-cream",
        calories: 200
    },
    {
        name: "Hamburger",
        calories: 300
    }
]

var getTotalCal = function(){
    var total=0;
    foods.forEach(function(food){
        // console.log(food);
        total = total + food.calories;
    })
    return total;
}
console.log(getTotalCal());

// sort
var sortByCal = foods.sort(function(a,b){
    if(a.calories < b.calories){
        return -1;
    }else if(a.calories > b.calories){
        return 1;
    }else return 0;
})
console.log(sortByCal);

// filter
var filterCalories = foods.filter(function(food){
    return food.calories <= 200;
})

console.log(filterCalories);

// arrow func
