// const Person = function(name){
//     this.name = name;
// }

class Person{
    constructor(name,age){
        this.name = name;
    }
    say(){
        console.log(`${this.name} says Hello`);
    }
    feeling(){
        console.log(`${this.name} is Happy`);
    }
}

const p1 = new Person("John");
p1.feeling();

Person.feeling = function(){
    console.log(`${this.name} is Sad`);
}
p1.feeling();

Person.prototype.feeling = function(){
    console.log(`${this.name} is Funny`);
}
p1.feeling();