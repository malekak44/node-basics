const path = require('path');

const seperator = path.sep;
const filePath = path.join('/content/', 'demo', 'demo.txt');
const basename = path.basename(filePath);
const absolutePath = path.resolve(__dirname, 'content', 'demo', 'demo.txt');

console.log(seperator, basename, absolutePath);