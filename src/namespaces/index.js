let something = { a: 9 };

// (function(something) {
//   something.foo = 123;
// })(something || (something = {}));

// console.log(something);
// // { foo: 123 }

// (function(something) {
//   something.bar = 456;
// })(something || (something = {}));
something.foo = 123;
console.log(something); // { foo: 123, bar: 456 }
