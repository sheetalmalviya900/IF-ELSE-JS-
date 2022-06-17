// Write a python program to check whether a year is leap year or not.
const readlineaSync=require("readline-sync");
let year=readlineaSync.questionInt("Enter the year ")
if (year%400==0){
    console.log("leap year")
}else if(year%4==0 && year%100!=0){
    console.log("leap year")
}else{
    console.log("not a leap year")
}