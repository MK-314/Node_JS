var validator = require('validator');
var chalk = require('chalk');
console.log(chalk.green.bold('Success!'));

console.log(validator.isEmail("michael.kashkov@gmail.com"));