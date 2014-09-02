/**
 *
 */
var args = process.argv.slice(2);
var option = args[0];
var option2 = args[0];
var locale = "en";

switch(option){
  case "start":
    //console.log(String.fromCharCode(9817));
    //console.log(String.fromCharCode(8414));
    //console.log(String.fromCharCode(12877));
    //require('./jobs/start.js');
    require('./jobs/start.js');
    break;
  case "board":
    require('./jobs/board.js');
    break;
  default:
    console.log(require("./messages.json")[locale].usage)
    break;
}
