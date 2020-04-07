import { tree, someClass } from "./foo";

let foo = false; // 无法重新声明块范围变量“foo”。 foo.ts(1, 7): 'foo' was also declared here.

let tee = "teee";

tee = tree;

console.log(`tee is:`, tee);
