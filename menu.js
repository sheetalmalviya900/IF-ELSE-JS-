const userinput=require("readline-sync");
let DAY=userinput.question("Enter the day:- ")
let Time=userinput.question("Enter the time:- ")

switch(DAY){

    case"MONDAY":
        switch(Time){
            case "breakfast":
                console.log("Poha");
                break;
            case "lunch":
                console.log("roti and bhindi");
                break;
            case "dinner":
                console.log("rajma and cawal");
                break;
            default:
                console.log("enter sahi Time");
                break;
        }
        break;

    case"TUESDAY":
        switch(Time){
            case "breakfast":
                console.log("maggie");
                break;
            case "lunch":
                console.log("roti and palak");
                break;
            case "dinner":
                console.log("chole bathure");
                break;
            default:
                console.log("enter sahi Time");
                break;            
        }
        break;

    case"WEDNESDAY":
        switch(Time){
            case "breakfast":
                console.log("pasta");
                break;
            case "lunch":
                console.log("roti and beans");
                break;
            case "dinner":
                console.log("masroom sabji and roti");
                break;
            default:
                console.log("enter sahi Time");
                break;
        }
        break;

    case"THURSDAY":
        switch(Time){
            case "breakfast":
                console.log("sabudana");
                break;
            case "lunch":
                console.log("roti and loki");
                break;
            case "dinner":
                console.log("pulav");
                break;
            default:
                console.log("enter sahi Time");
                break;
        }
        break;

    case"FRIDAY":
        switch(Time){
            case "breakfast":
                console.log("idli");
                break;
            case "lunch":
                console.log("roti and bengan");
                break;
            case "dinner":
                console.log("dosha");
                break;
            default:
                console.log("enter sahi Time");
                break;
        }
        break;

    case"SATURDAY":
        switch(Time){
            case "breakfast":
                console.log("chomin");
                break;
            case "lunch":
                console.log("roti and gobi");
                break;
            case "dinner":
                console.log("puri and allu");
                break;
            default:
                console.log("enter sahi Time");
                break;
        }
        break;

    case"SUNDAY":
        switch(Time){
            case "breakfast":
                console.log("milk");
                break;
            case "lunch":
                console.log("roti and drum stick");
                break;
            case "dinner":
                console.log("sandwich");
                break;
            default:
                console.log("enter sahi Time");
                break;
        }
        break;

    default:
        console.log("enter sahi day");
        break;
}