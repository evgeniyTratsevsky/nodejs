// eslint-disable-next-line @typescript-eslint/no-var-requires
const moduleB = require('./moduleB');
// console.log(moduleB.bModule);

setTimeout(() => {
    console.log(moduleB.bModule);
});

module.exports = {
    aModule() {
        console.log('export module A');
    }
};
