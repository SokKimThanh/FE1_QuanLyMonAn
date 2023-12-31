/**
 * @author Sok Kim Thanh
 * @createDate 01/07/2023
 * @createClass MyNodeGeneric.ts
 * @description Lập trình tổng quát generic
 */
export class MyNodeGeneric<KieuThamSo> {
  private _data!: KieuThamSo;
  private _next!: MyNodeGeneric<KieuThamSo>;

  public get data(): KieuThamSo {
    return this._data;
  }
  public set data(value: KieuThamSo) {
    this._data = value;
  }
  public get next(): MyNodeGeneric<KieuThamSo> {
    return this._next;
  }
  public set next(value: MyNodeGeneric<KieuThamSo>) {
    this._next = value!;
  }
  constructor(data: KieuThamSo) {
    this.data = data;
    this.next = null!;
  }
}
