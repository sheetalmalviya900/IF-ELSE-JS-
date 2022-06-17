// Write a python program to check whether a number is negative, positive or zero.
const readlineaSync=require("readline-sync");
let a=readlineaSync.questionInt("Enter the first number");
if (a>0){
    console.log(a,"is positive")
}else if(a<0){
    console.log(a,"is negative")
}else{
    console.log(a,"is zero")
}
