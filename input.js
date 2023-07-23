//imports
const { commands, messages } = require("./constants");

let connection;

//setup input function
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//user input function. It processes input based on pre-defined keys
//w(up), s(down), a(left), d(right), and message keys z, x, c (see messages object on constants.js)
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
    return;
  }
  const command = commands[key];
  if (command) {
    console.log(command.char);
    connection.write(command.servercmd);
  } else {
    connection.write(messages[key]);
  }
};
//exports
module.exports = {
  setupInput
};
