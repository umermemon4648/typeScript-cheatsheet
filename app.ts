type mathOperand = (x: number, y: number) => number

const add: mathOperand = (x,y) => x+y
const subtract: mathOperand = (x,y)=> x-y
const x = 8;
const y = 3;

console.log(`Addition of ${x} and ${y}: `, add(x, y));
console.log(`Difference of ${x} and ${y}: `,subtract(x,y))