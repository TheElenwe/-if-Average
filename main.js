let Yargs = require('yargs')
 
let Geometry=6 ;
let Algebra=7;
let Physics=8;

let average_score =(Geometry +Algebra + Physics )  / 3 ;
console.log("Τhe average of Geometry,Algebra, Physics is :" + average_score);

if (average_score==7){
    console.log("Good job!");
}

if (average_score >= 4 && average_score <=6){
    console.log("You need to work harder!")
}
else if (average_score <4){
    console.log("Failed, you really need to work harder!")
}

