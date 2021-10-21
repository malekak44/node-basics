const fs = require('fs');

// Rename file
fs.rename('./content/demo/dumb.txt', './content/demo/dummy.txt', (err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('File renamed successfully.');
    }
});

// Append to file
fs.appendFile('./content/demo/demo.txt', ' Jarlsberg ricotta rubber cheese.', (err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Content appended successfully.');
    }
});

// Delete file
fs.unlink('./content/random.txt', (err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('File deleted successfully.');
    }
});

// Make directory
fs.mkdir('./content/logs', (err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Folder created successfully.');
    }
});

// Delete directory
fs.rmdir('./content/logs', (err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Folder deleted successfully.');
    }
});

// Read directory
fs.readdir('./content', 'utf8', (err, files) => {
    if (err) {
        console.log(err);
        return;
    } else {
        for (const file of files) {
            console.log(file);
        }
    }
});