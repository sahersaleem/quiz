#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let score1 = 0;
async function calculatingScore(score) {
    console.log(chalk.italic(chalk.magentaBright(`You score is ${score1} out of 5`)));
    if (score1 <= 2) {
        console.log(chalk.yellow(chalk.italic("Better Luck! Try Next Time.")));
    }
    else if (score1 > 2) {
        console.log(chalk.bold(chalk.red("Congratulations!You got a great score!Keep up the good work.")));
    }
}
let questionsArray = [];
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "level",
        message: "Before we dive into the quiz,could you please select your preferred level of difficulty",
        choices: ["Easy", "Moderate", "Hard"],
    },
]);
if (answers.level == "Easy") {
    questionsArray = [
        {
            type: "list",
            name: "eQ1",
            message: "Which of the following is true about typescript",
            choices: [
                "It is a superset of javascript",
                "It is a subset of javascript",
                "It is completely different from javascript",
            ],
            correctAnswers: "It is a superset of javascript",
        },
        {
            type: "list",
            name: "eQ2",
            message: "What does typescript offer over javascript",
            choices: [
                "Static typing",
                "Enhance tooling support",
                "Modern language features",
                "All of the above",
            ],
            correctAnswers: "All of the above",
        },
        {
            type: "list",
            name: "eQ3",
            message: "What of the following is not a data type of typescript",
            choices: ["String", "Number", "Boolean", "Vector"],
            correctAnswers: "Vector",
        },
        {
            type: "list",
            name: "eQ4",
            message: "Which symbol is used to declare a type annotation in typescript",
            choices: [":", ">", ";", "|"],
            correctAnswers: ":",
        },
        {
            type: "list",
            name: "eQ5",
            message: "Which command is used to compile typescript code",
            choices: ["compile", "typescript", "tsc", "typescript"],
            correctAnswers: "tsc",
        },
    ];
    await mainFunction();
}
if (answers.level == "Moderate") {
    questionsArray = [
        {
            type: "list",
            name: "mQ1",
            message: "=>What's the error in this code \n\t console.logger('hello world')",
            choices: [
                "type error",
                "syntax error",
                "assignability error",
                "No . it,s correct",
            ],
            correctAnswers: "syntax error",
        },
        {
            type: "list",
            name: "mQ2",
            message: "=>Can the properties of an object declared with 'const' be modified in typescript?",
            choices: ["Yes", "No"],
            correctAnswers: "No",
        },
        {
            type: "list",
            name: "mQ3",
            message: "Which option is correct?",
            choices: [
                "let a : number = 'Saher'",
                "let b : string = 'Saher'",
                "let c : boolean = 5 ",
            ],
            correctAnswers: "let b : string = 'Saher'",
        },
        {
            type: "list",
            name: "mQ4",
            message: "=>Which option is correct about array?",
            choices: [
                "Store multiple items .",
                "access array element through index",
                "can push element in array",
                "All of the above",
            ],
            correctAnswers: "All of the above",
        },
        {
            type: "list",
            name: "mQ5",
            message: "=>Why we use object?",
            choices: [
                "data grouping and organization",
                "print variable",
                "for using for loop",
                "calling function",
            ],
            correctAnswers: "data grouping and organization",
        },
    ];
    await mainFunction();
}
if (answers.level == "Hard") {
    questionsArray = [
        {
            type: "list",
            name: "HQ1",
            message: "=>By using which method we can remove last  element of array ? ",
            choices: ["pop()", "push()", "shift()", "unshift()"],
            correctAnswers: "pop()",
        },
        {
            type: "list",
            name: "HQ2",
            message: "=> When we used type void in function: ",
            choices: [
                "When function return something",
                "When function parameter contain array",
                "When function not return something",
                "We don't use void as a function return type ",
            ],
            correctAnswers: "When function not return something",
        },
        {
            type: "list",
            name: "HQ3",
            message: " =>'for(let i = 0 ;i<5;i++) {if (i==3){continue;}console.log(i)}'",
            choices: ["0,1", "0,1,2,4", "3", "1,2,3,4"],
            correctAnswers: "0,1,2,4",
        },
        {
            type: "list",
            name: "HQ4",
            message: "=> 'let x = 5 \n\t let y = 10 \n\t  (x<y&&y<x)'",
            choices: ["true", "False"],
            correctAnswers: "False",
        },
        {
            type: "list",
            name: "HQ5",
            message: " =>'function isInclude(fruits:string[]):boolean\n\t{ return   !fruits.include['Mango'] \n\t } \n\t  let fruits = ['Apple','Mango','banana']\n\t isInclude(fruits)     '",
            choices: ["true", "False"],
            correctAnswers: "False",
        },
    ];
    await mainFunction();
}
async function mainFunction() {
    for (let i = 0; i < questionsArray.length; i++) {
        const userAnswer = await inquirer.prompt(questionsArray[i]);
        const correctAnswer = questionsArray[i].correctAnswers;
        console.log(`correct Answer : ${questionsArray[i].correctAnswers}`);
        if (userAnswer[questionsArray[i].name] === correctAnswer) {
            score1++;
        }
    }
    await calculatingScore(score1);
}
