#!/usr/bin/env node


console.log("Welcome")

import inquirer from "inquirer"
import { plus01 } from "./oerators/add.js"
import { minus01 } from "./oerators/sub.js"
import { multiple01 } from "./oerators/multi.js"
import { divide01 } from "./oerators/div.js"

let answer = await inquirer.prompt ([
    {
        message: "Enter Your First Nummber",
        type: "number",
        name: "num1"
    },
    {
        message: "Enter Your Second Nummber",
        type: "number",
        name: "num2"
    },
    {
        message: "Select Operator",
        type: "list",
        choices: ["+","-","*","/"],
        name: "operator"
    },
])

if (answer.operator === "+"){
    let result= plus01(answer.num1, answer.num2);
    console.log(result);
}
else if( answer.operator === "-"){
    let result= minus01( answer.num1, answer.num2);
    console.log(result);
}
else if( answer.operator === "*"){
    let result= multiple01( answer.num1, answer.num2);
    console.log(result);
}
else if( answer.operator === "/"){
    let result= divide01( answer.num1, answer.num2);
    console.log(result);
}