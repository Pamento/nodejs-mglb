'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});


// ========================================

/**
 * lines below is for crypting the data.
 * Not know yet how to to this.
 */
// console.log('ok');
    //Loading the crypto module in node.js
// var crypto = require('crypto');
//creating hash object
// var hash = crypto.createHash('RSA-SHA256');
//passing the data to be hashed
// var data = hash.update('nodejsera', 'utf-8');
//Creating the hash in the required format
// var gen_hash = data.digest('hex');
//Printing the output on the console
// console.log("hash : " + gen_hash);

// const { URL } = require('url');
// const myURL = new URL('http://localhost:3000/api/Users/login');
// console.log('password : ',myURL.password);


// var http = require('http');
// http.createServer(function(req, res) {
//   var url = req.url
//   console.log(url) //echoes https://username:password@myurl.com/
//   //do something with url
// // }).listen(3000,'127.0.0.1');

// http.createServer(function(req, res) {
//   var header = req.headers['authorization'] || '',        // get the header
//       token = header.split(/\s+/).pop()||'',            // and the encoded auth token
//       auth = new Buffer(token, 'base64').toString(),    // convert from base64
//       parts=auth.split(/:/),                          // split on colon
//       username=parts[0],
//       password=parts[1];

//   res.writeHead(200,{'Content-Type':'text/plain'});
//   res.end('username is "'+username+'" and password is "'+password+'"');

// }).listen(3000,'127.0.0.1');
