/**
 * 装饰器工厂 ?
 */

function color(value: string) {
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    // do something with "target" and "value"...
  };
}

export class Main {
  @color('red')
  method() {
    console.log('main');
  }
}

let m = new Main();
m.method();
