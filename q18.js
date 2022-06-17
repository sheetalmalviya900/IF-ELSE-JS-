const userinput=require("readline-sync");
let a=userinput.questionInt("enter the number");
let b=userinput.questionInt("enter the number");
let c=userinput.questionInt("enter the number");
if(a>b && a>c) {   
    if(b>c) {
        console.log("2nd largest is ",b);
    }
    else {
        console.log("2nd largest is ",c);
    }
} 
else if(b>a && b>c) {
    if(a>c) {
        console.log("2nd largest is ",a);
    }
    else {
        console.log("2nd largest is ",c);
    }
} else {
    if (a>b){
        console.log("2nd largest is ",a)
    }
    else{
        console.log("2nd largest is ",b)
    }
}
