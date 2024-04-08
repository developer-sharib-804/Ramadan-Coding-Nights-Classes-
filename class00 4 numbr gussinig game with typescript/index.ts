#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber:number = Math.floor(Math.random() *10 +1);

const answer = await inquirer.prompt([
{
 
 type:"number",
 name:"userNumber",
 message: "Enter any number 1 to 10"
 }

]);

// conditonal statements

if(answer.userNumber === randomNumber){
    console.log("congratulations you guset right Number ");
}else{
    console.log("you guset wrong Number please try again");
}