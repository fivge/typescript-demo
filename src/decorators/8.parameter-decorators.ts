/**
 * 参数装饰器 ?
 */

import 'reflect-metadata';

const requiredMetadataKey = Symbol('required');
/**
 * `required`装饰器添加了元数据实体把参数标记为必需的
 * @param target
 * @param propertyKey
 * @param parameterIndex
 */
function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

/**
 * `validate`装饰器把`greet`方法包裹在一个函数里在调用原先的函数前验证函数参数
 * @param target
 * @param propertyName
 * @param descriptor
 */
function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  let method = descriptor.value;
  descriptor.value = function () {
    let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
    if (requiredParameters) {
      for (let parameterIndex of requiredParameters) {
        if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
          throw new Error('Missing required argument.');
        }
      }
    }

    return method.apply(this, arguments);
  };
}

export class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  @validate
  greet(
    @required
    name?: string
  ) {
    return 'Hello ' + name + ', ' + this.greeting;
  }
}

let g = new Greeter('Cat');
console.log(g.greet('kit'));
// Hello kit, Cat
// console.log(g.greet());
// throw new Error('Missing required argument.');
