/*
question2.js
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~/question2.js
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
2019-01-12  - started   - BS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

// inquirer = require('inquirer')
const questionFn = () => {
    
    const inquirer = require('inquirer');

    const questions = [{
      type: 'input',
      name:     'name',
      message:  'What is your name?'
    }];
    
    inquirer.prompt(questions)
        .then(answers => {
            console.log(`Hi ${answers['name']}!`)
        });    
};


module.exports = {
    question:   questionFn
};
