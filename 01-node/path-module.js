const path = require('path');

const seperator = path.sep;
const filePath = path.join('/content/', 'demo', 'demo.txt');
const dirname = path.dirname(filePath);
const extname = path.extname(filePath);
const basename = path.basename(filePath);
const parsedPath = path.parse(filePath);
const absolutePath = path.resolve(__dirname, 'content', 'demo', 'demo.txt');
const normalizePath = path.normalize(filePath);
const isAbsolutePath = path.isAbsolute(absolutePath);
const relativePath = path.relative('/content/demo', filePath);

console.log(seperator, dirname, extname, basename, parsedPath, absolutePath, normalizePath, isAbsolutePath, relativePath);