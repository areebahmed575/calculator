import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        type: "number",
        name: "FirstNumber",
        message: "Please enter your first number"
    },
    {
        type: "number",
        name: "SecondNumber",
        message: "Please enter your second number"
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "What operation you want to perform?"
    }
]);
if (answer.FirstNumber && answer.SecondNumber && answer.operator) {
    let result = 0;
    if (answer.operator === "+") {
        result = answer.FirstNumber + answer.SecondNumber;
        console.log("The answer is " + result + " ");
    }
    if (answer.operator === "-") {
        result = answer.FirstNumber - answer.SecondNumber;
        console.log("The answer is " + result + " ");
    }
    if (answer.operator === "*") {
        result = answer.FirstNumber * answer.SecondNumber;
        console.log("The answer is " + result + " ");
    }
    if (answer.operator === "/") {
        result = answer.FirstNumber / answer.SecondNumber;
        console.log("The answer is " + result + " ");
    }
}
