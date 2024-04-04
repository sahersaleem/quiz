import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"

console.log(chalk.greenBright(chalk.italic("Welcome to the Typescript Quiz!! ")))
let correctAnswers = 0;
do{const answers = await inquirer.prompt([
  {
    type: "list",
    name: "level",
    message:
      "Before we dive into the quiz,could you please select your preferred level of difficulty",
    choices: ["Easy", "Moderate", "Hard"],
  },
]);
console.log(chalk.blue(chalk.italic(('Each question carry five points!'))))
const { level } = answers;

if (level == "Easy") {
  const easyQuestion = await inquirer.prompt([
    {
      type: "list",
      name: "eQ1",
      message: "Which of the following is true about typescript",
      choices: [
        "It is a superset of javascript",
        "It is a subset of javascript",
        "It is completely different from javascript",
      ],
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
    },
    {
      type: "list",
      name: "eQ3",
      message: "What of the following is not a data type of typescript",
      choices: ["String", "Number", "Boolean", "Vector"],
    },
    {
      type: "list",
      name: "eQ4",
      message:
        "Which symbol is used to declare a type annotation in typescript",
      choices: [":", ">", ";", "|"],
    },
    {
      type: "list",
      name: "eQ5",
      message: "Which command is used to compile typescript code",
      choices: ["compile", "typescript", "tsc", "typescript"],
    },
  ]);

  const { eQ1, eQ2, eQ3, eQ4, eQ5 } = easyQuestion;

  switch (eQ1) {
    case "It is a superset of javascript":
      correctAnswers += 5;
      break;
  }

  switch (eQ2) {
    case "All of the above":
      correctAnswers += 5;
      break;
  }
  switch (eQ3) {
    case "Vector":
      correctAnswers += 5;
      break;
  }

  switch (eQ4) {
    case ":":
      correctAnswers += 5;
      break;
  }

  switch (eQ5) {
    case "tsc":
      correctAnswers += 5;
      break;
  }

  console.log(chalk.italic(chalk.magentaBright(`You score is ${correctAnswers} out of 25`)))

  if (correctAnswers <= 15) {
    console.log(chalk.yellow(chalk.italic("Better Luck! Try Next Time.")))
  } else if (correctAnswers > 15) {
    console.log(chalk.bold(chalk.red("Congratulations!You got a great score!Keep up the good work.")))
  }
}

if (level == "Moderate") {
  const moderateQuestion = await inquirer.prompt([
    {
      type: "list",
      name: "mQ1",
      message:
        "What's the error in this code \n\t console.logger('hello world')",
      choices: [
        "type error",
        "syntax error",
        "assignability error",
        "No . it,s correct",
      ],
    },
    {
      type: "list",
      name: "mQ2",
      message:
        "Can the properties of an object declared with 'const' be modified in typescript?",
      choices: ["Yes", "No"],
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
    },
    {
      type: "list",
      name: "mQ4",
      message: "Which option is correct about array?",
      choices: [
        "Store multiple items .",
        "access array element through index",
        "can push element in array",
        "All of the above",
      ],
    },
    {
      type: "list",
      name: "mQ5",
      message: "Why we use object?",
      choices: [
        "data grouping and organization",
        "print variable",
        "for using for loop",
        "cslling function",
      ],
    },
  ]);

  const { mQ1, mQ2, mQ3, mQ4, mQ5 } = moderateQuestion;

  switch (mQ1) {
    case "syntax error":
      correctAnswers += 5;
      break;
  }

  switch (mQ1) {
    case "syntax error":
      correctAnswers += 5;
      break;
  }

  switch (mQ2) {
    case "No":
      correctAnswers += 5;
      break;
  }

  switch (mQ3) {
    case "let b : string = 'Saher'":
      correctAnswers += 5;
      break;
  }

  switch (mQ4) {
    case "All of the above":
      correctAnswers += 5;
      break;
  }

  switch (mQ5) {
    case "data grouping and organization ":
      correctAnswers = +5;
      break;
  }

  console.log(chalk.italic(chalk.magentaBright(`You score is ${correctAnswers} out of 25`)))

  if (correctAnswers <= 15) {
    console.log(chalk.yellow(chalk.italic("Better Luck! Try Next Time.")))
  } else if (correctAnswers > 15) {
    console.log(chalk.red(chalk.bold("Congratulations!You got a great score!Keep up the good work.")))
  }
}

if (level == "Hard") {
  const hardQuestion = await inquirer.prompt([
    {
      type: "list",
      name: "HQ1",
      message: "By using which method we can remove last  element of array ? ",
      choices: ["pop()", "push()", "shift()", "unshift()"],
    },
    {
      type: "list",
      name: "HQ2",
      message: " When we used type void in function: ",
      choices: [
        "When function return something",
        "When function parameter contain array",
        "When function not return something",
        "We don't use void as a function return type ",
      ],
    },
    {
      type: "list",
      name: "HQ3",
      message:
        " 'for(let i = 0 ;i<5;i++) {if (i==3){continue;}console.log(i)}'",
      choices: ["0,1", "0,1,2,4", "3", "1,2,3,4"],
    },
    {
      type: "list",
      name: "HQ4",
      message: " 'let x = 5 \n\t let y = 10 \n\t  (x<y&&y<x)'",
      choices: ["true", "False"],
    },
    {
      type: "list",
      name: "HQ5",
      message:
        " 'function isInclude(fruits:string[]):boolean\n\t{ return   !fruits.include['Mango'] \n\t } \n\t  let fruits = ['Apple','Mango','banana']\n\t isInclude(fruits)     '",
      choices: ["true", "False"],
    },
  ]);
  const { HQ1, HQ2, HQ3, HQ4, HQ5 } = hardQuestion;
  switch (HQ1) {
    case "pop()":
      correctAnswers += 5;
      break;
  }

  switch (HQ2) {
    case "When function not return something":
      correctAnswers += 5;
      break;
  }

  switch (HQ3) {
    case "0,1,2,4":
      correctAnswers += 5;
      break;
  }

  switch (HQ4) {
    case "False":
      correctAnswers += 5;
      break;
  }

  switch (HQ4) {
    case "False":
      correctAnswers += 5;
      break;
  }

  console.log(chalk.italic(chalk.magentaBright(`You score is ${correctAnswers} out of 25`)))

  if (correctAnswers <= 15) {
    console.log(chalk.yellow(chalk.italic("Better Luck! Try Next Time.")))
  } else if (correctAnswers > 15) {
    console.log(chalk.red(chalk.bold("Congratulations!You got a great score!Keep up the good work.")))
  }



}
var continueoOrNot = await inquirer.prompt([{

  type:"input",
  name:"restart",
  message:"Do you want to continue press Y",
  default:"Y/n"






}])
















}while(continueoOrNot.restart=="Y"||continueoOrNot.restart=="y")