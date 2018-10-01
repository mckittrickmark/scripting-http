var https = require('https');

function getHTML (requestOptions, callback) {
  var buff = ""

  https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    //console.log('Chunk Received. Length:', data.length);
    buff += data
    //console.log(data.toString(), "\n");
    });


  response.on('end', function() {
    callback(buff)
  })

  });

};



//getHTML(requestOptions, printHTML)

module.exports = { getHTML: getHTML};
