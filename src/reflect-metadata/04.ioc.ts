/**
 * 控制反转和依赖注入
 *
 * IoC - Inversion of Control
 * DI
 */

import 'reflect-metadata';

type Constructor<T = any> = new (...args: any[]) => T;

const Injectable = (): ClassDecorator => target => {};

class OtherService {
  a = 1;
}

@Injectable()
class TestService {
  constructor(public readonly otherService: OtherService) {}

  testMethod() {
    this.otherService.a = 1024;
  }
}

@Injectable()
class ReadService {
  constructor(public readonly otherService: OtherService) {}

  testMethod() {
    console.log(this.otherService.a);
  }
}

const Factory = <T>(target: Constructor<T>): T => {
  // 获取所有注入的服务
  const providers = Reflect.getMetadata('design:paramtypes', target); // [OtherService]
  const args = providers.map((provider: Constructor) => new provider());
  return new target(...args);
};

Factory(ReadService).testMethod(); // 1
Factory(TestService).testMethod(); // 1
Factory(ReadService).testMethod(); // 1
