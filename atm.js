console.log("-----WELCOME-----\n");
console.log("PLEASE INSERT YOUR CARD\nHi,please do not remove your chip card leave your card inserted during the entire transaction");

const userinput=require("readline-sync");
let language=userinput.question("Please select your language (hindi/english)" );

if (language=="english"){
    let PIN=userinput.questionInt("Please enter your pin");

    if (PIN>=1000 && PIN<10000){
        console.log("Please choose 'banking' for cash withdraw (banking,balance inquiry)");
        let Transaction=userinput.question("Please select transaction (WITHDRAW/DEPOSITE):- ");

        if (Transaction=="withdraw"){
            let account=userinput.question("please enter your type of account :- ");

            if (account=="saving" || account=="KCC" || account=="current"){
                console.log("Cash available; Rs.100,200,500,2000")
                console.log("In your account 50000 Rs.");
                let amount=userinput.questionInt("Please enter amount for withdraw :-")

                

                if (amount<=50000){
                    console.log("Your transaction is being processed\nPlease wait.......")
                    console.log("Please collect cash\nTransaction complete")
                    console.log("Available balance",50000-amount)
                }

                else{
                    console.log("In your account only 50000")
                }

            }
            else{
                console.log("please enter valid account")
            }

        }
        else if(Transaction=="DEPOSITE"){
            let account=userinput.question("please enter your type of account :- ");

            if (account=="saving" || account=="KCC" || account=="current"){
                console.log("In your account 50000 Rs.");
                let amount=userinput.questionInt("Please enter amount for deposite :-")
                console.log("Your transaction is being processed\nPlease wait.......")
                console.log("Transaction complete")
                console.log("Available balance",50000+amount)
            }

            else{
                console.log("please enter valid account")
            }

        }
        else{
            console.log("enter  valid transaction ")
        }

    }
    else{
        console.log("valid pin");
    }
    
}
else{
    console.log("select valid language");
}