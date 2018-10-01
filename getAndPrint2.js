var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
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