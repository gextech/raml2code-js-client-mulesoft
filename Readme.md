# raml2code-js-client-mulesoft

[![Build Status](https://img.shields.io/travis/gextech/raml2code-js-client-mulesoft/master.svg?style=flat)](https://travis-ci.org/gextech/raml2code-js-client-mulesoft)

This generator create javascript client from a RAML file, based in
[raml-client-generator](https://github.com/mulesoft/raml-client-generator)from mulesoft.

## To try
1. Install gulp
```bash
 npm install -G gulp
```

2. install the generators you needed
```bash
 npm install --save-dev raml2code
 npm install --save-dev raml2code-js-client-mulesoft
```

3. configure the gulpfile.js
```js
var gulp = require('gulp');
var raml2code = require('raml2code');
var genJS = require("raml2code-js-client-mulesoft");

gulp.task("genJS", function(){
  gulp.src('./test/cats.raml')  
    .pipe(raml2code({generator: genJS, extra: {}}))
    .pipe(gulp.dest('build'));
});
```

4. Run the generator
```bash
  gulp genJS
```

This is part of the [raml2code](git@github.com:gextech/raml2code.git) project.