// type assertions
let message:any;
message = 'abc';
let t1 = (<string>message).endsWith('c'); // es6 method
console.log(t1);
let t2 = (message as string).endsWith('c');