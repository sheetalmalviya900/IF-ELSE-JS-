// Write a python program to input week number and print week day.
const userinput=require("readline-sync")
let num=userinput.questionInt("Enterv the number:- ")
if (num==1){
    console.log("MONDAY")
}else if(num==2){
    console.log("TUESDAY")
}else if(num==3){
    console.log("WEDNESDAY")
}else if(num==4){
    console.log("THURSDAY")
}else if(num==5){
    console.log("FRIDAY")
}else if(num==6){
    console.log("SATURDAY")
}else if(num==7){
    console.log("SUNDAY")
}else{
    console.log("ONLY SEVEN DAY IN WEEK")
}

