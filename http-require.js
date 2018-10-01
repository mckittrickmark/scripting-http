var getfuncs = require('./http-functions');

function printHTML (buff) {
  console.log(buff);
}

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
}

module.exports = {printHTML: printHTML}


getfuncs.getHTML(options, printHTML)

