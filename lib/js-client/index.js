var camelCase, context, defaultHelpers, extend, generator, helpers, languages;

extend = require('raml-client-generator/node_modules/extend');

languages = require('raml-client-generator/languages');

context = require('raml-client-generator/lib/compile/context');

defaultHelpers = require('raml-client-generator/lib/compile/helpers');

generator = {};

generator.partials = {
  auth: require('raml-client-generator/languages/javascript/partials/auth.js.hbs'),
  utils: require('raml-client-generator/languages/javascript/partials/utils.js.hbs'),
  client: require('raml-client-generator/languages/javascript/partials/client.js.hbs'),
  resources: require('raml-client-generator/languages/javascript/partials/resources.js.hbs')
};

helpers = {
  stringify: require('raml-client-generator/node_modules/javascript-stringify'),
  dependencies: require('raml-client-generator/languages/javascript/helpers/dependencies'),
  requestSnippet: require('raml-client-generator/languages/javascript/helpers/request-snippet'),
  parametersSnippet: require('raml-client-generator/languages/javascript/helpers/parameters-snippet')
};

generator.helpers = extend({}, defaultHelpers, helpers);

generator.templates = [
  {
    '{{fileName}}Client.js': require('raml-client-generator/languages/javascript/templates/index.js.hbs')
  }, {
    'package.json': require('raml-client-generator/languages/javascript/templates/package.json.hbs')
  }, {
    'README.md': require('raml-client-generator/languages/javascript/templates/README.md.hbs')
  }
];

camelCase = require('raml-client-generator/node_modules/camel-case');

generator.parser = function(data) {
  var model, parsed, spec, version;
  parsed = [];
  spec = {
    format: {
      variable: camelCase
    }
  };
  model = context(data, spec);
  version = data.version ? "" + data.version + "/" : "";
  model.fileName = "" + version + (camelCase(model.title));
  parsed.push(model);
  return parsed;
};

module.exports = generator;
