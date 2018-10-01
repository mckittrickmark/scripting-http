var HTMLfuncs = require('../http-functions')
var httpRequire = require('../http-require')

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
}

function toUp(input) {
  console.log(input.toUpperCase())
}

HTMLfuncs.getHTML(options, toUp)