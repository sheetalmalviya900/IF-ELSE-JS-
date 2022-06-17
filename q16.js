//Write a python program to count the total number of notes in a given amount.
const userinput=require("readline-sync")
let amount=userinput.questionInt("Enter the amount")
if(amount>=2000){
    note=parseInt(amount/2000)
    amount=amount-(2000*note)
    console.log(parseInt (note),"2000 notes")
}if(amount>=500){
    note=parseInt(amount/500)
    amount=amount-(500*note)
    console.log(parseInt(note),"500 notes")
}if(amount>=200){
    note=parseInt(amount/200)
    amount=amount-(200*note)
    console.log(parseInt(note),"200 notes")
}if(amount>=100){
    note=parseInt(amount/100)
    amount=amount-(100*note)
    console.log(parseInt(note),"100 notes")
}if(amount>=50){
    note=parseInt(amount/50)
    amount=amount-(50*note)
    console.log(parseInt(note),"50 notes")
}if(amount>=20){
    note=parseInt(amount/20)
    amount=amount-(20*note)
    console.log(parseInt(note),"20 notes")
}if(amount>=10){
    note=parseInt(amount/10)
    amount=amount-(10*note)
    console.log(parseInt(note),"10 notes")
}if(amount>=5){
    note=parseInt(amount/5)
    amount=amount-(5*note)
    console.log(parseInt(note),"5 notes")
}if(amount>=2){
    note=parseInt(amount/2)
    amount=amount-(2*note)
    console.log(parseInt(note),"2 notes")
}if(amount>=1){
    note=parseInt(amount/1)
    amount=amount-(1*note)
    console.log(parseInt(note),"1 notes")
}
