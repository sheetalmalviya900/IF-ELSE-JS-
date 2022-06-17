// Write a python program to input the month number and print the number of days in that month.
const userinput=require("readline-sync")
let num=userinput.questionInt("Enter the month number:- ")
if(num==1||num==3||num==5||num==7||num==8||num==10||num==12){
    console.log("31 DAYS")
}else if(num==2){
    console.log("28 DAYS")
}else{
    console.log("30 DAYS")
}
