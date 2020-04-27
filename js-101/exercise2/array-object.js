var foods = [
    {   name: "Pizza",calories: 350 },
    {   name: "Salad", calories: 180},
    {   name: "Ice-cream", calories: 200},
    {   name: "Hamburger", calories: 300}
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
    if(a.name < b.name){
        return -1;
    }else if(a.name > b.name){
        return 1;
    }else return 0;
})
console.log(sortByCal);

// filter
var filterCalories = foods.filter(function(food){
    return food.name.length < 6;
})
console.log(filterCalories);

// arrow filter
var filterCal_Arrow = foods.filter((food) => food.name.length < 6);
console.log(filterCal_Arrow);

// function filter
// var filterCal = function(foods){
//     return foods.filter(function(food){
//         return food.calories <= 200;
//     })
// }
// console.log(filterCal(foods));

// // arrow func filter
// var filterCal = (foods) => {
//     return foods.filter((food)=>{
//         return food.calories <= 200;
//     })
// }
// console.log(filterCal(foods));

// arrow function
var getCal_Arrow = () => {
    var total=0;
    foods.forEach(function(food){
        total = total + food.calories;
    })
    return total;
}

console.log(getCal_Arrow());