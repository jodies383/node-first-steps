var figlet = require('figlet');

const chalk = require('chalk');

const greet = require('./greet');


figlet(greet('Xola'), function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.bgGreen.black(data))
});