// if-else
var age = 20;
if(age<=12){
    console.log("kids");
}else if(age > 12 && age <=24){
    console.log("teen")
}else{
    console.log("adult");
}
console.log("-------");

// switch case
var num=3;
switch(num){
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
}
console.log("-------");

// for
for(var i=0; i<3; i++){
    console.log(i);
}
console.log("-------");

// while
var j=0;
while(j<3){
    console.log(j);
    j++;
}
console.log("-------");

// do-while
var k=0;
do{
    console.log(k);
    k++;
}while(k<3);
console.log("-------");

// for-in 
var person = {name: "John", gender:"male"};     // use with object
for(var prop in person){
    console.log(prop +" = "+ person[prop]);
}
console.log("-------");

// for-of
var animals = ["dog", "cat", "chicken"];    // use with array
for(var ani of animals){
    console.log(ani);
}
// use array with for-in
// var animals = ["dog", "cat", "chicken"];
// for(var ani in animals){
//     console.log(ani);   // ani will be 0,1,2 not dog,cat,chicken
// }
console.log("-------");

// continue
for(var a=0;a<5;a++){
    if(a%2==0){
        continue;
        console.log(a);     // this code doesn't execute
    }
    console.log(a);
}
console.log("-------");

// label
forLoop:
for(var b=1;b<5;b++){
    var c=1;
    do{
        if(c%2==0){
            continue forLoop;
            console.log(c);
        }
        console.log("this is b = "+b)
        console.log("this is c = "+c);
        c++;
    }while(c<5);
    console.log("this is b = "+b)
}


