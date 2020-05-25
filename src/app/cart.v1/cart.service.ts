// 购物车服务类
export class CartService {
  private _wareCount: number = 0; // 购物车商品数量

  get wareCount(): number {
    return this._wareCount;
  }

  increaseWareCount(): void {
    this._wareCount++;
  }
}
