#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: [
            "Addition + ",
            "Subtraction - ",
            "Multiplication * ",
            "Division / ",
            "Modulus % ",
            "Exponent",
        ],
    },
]);
// console.log(answer);
if (answer.operator === "Addition + ") {
    console.log(`Your answer is ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operator === "Subtraction - ") {
    console.log(`Your answer is ${answer.firstNumber - answer.secondNumber}`);
}
else if (answer.operator === "Multiplication * ") {
    console.log(`Your answer is ${answer.firstNumber * answer.secondNumber}`);
}
else if (answer.operator === "Division / ") {
    console.log(`Your answer is ${answer.firstNumber / answer.secondNumber}`);
}
else if (answer.operator === "Modulus % ") {
    console.log(`Your answer is ${answer.firstNumber % answer.secondNumber}`);
}
else if (answer.operator === "Exponent") {
    console.log(`Your answer is ${answer.firstNumber ** answer.secondNumber}`);
}
console.log("\t\n Thanks for using Calculator \t\n");
// let a: number = 11;
// let b: number = 5;
// let reuslt = (a % b);
// console.log(reuslt)
