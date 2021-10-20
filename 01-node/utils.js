const elon = 'elon';
const steve = 'steve';

class Student {
    constructor(name) {
        this.name = name;
    }
    call() {
        return `${(this.name + ' is a student.').toUpperCase()}`;
    }
}

const add = (num1, num2) => {
    console.log(num1 + num2);
}

add(30, 30);

// module.exports = steve;
module.exports = { elon, steve };
module.exports.Learner = Student;
module.exports.fruits = ['lemon', 'orange'];