// Import
const {connect} = require('./client');
const {setupInput} = require("./input");

console.log("Connecting ...");

// Creating connection
let connObject = connect();

// Estabilishing connection
setupInput(connObject);