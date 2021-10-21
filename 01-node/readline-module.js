const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const a = Math.floor((Math.random() * 10) + 1);
const b = Math.floor((Math.random() * 10) + 1);
const result = a + b;

rl.question(`What is the result of ${a} + ${b}? \n`, (input) => {
    if (input == result) {
        rl.close();
    } else {
        rl.setPrompt('Incorrect! \n');
        rl.prompt();
        rl.on('line', (input) => {
            if (input == result) {
                rl.close();
            } else {
                rl.setPrompt('Try again! \n');
                rl.prompt();
            }
        });
    }
});

rl.on('close', () => {
    console.log('Correct!');
});