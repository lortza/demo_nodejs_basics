var _ = require('lodash');
var salutations = require('./lib/salutations');
var logger = require('./lib/logger');

console.log(salutations);
console.log();

_.each(salutations, function(salutation) {
  logger.log(salutation);
});










