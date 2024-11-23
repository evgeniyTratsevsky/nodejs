// eslint-disable-next-line @typescript-eslint/no-var-requires
// const moduleA = require('./moduleA');
// console.log(moduleA);

module.exports = {
    bModule() {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const moduleA = require('./moduleA');
        console.log(moduleA);
        console.log('export module B');
    }
};
