var assert = require('assert')
  , mongoose = require('mongoose')
  , Mongoose = mongoose.Mongoose
  , JSONSchema = require('../');

describe('JSONSchema:', function() {
  it('test connection works', function(){
    var goose = new Mongoose
      , uri = 'mongodb://localhost/mongoose_json_schema_test';

    goose.connect(process.env.MONGOOSE_JSON_SCHEMA_TEST_URI || uri);

    goose.connection.on('open', function() {
      db.close(function() {
        done();
      });
    });
  });
  it('works like reqular Schema', function(){
    var goose = new Mongoose
      , uri = 'mongodb://localhost/mongoose_json_schema_test';

    goose.connect(process.env.MONGOOSE_JSON_SCHEMA_TEST_URI || uri);

    var ProgramSchema = new JSONSchema({
      type: { type: String, match: /^Program$/ }
    });
    var Program = mongoose.model('Program', ProgramSchema);
    var program = new Program({ type: 'Program' });
    program.save(function(err) {
      assert.ifError(err);
      console.log(program);
      done();
    });

  });
});
