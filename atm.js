//import account.js
const account = require('./account');

//prompt-sync module
const prompt = require('prompt-sync')();

let {balance} = account.account;

//Balance function
function getBalance(){
    //retrieve the balance from the account.js
    // let {balance} = account.account;
    console.log("Your current balance is: " + "$" + balance)
    return balance
}

//withdraw function
function withdraw(){
    //withdraw from account.js
    console.log("Please enter the amount to withdraw: ")
    const withdrawlAmount = Number(prompt());
    console.log(`Withdrawing $${withdrawlAmount}.`);

    //calculates new balance
    let withdrawl = balance - withdrawlAmount;
    balance = withdrawl;

    //displays new balance
    getBalance()
}

//deposit function
function deposit(){
    //deposit to account.js
    console.log("Please enter the amount to deposit: ")
    const depositAmount = Number(prompt());
    console.log(`Depositing ${depositAmount}.`);

    let deposit = balance + depositAmount;
    balance = deposit;

    getBalance()
}

//validates the PIN function
//TODO validate user input
function validatePin(){
    console.log("Welcome to the ATM. First, enter your PIN:")

    //grabs correct pin from account.js
    var {correctPin} = account.account

    //asks user for pin
    while (true){
        const inputPIN = prompt()

        if (inputPIN === correctPin){
            console.log("PIN is correct: Proceed.")
            break;
        }
        else{
            console.log("Please try again. Enter four-digit PIN")
        }
    }
}

//export to index.js
module.exports.balance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.pin = validatePin;