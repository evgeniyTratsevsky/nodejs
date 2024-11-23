import {setTimeout} from "timers/promises";

console.log('timeout start');

// with Promise; в commonJS так не работает!!!
// можно подключать разные async-ресурсы
await setTimeout(1000);
console.log('timeout end');

export default 'async';
