// https://jkchao.github.io/typescript-book-chinese/typings/generices.html#%E6%B3%9B%E5%9E%8B

// 创建一个泛型类
class Queue<T> {
  private data: T[] = [];
  push = (item: T) => this.data.push(item);
  pop = (): T | undefined => this.data.shift();
}

// 简单的使用
const queue = new Queue<number | string>();
queue.push(0);
// queue.push(false); // Error
queue.push("1");

console.log(`queue`, queue);
