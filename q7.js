// Write a python program to check whether a number is divisible by 5 and 11 or not.

const readlineaSync=require("readline-sync")
let num=readlineaSync.questionInt("Enter the number:- ")
if (num%5==0 && num%11==0){
    console.log("Divisible by 5 and 11 ")
}else{
    console.log("Not divisible")
}