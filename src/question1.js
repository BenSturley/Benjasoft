/*
question1.js
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~/question1.js
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
2019-01-12  - started   - BS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
const questionFn = () => {
  
    // const readline = require('readline');
    
    const readline = require('readline')
        .createInterface({
            input:  process.stdin,
            output: process.stdout
        });

        readline.question(`What's your name?`, (name) => {
        console.log(`Hi ${name}!`)
        readline.close()
    })
      
};

module.exports = {
    question:   questionFn
};
