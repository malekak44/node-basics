// In CommonJS every file is a module;
// Encapsulated code (only share minimum);

const utils = require('./utils');

const steve = new utils.Learner(utils.steve);
steve.call();