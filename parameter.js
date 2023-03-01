function bringShingara(money){
    console.log('mama shingara den');
    console.log('taka nen :', money);
}
var taka = 420;
bringShingara(taka);

//parameter only available in function body
//can take multiple parameters

function add(num1, num2){
    console.log('going to add', num1, num2)
}
add(10, 22);

function sum(a,b,c,d,e){
        console.log(a,b,c,d,e);
        var sum = a+b+c+d+e;
        console.log(sum);
}
sum(10,12,20,23,30);