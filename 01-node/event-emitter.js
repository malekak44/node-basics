const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('response', (name, age) => {
    console.log(`Data obtained from ${age}-year-old user ${name}.`);
});

myEmitter.on('response', () => {
    console.log('Another data received.');
});

myEmitter.emit('response', 'Steve', 30);