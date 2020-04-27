// function
// const getFullName = function(fullName){
//     return fullName;
// }

// arrow function
const getFullName = (fullName) => {
    return fullName;
};

// ลดรูป
const getLastName = lastName => lastName;   // one parameter and one statement

console.log(`${getFullName("Harry")} ${getLastName("Potter")}`);

const sum = (a,b) => {
    return a+b;
}

let kvArray = [ {key: 1, value: 10}, 
                {key: 2, value: 20}, 
                {key: 3, value: 30}]

let reformatArray = kvArray.map(obj => {
    let rObj = {}
    rObj[obj.key] = obj.value
    return rObj
})
console.log(reformatArray);