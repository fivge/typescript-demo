import { WareComponent } from './ware.component';
import { Injectable } from './dependency-injector.function';
import { DependencyInjector } from './dependency-injector.class';

// 定义并装饰Index类
@Injectable
class Index {
  // 构造依赖于WareComponent实例的Index实例
  constructor(private wareComponent: WareComponent) {}

  // 运行以调用WareComponent实例的addToCart()方法
  run(): void {
    this.wareComponent.addToCart();
  }
}

// 通过依赖注入器获取Index实例，并调用它的run()方法
let index = DependencyInjector.getService(Index);
index.run();

// this.wareService.decreaseStock();
//                  ^
// TypeError: Cannot read property 'decreaseStock' of undefined
