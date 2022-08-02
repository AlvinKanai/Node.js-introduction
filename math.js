const add = (a,b) => a+b;
const multiply = (a,b) => a*b;
const subtract = (a,b) => a-b;
const divide = (a,b) => a/b;

module.exports = {add, multiply, subtract, divide};

// OR
exports.add = (a,b) => a+b;
exports.multiply = (a,b) => a*b;
exports.subtract = (a,b) => a-b;
exports.divide = (a,b) => a/b;
// with the above we don't need to have module.exports

