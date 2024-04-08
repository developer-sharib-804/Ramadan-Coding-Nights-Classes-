
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your First Number", type: "number", name: "firstNumber" },
  { message: "Enter your Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the Oprator toperform ",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  }
     
]);
// condition statements 
if(answer.operator === "Addition"){
   console.log(answer.firstNumber + answer.secondNumber);
} else if(answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);}
    else if(answer.operator === "Multiplication"){
        console.log(answer.firstNumber * answer.secondNumber);
    }else if(answer.operator === "Division"){
        console.log(answer.firstNumber / answer.secondNumber);
    }else{console.log("Enter a valid Number");}