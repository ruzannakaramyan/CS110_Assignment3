const prompt = require("prompt-sync")();
var num= prompt("Write your number: ");
//let num = 25;
let result = "";


while(num > 0){
   digit = num % 2;
    result += digit.toString();
    num = Math.floor(num / 2); 
}

let reversed = "";
let i;

for (i = result.length - 1; i >= 0; i--) {
    reversed += result[i];
}

console.log(reversed);
