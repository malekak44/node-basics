const sum = (num1, num2) => num1 + num2;
const PI = Math.PI;

class coder {
    constructor(name) {
        this.name = name;
    }

    invoke() {
        return `${this.name} is a coder.`;
    }
}

// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.coder = coder;

module.exports = { sum: sum, PI: PI, coder: coder };