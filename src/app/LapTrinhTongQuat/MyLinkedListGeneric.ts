/**
 * @author Sok Kim Thanh
 * @createdDate 01/07/2023
 * @createdClass MyLinkedListGeneric.js
 * @description Lập trình tổng quát generic
 */
import { MyNodeGeneric } from "./MyNodeGeneric";
export class MyLinkedList<ThamSoKieu> {
  // fields
  private _first: MyNodeGeneric<ThamSoKieu>;
  private _last: MyNodeGeneric<ThamSoKieu>;
  private _size: number;

  // properties
  public get first(): MyNodeGeneric<ThamSoKieu> {
    return this._first;
  }
  private set first(value: MyNodeGeneric<ThamSoKieu>) {
    this._first = value;
  }

  public get last(): MyNodeGeneric<ThamSoKieu> {
    return this._last;
  }
  private set last(value: MyNodeGeneric<ThamSoKieu>) {
    this._last = value;
  }

  public get size(): number {
    return this._size;
  }
  public set size(value: number) {
    this._size = value;
  }

  // constructor
  constructor() {
    this._first = null!;
    this._last = null!;
    this._size = 0;
  }

  // methods
  public Show(): void {
    let p: MyNodeGeneric<ThamSoKieu> = this._first;
    while (p != null) {
      console.log(p.data!.toString() + "\n");
      p = p.next!;
    }
  }
  /**
   * @decription Hàm thêm một món ăn vào cuối danh sách
   * @param ma Mã món ăn
   */
  public AddLast(ma: ThamSoKieu): MyNodeGeneric<ThamSoKieu> {
    let newNode: MyNodeGeneric<ThamSoKieu> = new MyNodeGeneric(ma);
    if (this.first != null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // [last.next]-newnode
      this.last.next = newNode;
      this.last = newNode;
    }
    // tang kich thuoc
    this.size++;
    return newNode;
  }
  /**
   * @decription Hàm thêm một món ăn vào đầu danh sách
   * @param ma Mã món ăn
   */
  public AddFirst(ma: ThamSoKieu): MyNodeGeneric<ThamSoKieu> {
    let newNode: MyNodeGeneric<ThamSoKieu> = new MyNodeGeneric<ThamSoKieu>(ma);
    if (this.first != null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // newnode-[first.next]
      newNode.next = this.first;
      this.first = newNode;
    }
    // tang kich thuoc
    this.size++;
    return newNode;
  }
  /**
   * @môtả Hàm tìm node trước 1 node
   * @param node node hiện tại
   * @returns Previous node
   */
  public FindPreviousNode(node: MyNodeGeneric<ThamSoKieu>): MyNodeGeneric<ThamSoKieu> | null {
    let p = this.first;
    while (p != null) {
      if (p.next == node) {
        return p;
      }
      p = p.next!;
    }
    return null;
  }
  /**
   * @môtả Hàm xóa một node cuối trong danh sách
   * @returns Trả về node xóa cuối
   */
  public RemoveLast(): MyNodeGeneric<ThamSoKieu> {
    let temp: MyNodeGeneric<ThamSoKieu> = this.last;
    // [first.next]-newnode-[last.next]
    if (this.first == null) {
      throw new Error("First cannot be removed.");
    } else if (this.first == this.last) {
      /** Dòng code “this.first = null!;” 
       * có nghĩa là gán giá trị null cho thuộc tính first của đối tượng hiện tại. 
       * Toán tử “!” được sử dụng để báo hiệu cho TypeScript rằng giá trị null 
       * được gán cho thuộc tính first một cách cố ý và không phải là một lỗi 
       * */
      this.first = null!;
      this.last = null!;
      this.size = 0;
    } else {
      let before: MyNodeGeneric<ThamSoKieu> = this.FindPreviousNode(this.last)!;
      before.next = null;
      this.last = before;
      this.size--;
    }
    return temp;
  }
  /**
   * @môtả Hàm xóa một node đầu trong danh sách
   * @returns Trả về node xóa đầu
   */
  public RemoveFirst(): MyNodeGeneric<ThamSoKieu> {
    let temp: MyNodeGeneric<ThamSoKieu> = this.first;
    // [first.next]-newnode-[last.next]
    if (this.first == null) {
      throw new Error("First cannot be removed.");
    } else if (this.first == this.last) {
      this.first = null!;
      this.last = null!;
      this.size = 0;
    } else {
      this.first = this.first.next!;
      this.size--;
    }
    return temp;
  }
  /**
   *
   * @param pre node phia truoc can xoa
   * @returns
   */
  public RemoveAfter(pre: MyNodeGeneric<ThamSoKieu>): boolean {
    let check: boolean = false;
    if (pre != null) {
      pre.next = pre.next!.next;
      check = true;
      this.size--;
    } else {
      this.first = null!;
      this.last = null!;
      this.size = 0;
    }
    return check;
  }
  /**
   * @môtả Hàm xóa một node bất kỳ trong danh sách
   */
  public Remove(del: MyNodeGeneric<ThamSoKieu>): boolean {
    let check: boolean = false;
    if (del == this.first) {
      this.RemoveFirst();
    } else if (del == this.last) {
      this.RemoveLast();
    } else {
      let beforeNode: MyNodeGeneric<ThamSoKieu> = this.FindPreviousNode(del)!;
      check = this.RemoveAfter(beforeNode);
    }
    return check;
  }
  public Swap(nodeA: MyNodeGeneric<ThamSoKieu>, nodeB: MyNodeGeneric<ThamSoKieu>): void {
    let temp: ThamSoKieu = nodeA.data;
    nodeA.data = nodeB.data;
    nodeB.data = temp;
  }
  public InterchangeSortDonGia(): void {
    for (let p: MyNodeGeneric<ThamSoKieu> = this.first; p != null; p = p.next!) {
      for (let q: MyNodeGeneric<ThamSoKieu> = p.next!; q != null; q = q.next!) {
        if (p.data < q.data) {
          this.Swap(p, q);
        }
      }
    }
  }
  public InterchangeSortMaMonAn(): void {
    for (let p: MyNodeGeneric<ThamSoKieu> = this.first; p != null; p = p.next!) {
      for (let q: MyNodeGeneric<ThamSoKieu> = p.next!; q != null; q = q.next!) {
        if (p.data > q.data) {
          this.Swap(p, q);
        }
      }
    }
  }
  public FindFirstNode(data: ThamSoKieu): MyNodeGeneric<ThamSoKieu> {
    let node: MyNodeGeneric<ThamSoKieu> = this._first;
    while (node != null) {
      if (node.data == data) {
        return node;
      }
      node = node.next!;
    }
    return null!;
  }
  public FindMaxNode(): MyNodeGeneric<ThamSoKieu> {
    let p: MyNodeGeneric<ThamSoKieu> = this._first;
    let maxNode: MyNodeGeneric<ThamSoKieu> = p;
    while (p != null) {
      let max: ThamSoKieu = p.data;
      if (max < p.next!.data) {
        max = p.next!.data;
        maxNode = p;
      }
      p = p.next!;
    }
    return maxNode;
  }
}
