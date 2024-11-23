// eslint-disable-next-line @typescript-eslint/no-var-requires
const dayjs = require("dayjs");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageA = require("packages/package-a");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageB = require("packages/package-b");

console.log(`Today's date: ${dayjs().format()}`);
console.log(`From package a: ${packageA.getMessage()}`);
console.log(`From package b: ${packageB.getMessage()}`);
