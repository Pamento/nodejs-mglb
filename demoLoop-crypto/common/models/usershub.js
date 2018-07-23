'use strict';

module.exports = function(Usershub) {


  Usershub.observe('before save', function(ctx, next) {
    console.log('start hook before save');
    console.log('ctx : ',ctx.instance );

    // const { URL } = require('url');  // call of URL module
    const crypto = require('crypto');    //Loading the crypto module in node.js
    const hash = crypto.createHash('RSA-SHA256');    //creating hash object

    // const myURL = new URL('http://localhost:3000/api/Users');  // recovery of URL data post
    // console.log('password : ',myURL.password);
    // console.log('password : ',myURL);

    // const pas = myURL.password;
    const salt = "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3";
    // const sal2 = "242b1620250f7f6f3d0d2d273993ffa91adf39e1f3216ad9b6b43db05ec591bb";
    // const sal3 = "242b1620250f7f6f3d0d2d273993ffa91adf39e1f3216ad9b6b43db05ec591bb";

    const data = hash.update(ctx.instance.password+salt, 'utf-8');     //passing the data to be hashed
    const gen_hash = data.digest('hex');     //Creating the hash in the required format
    ctx.instance.password = gen_hash;
    console.log("Usershub hash : " + gen_hash);    //Printing the output on the console


    console.log('ctx hash : ',ctx.instance );
    console.log('end hook before save');

    next();
  });

};
