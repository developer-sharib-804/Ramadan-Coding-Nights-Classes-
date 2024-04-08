#! /usr/bin/env node
import inquirer from "inquirer";

let todos =[];
let condition = true;
while(condition){
let addTodo= await inquirer.prompt([
 {
    message: "What you wanna do store in Todo",
    type: "input",
    name: "todo"
 },
 {
    name : "addmore",
    type: "confirm",
    mesage: "Do you Want to add more ",
    default: true
 }
]);
todos.push(addTodo.todo);
condition = addTodo.addmore
console.log(todos);}