// Write a python program to check whether a character is uppercase or lowercase alphabet.
const userinput=require("readline-sync");
let ch=userinput.question("Enter the character:- ")
if(ch>="a" && ch<="z"){
    console.log("lowercase")
}else if(ch>="A" && ch<="Z"){
    console.log("uppercase")
}else{
    console.log("other character")
}