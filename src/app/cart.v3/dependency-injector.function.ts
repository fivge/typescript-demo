// 类装饰器，其本质是函数
export function Injectable(constructor: new (...args: any[]) => void): void {}
