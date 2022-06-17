// '''Write a python program to find maximum between two numbers.'''
const readlineaSync=require("readline-sync");
let a=readlineaSync.questionInt("Enter the first number");
let b=readlineaSync.questionInt("Enter the first number");
if (a>b){
    console.log(a,"is maximum")
}else if(b>a){
    console.log(b,"is maximum")
}else{
    console.log("both are equal")
}