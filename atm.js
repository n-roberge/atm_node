//import account.js
const account = require('./account');

//prompt-sync module
const prompt = require('prompt-sync')();

//Balance function
function getBalance(){
    //retrieve the balance from the account.js
    let {balance} = account.account;
    console.log("Your current balance is: " + "$" + balance)
    return balance
}

//withdraw function
function withdraw(){
    //withdraw from account.js
    console.log("Please enter the amount to withdraw: ")
    const withdrawlAmount = Number(prompt());
    console.log(`Withdrawing ${withdrawlAmount}.`);

    getBalance();

    return withdrawlAmount
}

//deposit function
function deposit(){
    //deposit to account.js
    console.log("Please enter the amount to deposit: ")
    const depositlAmount = Number(prompt());
    console.log(`Depositing ${withdrawlAmount}.`);

    getBalance();

    return depositAmount
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