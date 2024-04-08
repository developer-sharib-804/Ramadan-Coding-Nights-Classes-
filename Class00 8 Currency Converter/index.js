#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.92,
    YEN: 151.73,
    INR: 83,
    PKR: 278.12,
    BAN: 109
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Select First Your currency : ",
        type: "list",
        choices: ["USD", "EUR", "YEN", "INR", "PKR", "BAN"]
    },
    {
        name: "to",
        message: "Select Second Your currency : ",
        type: "list",
        choices: ["USD", "EUR", "YEN", "INR", "PKR", "BAN"]
    },
    {
        name: "amount",
        message: "Enter your Amount Here : ",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
