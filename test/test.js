var assert = require('assert')
  , mongoose = require('mongoose')
  , Mongoose = mongoose.Mongoose
  , JSONSchema = require('../');

describe('JSONSchema:', function() {
  it('test connection works', function(){
    var goose = new Mongoose
      , db = goose.collection
      , uri = 'mongodb://localhost/mongoose_json_schema_test';

    goose.connect(process.env.MONGOOSE_JSON_SCHEMA_TEST_URI || uri);

    db.on('open', function() {
      db.close(function() {
        done();
      });
    });
  });
});
