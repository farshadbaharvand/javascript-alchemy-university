const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", function(num1) {
  rl.question("Enter second number: ", function(num2) {
    const sum = Number(num1) * Number(num2);
    console.log("The * is: " + sum);
    rl.close();
  });
});
