var https = require('https');

var args = process.argv.slice(2)

    //host: 'sytantris.github.io',
    //path: '/http-examples/step1.html'
  var requestOptions = {
    host: args[0]
    path: args[1]
  };

function getAndPrintHTMLChunks (options) {
  var buff = ""


  https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  response.on('data', function (data) {
    //console.log('Chunk Received. Length:', data.length);
    buff += data
    //console.log(data.toString(), "\n");
    });


  response.on('end', function() {
    console.log(buff)
  })

  });

};

getAndPrintHTMLChunks(requestOptions)