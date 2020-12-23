let prompt = require('prompt-sync')({sigint: true})

let num1 = prompt("PLease enter the first number :");
let num2 = prompt("Please enter the second number :");
let num3 = prompt("Please enter the third number :");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);
let average_score = ( num1 + num2 + num3 )  / 3 ;
console.log("Τhe average of Geometry,Algebra, Physics is :" + average_score);

if (average_score==7){
    console.log("Good job!");
}

if (average_score >= 4 && average_score <=6){
    console.log("You need to work harder!");
}
else if (average_score <4){
    console.log("Failed, you really need to work harder!");
}
