var readline = require('readline');
var locale = "en";

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(require("../messages.json")[locale].options)

rl.question("Choose an option? ", function(answer) {
  console.log("Thank you for your valuable feedback:", answer);
  //rl.close();
});
