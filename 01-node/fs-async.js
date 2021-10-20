const { readFile, writeFile } = require('fs');

readFile('./content/hello.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const hello = result;

    readFile('./content/demo/demo.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const demo = result;

        writeFile('./content/both.txt',
            `Hey Everyone!\n${demo}\n${hello}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('File created successfully');
            });
    });
});