"use strict";

//import account.js
const account = require('account.js');

//prompt-sync module
const prompt = require('prompt-sync')();

//Balance function
function getBalance(){
    //retrieve the balance from the account.js
    let balance = Number()
    console.log("Your current balance is: " + "$" + balance)
    return balance
}

//withdraw function
function withdraw(){
    //withdraw from account.js
    console.log("Please enter the amount to withdraw: ")
    const withdrawlAmount = Number(prompt());
    console.log(`Withdrawing ${withdrawlAmount}.`)

    return withdrawlAmount
}

//deposit function
function deposit(){
    //deposit to account.js
    console.log("Please enter the amount to deposit: ")
    const depositlAmount = Number(prompt());
    console.log(`Depositing ${withdrawlAmount}.`)

    return depositAmount
}

//validates the PIN function
function validatePin(){
    const inputPIN = prompt()
}

//import account.js
//export to index.js
module.exports.balance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.pin = validatePin;