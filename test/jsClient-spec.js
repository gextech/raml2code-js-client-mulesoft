var test = require("raml2code-fixtures").raml2codeIntegration,
  chai = require('chai');
chai.should();

describe('Must run on raml2code', function () {

  var generator = require("../lib/js-client");

  var gatitosAPI = function(done){
    test(done, "index.raml" ,generator, {}, "javascript/fixtureApiClient.js", "v1/fixtureApiClient.js")
  };

  it('should generate a js client from RAML file', gatitosAPI );

});
