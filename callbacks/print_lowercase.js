var HTMLfuncs = require('../http-functions')
var httpRequire = require('../http-require')

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
}

function toLow(input) {
  console.log(input.toLowerCase())
}

HTMLfuncs.getHTML(options, toLow)