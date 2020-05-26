/**
 * 获取类型信息
 */

import 'reflect-metadata';

function Prop(): PropertyDecorator {
  return (target, key: string) => {
    // 属性类型
    const type = Reflect.getMetadata('design:type', target, key);
    // 函数参数类型
    const paramtypes = Reflect.getMetadata('design:paramtypes', target, key);
    // 返回值类型
    const returntype = Reflect.getMetadata('design:returntype', target, key);
    console.log(`${key} type: ${type.name}`, returntype?.name);
    paramtypes?.forEach(element => {
      console.log(`${key} paramtype: ${element.name}`);
    });
  };
}

class SomeClass {
  @Prop()
  public Aprop!: string;

  @Prop()
  getName(id: number, code: string): string {
    return 'xxx';
  }
}
