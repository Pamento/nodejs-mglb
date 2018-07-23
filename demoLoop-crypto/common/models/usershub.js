'use strict';

module.exports = function(Usershub) {


  Usershub.observe('before save', function(ctx, next) {
    console.log('start');
    console.log('ctx : ',ctx.instance );

    const uuid = require('uuid/v1');
    console.log('uuid key : ',uuid());


    // const { URL } = require('url');  // call of URL module
    const crypto = require('crypto');    //Loading the crypto module in node.js
    const hash = crypto.createHash('RSA-SHA256');    //creating hash object

    // const myURL = new URL('http://localhost:3000/api/Users');  // recovery of URL data post
    // console.log('password : ',myURL.password);
    // console.log('password : ',myURL);
    // const pas = myURL.password;

    // const salt = "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3";
    const salt = uuid();

    const data = hash.update(ctx.instance.password+salt, 'utf-8');     //passing the data to be hashed
    const gen_hash = data.digest('hex');     //Creating the hash in the required format
    ctx.instance.password = gen_hash;
    console.log("Usershub hash : " + gen_hash);    //Printing the output on the console


    console.log('ctx hash : ',ctx.instance );
    console.log('end');

    next();
  });

};
