//maximum of 3 numbers
let a = 10;
let b = 20;
let c = 30;
let max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
console.log(max)