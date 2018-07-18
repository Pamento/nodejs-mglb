'use strict';

// module.exports = function(Usershub) {


//   Usershub.observe('before save', async function() {
//     console.log('start hook before save');


//     const { URL } = require('url');
//     const crypto = require('crypto');    //Loading the crypto module in node.js
//     const hash = crypto.createHash('RSA-SHA256');    //creating hash object

//     const myURL = new URL('http://localhost:3000/api/Users');
//     console.log('password : ',myURL.password);
//     console.log('password : ',myURL);

//     const pas = myURL.password;


//     const data = hash.update(pas, 'utf-8');     //passing the data to be hashed
//     const gen_hash = data.digest('hex');     //Creating the hash in the required format
//     console.log("Usershub hash : " + gen_hash);    //Printing the output on the console



//     console.log('end hook before save');
//     return;
//   });

// };

module.exports = function(Usershub) {
  Usershub.beforeRemote('create', function(context, user, next) {
    console.log('start hook before save');


    const { URL } = require('url');
    const crypto = require('crypto');    //Loading the crypto module in node.js
    const hash = crypto.createHash('RSA-SHA256');    //creating hash object

    const myURL = new URL('http://localhost:3000/api/Users');
    console.log('password : ',myURL.password);
    console.log('password : ',myURL);

    const pas = myURL.password;


    const data = hash.update(pas, 'utf-8');     //passing the data to be hashed
    const gen_hash = data.digest('hex');     //Creating the hash in the required format
    console.log("Usershub hash : " + gen_hash);    //Printing the output on the console



    console.log('end hook before save');

    next();
  });
};
