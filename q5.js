// Write a python program to find maximum between three numbers.
const readlineaSync=require("readline-sync");
let a=readlineaSync.questionInt("Enter the first number");
let b=readlineaSync.questionInt("Enter the first number");
let c=readlineaSync.questionInt("Enter the first number");
if (a>b && a>c){
    console.log(a,"is maximum")
}else if(b>a && b>c){
    console.log(b,"is maximum")
}else{
    console.log(c,"is maximum")
}
