// Write a python program to check whether a number is even or odd.
const readlineaSync=require("readline-sync")
let num=readlineaSync.questionInt("Enter the number:- ")
if (num%2==0){
    console.log("Even Number")
}else{
    console.log("Odd Number")
}