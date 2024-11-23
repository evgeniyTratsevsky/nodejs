'use strict';

// NodeJS 20: doesn't work or work threw the *import*
// NodeJS 22: work with flag *--experimental-require-module*
// NodeJS 23: work without flag


// NodeJS >=22 + flag impl or 23
// console.log(require('./hello.mjs').print);

// const helloMJS = require('./hello.mjs');


// NodeJS 20 impl
(async () => {
    // Work
    const helloMJS = await import('./hello.mjs');
    // Doesn't work
    // const helloMJS = require('./hello.mjs');
    console.log(helloMJS);
})();
