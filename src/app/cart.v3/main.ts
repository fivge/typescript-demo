import { WareComponent } from './ware.component';
import { DependencyInjector } from './dependency-injector.class';
import { WareService } from './ware.service';
import { CartService } from './cart.service';

// 通过reflect-metadata中的Reflect为WareComponent定义名为design:paramtypes
// 、值为[WareService, CartService]的元数据
// Reflect.defineMetadata('design:paramtypes', [WareService, CartService], WareComponent);

// 通过依赖注入器获取商品组件实例，并调用其addToCart()方法
let wareComponent = DependencyInjector.getService(WareComponent);
wareComponent.addToCart();
wareComponent.addToCart();

// this.wareService.decreaseStock();
//                  ^
// TypeError: Cannot read property 'decreaseStock' of undefined
