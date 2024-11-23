// eslint-disable-next-line @typescript-eslint/no-var-requires
// const http = require('http');
// console.log(http);

(async () => {
    const http = await import('http');
    console.log(http);
})();
