const IP = "192.168.1.66";
//const IP = "127.0.0.1";
const PORT = 50541;

const commands = {
  '\u0077': { char: "w", servercmd: "Move: up" }, //w
  '\u0061': { char: "a", servercmd: "Move: left" }, //a
  '\u0073': { char: "s", servercmd: "Move: down" }, //s
  '\u0064': { char: "d", servercmd: "Move: right" }, //d
};


//messages object
const messages = {
  '\u007A': "Say: No snakes in Ireland!",//z
  '\u0078': "Say: Don't eat your tail!", //x
  '\u0063': "Say: Is it snake or snek?", //c
};

//exports
module.exports = {
  IP,
  PORT,
  commands,
  messages,
};