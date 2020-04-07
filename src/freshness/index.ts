/**
 * Freshness
 *
 * 为了能让检查对象字面量类型更容易，TypeScript 提供 「Freshness」 的概念
 * （它也被称为更严格的对象字面量检查）用来确保对象字面量在结构上类型兼容。
 */
//#region params types
/**  */
function logName(something: { name: string }) {
  console.log(something.name);
}

const job = { name: "matt", job: "being awesome" };

logName({ name: "matt" }); // ok
// logName({ name: "matt", job: "being awesome" }); // Error: 对象字面量只能指定已知属性，`job` 属性在这里并不存在。
logName(job); // Error: 对象字面量只能指定已知属性，`job` 属性在这里并不存在。

//#endregion

//#region interface

interface IUser {
  name: string;
}

interface IMoreUser {
  name: string;
  [x: string]: any;
}

const tom = { name: "matt", job: "being awesome" };
// const cat: IUser = { name: "matt", job: "being awesome" };
const bob: IUser = tom;

const moreCat: IMoreUser = { name: "matt", job: false, age: 18 };

//#endregion

//#region function

function moreCats(name: string, ...x: any) {}

//#endregion

//#region usage

let x: { foo: number; [x: string]: any };

x = { foo: 1, baz: 2, a: "xx" }; // ok, 'baz' 属性匹配于索引签名

// 假设
// interface State {
//   foo: string;
//   bar: string;
// }

function setState(state: State) {}

// 你可能想做：
this.setState({ foo: "Hello" }); // Error: 没有属性 'bar'

// 因为 state 包含 'foo' 与 'bar'，TypeScript 会强制你这么做：
this.setState({ foo: "Hello", bar: this.state.bar });

// // 假设
// interface State {
//   foo?: string;
//   bar?: string;
// }

// 你可能想做
this.setState({ foo: "Hello" }); // Yay works fine!

// 由于 Freshness，你也可以防止错别字
this.setState({ foos: "Hello" }); // Error: 对象只能指定已知属性

// 仍然会有类型检查
// this.setState({ foo: 123 }); // Error: 无法将 number 类型赋值给 string 类型

// 假设
interface State {
  foo?: string;
  bar?: string;
  [x: string]: any;
}
//#endregion
