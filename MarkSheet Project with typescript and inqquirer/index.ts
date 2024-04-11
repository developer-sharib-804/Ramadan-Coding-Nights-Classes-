#! /usr/bin/env node 
import inquirer from "inquirer";

let answer = await inquirer.prompt([  //your prompt is here

    {message:"Enter your English Number", name:"english", type:"number"},// client English number
    {message:"Enter your Urdu Number", name:"urdu", type:"number"},// Client urdu number
    {message:"Enter your Math Number", name:"math", type:"number"}, // client math number
    {message:"Enter your Physics Number", name:"physics", type:"number"}, //client  physics number
    {message:"Enter your Biology Number", name:"biology", type:"number"}, //Client Biology
     

]);
console.log("Their Your Mak Sheet "); // Compile all number
console.log("------------------------");
console.log(`Your English Number is ${answer.english}/100`);
console.log(`Your Urdu Number is ${answer.urdu}/100`);
console.log(`Your Math Number is ${answer.math}/100`);
console.log(`Your Physics Number is ${answer.physics}/100`);
console.log(`Your Biology Number is ${answer.biology}/100`);

console.log("------------------------");
let yourTotal = answer.english+answer.urdu+answer.math+answer.math+answer.physics+answer.biology; // your Total numbers 
console.log("YOUR TOTAL NUMBERS HERE");
console.log(`Your total numbers ${yourTotal}/500`); // total numbers
console.log("------------------------");
console.log("Your Percentage is Here ");
let percentage = yourTotal*100/600;
console.log(`Your Percentage is  ${percentage}`); // your Percentage
console.log("---------------------------------")
console.log("Your Grade is Here  ");
console.log("------------------");
// conditional statement
if(percentage>90 && percentage<100 ){
 console.log("Your Grade is A+1");
}else if(percentage>80 && percentage<90 ){
    console.log("Your Grade is A1");
   }else if(percentage>70 && percentage<80 ){
    console.log("Your Grade is A");
   } else if(percentage >60 && percentage<70 ){
    console.log("Your Grade is B");
 }else if(percentage >50 && percentage<60 ){
    console.log("Your Grade is C");
   }
 else if(percentage >40 && percentage<50 ){
    console.log("Your Grade is D");
} 
else if(percentage >33 && percentage<40 ){
   console.log("Your Grade is E");
} 
else{
   console.log("Invalid your Percentage ");
} 

