import inquirer from "inquirer";

let goldtola = 234800;
let silvertola = 2606;
let silverkg = 218621;
let goldkg = 19961794;
    let zakat = await inquirer.prompt([
        {
            message: "Select your Option to you want zakat from",
            name: "type",
            type: "list",
            choices: ["Gold", "Silver", "Cash"]
        },
    ]);

    if (zakat.type === "Gold") {
        let zakatgold = await inquirer.prompt([
            {
                message: "Select your Option to Gold KG or Tola",
                name: "golds",
                type: "list",
                choices: ["Gold kg", "Gold Tola"]
            },
        ]);
        if (zakatgold.golds === "Gold kg") {
            let goldzakatainput = await inquirer.prompt([
                {
                    message: "Enter your Gold KG",
                    type: "number",
                    name: "goldinputk"
                }
            ]);
            let yourgoldkg = goldzakatainput.goldinputk * goldkg * 2.5 / 100;
            console.log(yourgoldkg);
        } else if (zakatgold.golds === "Gold Tola") {
            let goldtzakatainput = await inquirer.prompt([
                {
                    message: "Enter your Gold Tola",
                    type: "number",
                    name: "goldtinput"
                }
            ]);
            if (7 < goldtzakatainput.goldtinput) {
                let yourgoldkg = goldtzakatainput.goldtinput * goldtola * 2.5 / 100; // Assuming goldtola is the weight of 1 Tola in kg
                console.log(yourgoldkg);
            } else {
                console.log("You are Not Eligible For zakat");
            }
        } else {
            console.log("Invalid your value");
        }
    } else if (zakat.type === "Silver") {
        let zakatsilver = await inquirer.prompt([
            {
                message: "Select your Option to Silver KG or Tola",
                name: "Silvers",
                type: "list",
                choices: ["Silver kg", "Silver Tola"]
            }
        ]);
        if (zakatsilver.Silvers === "Silver kg") {
            let silverzakatainput = await inquirer.prompt([
                {
                    message: "Enter your Silver KG",
                    type: "number",
                    name: "silverinput"
                }
            ]);
            let yoursilverkg = silverzakatainput.silverinput * silverkg * 2.5 / 100;
            console.log(yoursilverkg);
        } else if (zakatsilver.Silvers === "Silver Tola") {
            let silvertzakatainput = await inquirer.prompt([
                {
                    message: "Enter your Silver Tola",
                    type: "number",
                    name: "silvertinput"
                }
            ]);
            if (52 <= silvertzakatainput.silvertinput) {
                let yoursilverkg = silvertzakatainput.silvertinput * silvertola * 2.5 / 100;
                console.log(yoursilverkg);
            } else {
                console.log("You are Not Eligible For zakat");
            }
        } else {
            console.log("Invalid your value");
        }
    } else if (zakat.type === "Cash") {
        let zakatcash = await inquirer.prompt([
            {
                message: "Enter Your Cash here:",
                name: "cashs",
                type: "number"
            }
        ]);if(1690650 < zakatcash.cashs){
        let yourcash = zakatcash.cashs * 2.5 / 100;
        console.log(yourcash);}else{
          console.log("You are Not Eligible For zakat");
        }
    }

