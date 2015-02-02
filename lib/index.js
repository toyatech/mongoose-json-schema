var util = require('util')
  , mongoose = require('mongoose');

function JSONSchema() {
  mongoose.Schema.apply(this, arguments);
}
util.inherits(JSONSchema, mongoose.Schema);

module.exports = exports = JSONSchema;
