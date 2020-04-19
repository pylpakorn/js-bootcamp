// var name="Pinyaluk";
// var gender = "Female";
// var weight=47, height=1.5;

var name = "Bew", gender = "female", weight = 43, height = 1.5;

var bmi = weight/ Math.pow(height,2);

console.log("BMI is "+ bmi.toFixed(3));

if(bmi < 18.5){
    console.log("less than standard");
}else if(bmi > 18.5 && bmi < 22.9){
    console.log("normal");
}else if(bmi > 22.9 && bmi < 24.9){
    console.log("more than standard");
}else if(bmi > 24.9 && bmi < 29.9){
    console.log("fat");
}else console.log("fatal fat");



