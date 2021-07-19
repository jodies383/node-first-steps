var figlet = require('figlet');
//import the greet module that is in the current folder
const greet = require('./greet');

// const styledMessage = figlet(greet('Xola'));
// console.log(styledMessage)

// var figlet = require('figlet');

figlet(greet('Xola'), function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});