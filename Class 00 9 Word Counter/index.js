#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence Now : "
    }
]);
const word = answers.sentence.trim().split(" ");
console.log(word);
console.log(`Your sentence Word count is ${word.length}  `);
