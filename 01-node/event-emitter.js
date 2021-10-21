const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('response', (name, age) => {
    console.log(`Data obtained from ${age}-year-old user ${name}.`);
});

myEmitter.on('response', () => {
    console.log('Another data received.');
});

myEmitter.emit('response', 'Steve', 30);

// Using Class
class Coder extends EventEmitter {
    constructor(name, type) {
        super();
        this.name = name;
        this.type = type;
    }
}

const kyle = new Coder('Kyle Cook', 'web');

kyle.on('call', () => {
    console.log(`${kyle.name} is a ${kyle.type} developer.`);
});

kyle.emit('call');