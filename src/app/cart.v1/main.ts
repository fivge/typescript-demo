import { WareService } from './ware.service';
import { CartService } from './cart.service';
import { WareComponent } from './ware.component';

// 创建商品服务、购物车服务和商品组件
let wareService = new WareService();
let cartService = new CartService();
let wareComponent = new WareComponent(wareService, cartService);

// 调用商品组件的addToCart()方法，以添加商品到购物车中
wareComponent.addToCart();
wareComponent.addToCart();

// 已成功添加商品到购物车，目前商品库存：9；购物车商品数量：1。
// 已成功添加商品到购物车，目前商品库存：8；购物车商品数量：2。
