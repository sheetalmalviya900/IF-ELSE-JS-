// Write a python program to check whether a character is an alphabet or not.
const readlineaSync=require("readline-sync");
let character=readlineaSync.question("Enter the character:- ");
if ((character>="A" && character<="Z")||(character>="a" && character<="z")){
    console.log("alphabet")
}else{
    console.log("not")
}