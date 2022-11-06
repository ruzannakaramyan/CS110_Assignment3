const prompt = require("prompt-sync")();
var n = prompt("Write the number of rows and stars in each row: ");

let result = '';

for(let i=0; i<n; i++){
   for (let j=0; j<n; j++){
    result += "*";
    }
    result += "\n";
}

console.log(result);
