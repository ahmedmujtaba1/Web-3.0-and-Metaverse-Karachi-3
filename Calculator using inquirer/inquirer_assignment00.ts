import inquirer from "inquirer";
function calculator(number1: number, operator: string, number2: number) {
    if (operator == "+") {
      let result = number1 + number2;
      console.log(`${number1} ${operator} ${number2} = ${result}`);
    } else if (operator == "-") {
      let result = number1 - number2;
      console.log(`${number1} ${operator} ${number2} = ${result}`);
    } else if (operator == "x") {
      let result = number1 * number2;
      console.log(`${number1} ${operator} ${number2} = ${result}`);
    } else if (operator == "/") {
      let result = number1 / number2;
      console.log(`${number1} ${operator} ${number2} = ${result}`);
    }
  }
  
async function getUserInput() {
  const { myNumber1 } = await inquirer.prompt({
    message: "Enter your first Number?",
    name: "myNumber1",
  });
  const { myNumber2 } = await inquirer.prompt({
    message: "Enter your second Number?",
    name: "myNumber2",
  });
  const { myOperator } = await inquirer.prompt({
    message: "Enter Operator?",
    name: "myOperator",
  });

  calculator(Number(myNumber1), myOperator, Number(myNumber2));
}

getUserInput();