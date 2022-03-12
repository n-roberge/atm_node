//import account.js
const account = require('./account');

//prompt-sync module
const prompt = require('prompt-sync')();

let {balance} = account.account;

//Balance function
function getBalance(){
    console.log("Your current balance is: " + "$" + balance);
    return balance;
}

//withdraw function
function withdraw(){
    //withdraw from account.js
    console.log("Please enter the amount to withdraw: ");
    const withdrawlAmount = Number(promptFor("",amountValid));
    console.log(`Withdrawing: $${withdrawlAmount}.`);

    //calculates new balance
    let withdrawl = balance - withdrawlAmount;
    balance = withdrawl;

    //displays new balance
    getBalance();
};

//deposit function
function deposit(){
    //deposit to account.js
    console.log("Please enter the amount to deposit: ");
    const depositAmount = Number(promptFor("",amountValid));
    console.log(`Depositing: $${depositAmount}.`);

    //calculates new balance
    let deposit = balance + depositAmount;
    balance = deposit;

    //displays new balance
    getBalance();
};

//validates the PIN function
function validatePin(){
    console.log("Welcome to the ATM. First, enter your PIN:");

    //grabs correct pin from account.js
    var {correctPin} = account.account;

    //asks user for pin
    while (true){
        const inputPIN = promptFor("",pinValid);

        if (inputPIN === correctPin){
            console.log("PIN is correct: Proceed.");
            break;
        }
        else{
            console.log("Please try again. Enter four-digit PIN");
        }
    };
};

//validation
function promptFor(input, valid){
    let isValid;
    do{
      var response = prompt(input).trim();
      isValid = valid(response);
    } 
    while(response === ""  ||  isValid === false)
    return response;
};

//valdiates PIN if it is four numbers
function pinValid(input){
    if (/^[0-9]{4}$/.test(input)){
        return true;
    }
    else{
        console.log("Please enter a valid PIN");
        return false;
    };
};

//validation for numerical input
function amountValid(input){
    if (isNaN(input)){
        console.log("Please enter a dollar amount.");
        return false;
    }
    else{
        return true;
    };
};

//export to index.js
module.exports.balance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.pin = validatePin;