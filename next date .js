const userinput=require("readline-sync")
let year=userinput.questionInt("Input a year: ")
let leap_year=0
let month_length=0

if (year % 400 == 0){
    leap_year = true
}else if(year % 100 == 0){
    leap_year = false
}else if(year % 4 == 0){
    leap_year = true
}else{
    leap_year = false
}


let month = userinput.questionInt("Input a month [1-12]: ")
if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
    month_length = 31
}else if(month == 2){
    if (leap_year){
        month_length = 29
    }else{
        month_length = 28 
    }
}else{
    month_length = 30
}


let day =userinput.questionInt("Input a day [1-31]: ")
if (day < month_length){
    day += 1
}else{
    day = 1
    if (month == 12){
        month = 1
        year += 1
    }else{
        month += 1
    }
}
console.log("The next date is [yyyy-mm-dd]"+" "+year+"-"+month+"-"+day) 