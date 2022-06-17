//Write a python program to input any character and check whether it is alphabet,
//digit or special character.

const userinput=require("readline-sync");
let character=userinput.question("Enter the character:- ")
if((character>="a" && character<="z")(character>="A" && character<="Z")){
    console.log("alphabet")
}else if(character>="0" && character<="9"){
    console.log("digit")
}else{
    console.log("special character")
}