#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let currency: any = {
PKR : 277.69,
USD : 1,
KWD : 904.01,
Euro :301.12,
CNY : 39.14,
};
chalk.green.italic("PKR","USD","Euro","KWD","CNY");
let process = await inquirer.prompt([{
    name: "fromcrr",
    type: "list",
    message: chalk.green("Select First Currency"),
    choices:["PKR","USD","Euro","KWD","CNY"]
},{
    name: "tocrr",
    type: "list",
    message: chalk.green("Select Second Currency"),
    choices:["PKR","USD","Euro","KWD","CNY"]
},{
    name: "amount",
    type: "number",
    message: chalk.green("Enter Amount"),
}])
let fromcrr = currency[process.fromcrr]
let tocrr = currency[process.tocrr];
let amount = process.amount;
let baseAmount = amount / fromcrr
let converted = baseAmount * tocrr;
console.log(chalk.magenta.bold.italic(converted));