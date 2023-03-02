// function add(num1, num2){
//     console.log(num1,num2);
//     var sum = num1+num2;
    
//      return sum;
// }
// add(45,15);
// var total = add(80,20);
// console.log('total',total);

function getTotal(ass1,ass2,ass3){
    const total = ass1+ass2+ass3;
    const avg = total / 3;
    return avg;
}
const ass1Marks = 60;
const ass2Marks = 59;
const ass3Marks = 58;
var myAvg = getTotal(ass1Marks,ass2Marks,ass3Marks);
console.log("My average marks :", myAvg);