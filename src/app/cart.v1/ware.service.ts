// 商品服务类
export class WareService {
  private _stock: number = 10; // 库存

  get stock(): number {
    return this._stock;
  }

  decreaseStock(): void {
    this._stock--;
  }
}
