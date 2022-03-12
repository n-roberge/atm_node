//import atm.js
const atm = require('./atm');

//contain user menu for interacting with ATM
const prompt = require('prompt-sync')();

//Enter PIN
atm.pin()

//Main menu
let menuOption;
do{
    menuOption = prompt("Select your option: <1> for account balance, <2> for deposit, <3> for withdraw, or <4> for exit: ")

    switch (menuOption)
    {
        case "1":
            atm.balance();
            break;
        case "2":
            atm.deposit();
            break;
        case "3":
            atm.withdraw();
            break;
        case "4":
            console.log("Exiting")
            break;
    }
}
while(menuOption!=4)