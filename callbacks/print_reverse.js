var HTMLfuncs = require('../http-functions')
var httpRequire = require('../http-require')

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
}

function toReverse(input) {
  console.log(input.split("").reverse().join(""))
}

HTMLfuncs.getHTML(options, toReverse)