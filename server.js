// INTRODUCTION TO NODE.JS  By Dave Gray
// Some notes about Node.js

/*
1.It runs on the server and not the browser
2.The console is in the terminal window
3.Global object instead of window object
4.Misses API's like fetch
*/


console.log("This is my first node project");

const os = require('os');
const  path = require('path');

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

// Outputs the path of the current working directory
console.log(__dirname);
// Outputs the path of the current file and the file name
console.log(__filename);

// Same as console.log(__dirname)
console.log(path.dirname(__filename));
// Outputs the name of the file without the path
console.log(path.basename(__filename));
// Outputs the extension of the file
console.log(path.extname(__filename));
// Outputs an object with the path, file name,extension etc
console.log(path.parse(__filename));

// Math.js
const math = require('./math');
// first style of using a function
console.log(math.add(1,2));
// OR
const { add, multiply, subtract, divide } = require('./math');
// second style of using a function
console.log(add(1,2));
console.log(multiply(1,2));
console.log(subtract(1,2));
console.log(divide(1,2));

