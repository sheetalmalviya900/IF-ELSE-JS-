// Write a python program to input any alphabet and check whether it is vowel or consonant.
const readlineaSync=require("readline-sync");
let alphabet=readlineaSync.question("Enter the alphabet:- ");
if(alphabet=="a"||alphabet=="e"||alphabet=="i"||alphabet=="o"||alphabet=="u"){
    console.log("vowel")
}else{
    console.log("consonant")
}