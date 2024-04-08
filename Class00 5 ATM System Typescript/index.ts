#! /usr/bin/env node 
import inquirer from "inquirer";


let YourName = "Sharib Ateeq";
let yourBalance = 20000;
let yourPincode = 9847;

// ----------------- Login by PIN CODE & Select Operation-------------------------------


let atmpincode = await inquirer.prompt([ //Enter your Pincode
    {name: "pinCode",
     type: "number",
     message: "Please Enter your 4 Digit Pin code : "

    },
    
]);

if(atmpincode.pinCode === yourPincode){// if your pincode is confirom login
    console.log("--------------------");
    console.log("SuccessFully Login " , YourName );//login person Name
    console.log("--------------------");
  let atmOperation = await inquirer.prompt([ //Select your opertion what do you want 
    {
        name: "operation",
        type: "list",
        message: "Please Chose Your Operation",
        choices:["Withdraw", "Check Balance", "Fast Cash"]
    }
  ]);

// -------------------With draw-----------------------------------------------

  if(atmOperation.operation === "Withdraw"){ // if you select withdraw 
    let withdrawAmount = await inquirer.prompt([ //Enter your amount you want to withdraw
        {
            name: "amount",
            type: "number",
            message:"Enter your Amount here :"
        }

    ]);
    if(1 <= withdrawAmount.amount && yourBalance >= withdrawAmount.amount){ // condition if your amount big your balance
    console.log("--------------------");
    yourBalance -= withdrawAmount.amount; // subtraction amount to your balance
   
     console.log("Your Current Balance is : " + yourBalance); // current your balance
     console.log("--------------------");
     
     console.log("Thank you for Using");// last massage Thanks 
    }else{
        console.log("Please Charge your Card Invalid amount ");
    }
  }
  
//   -----------------Check Balance -------------------------------
  
  
if(atmOperation.operation === "Check Balance"){ // if you Select check Balance 
    console.log("--------------------");
     console.log("your current Balance is : " + yourBalance); // Show your balance 
     console.log("--------------------");
     console.log("Thank you for Using");// last massage Thanks 
  }
  
  
//   ----------------Fast Cash--------------------------------------
  
  
  
  
  if(atmOperation.operation === "Fast Cash"){
    let fastCash = await inquirer.prompt([ // Select Your Amount
        {
            name: "cash",
            type: "list",
            message: "Select Your Amount : ",
            choices:[500, 1000, 1500, 2000, 5000] // your choices
        }
    ]);
    if(yourBalance >= fastCash.cash){
    yourBalance -= fastCash.cash; // subtraction amount to your balance
   
    console.log("Your Current Balance is : " + yourBalance); // current your balance
    console.log("--------------------");
    
    console.log("Thank you for Using");// last massage Thanks 
    }
    else{
        console.log("Please Charge your Card Invalid amount ");
    }
  }

}else {
    console.log("Your Pin code is Incorrect ");// if you pincode incorrect
}