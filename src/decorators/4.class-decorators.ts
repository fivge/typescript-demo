/**
 * 类装饰器 ? sealed
 */

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';
  };
}

// @sealed
@classDecorator
class Greeter {
  property = 'property';
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

export { Greeter };

let gt = new Greeter('Tom');
// Object.seal(gt);
gt.hello = 'Cat';
// gt.hello1 = 'Cat';
delete gt.hello;
console.log(gt);

// @sealed FIXME: seal
// Greeter { property: 'property' }

// @classDecorator
// Greeter { property: 'property', newProperty: 'new property' }
