/*
question3.js
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~/question3.js
~~~~~~~~~~~~~~~~~~~~~~~~csssssss~~~~~~~~~~~~~~~~~~~
2019-01-12  - started   - BS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
const questionFn = () => {

    // var inquirer = require('inquirer');

    inquirer.prompt([
        'What is your name?'
    ])
    .then(answers => {
        console.log(`Hi there, ${answers}.`)
    });
};


module.exports = {
    question:   questionFn
};