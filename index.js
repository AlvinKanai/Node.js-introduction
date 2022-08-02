const fs = require('fs');
const path = require('path')

// Reading a file
/*
fs.readFile('./files/starter.txt', (err,data) => {
    if (err) throw err;
    console.log(data.toString());
})
*/

// OR we can specify the encoding before the callback

/*
fs.readFile('./files/starter.txt', 'utf8', (err,data) => {
    if (err) throw err;
    console.log(data);
})
*/

// Removing the hard coded file path
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err,data) => {
    if (err) throw err;
    console.log(data);
})

// writing a file
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Awesome, where you from?', (err) => {
    if (err) throw err;
    console.log('Writing complete');
})

// modfies an existing file if it exists and creates a new one if it doesn't exist
fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), 'Can we meet?', (err) => {
    if (err) throw err;
    console.log('Append complete');
})

// exit if there's an error
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})