const prompt = require("prompt-sync")();
var num1= prompt("Write your first number: ");
var num2= prompt("Write your second number: ");

let result = 0;

let firstNum = parseInt(num1);
let secondNum = parseInt(num2);

for (i=0; i<secondNum ; i ++){
    result += firstNum; 
}

console.log(result);
