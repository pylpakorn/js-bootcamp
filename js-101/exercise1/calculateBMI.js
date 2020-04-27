/* Give name, weigth(kg.), height(m.)
Calculate BMI 
BMI < 18.5 = "LESS THAN STANDARD" , 18.6 - 22.9 = "STANDARD", 23.0 - 24.9 = "MORE THAN STANDARD",
25.0 - 29.9 = "FAT", > 29.9 = "FATAL FAT"

-> Eg. janie, 45, 1.5 = "My name is janie. BMI is 20.000" */

var name = "Janie", weight = 45, height = 1.5;
var bmi = weight/ Math.pow(height,2); // weight/(height*height) or weigth/(height**2)
console.log("My name is "+ name +". BMI is "+ bmi.toFixed(3));

// condition statement
if(bmi < 18.5){
    console.log("less than standard");
}else if(bmi > 18.5 && bmi <= 22.9){
    console.log("normal");
}else if(bmi > 22.9 && bmi <= 24.9){
    console.log("more than standard");
}else if(bmi > 24.9 && bmi <= 29.9){
    console.log("fat");
}else console.log("fatal fat");


