const { readFile } = require('fs');

readFile('../content/hello.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});