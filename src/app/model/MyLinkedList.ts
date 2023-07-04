/**
* @author Sok Kim Thanh
* @createdDate 28/06/2023
* @createdClass MyLinkedList.js
* @description CTDL va giai thuat, lap trinh huong doi tuong
*/
import { MyNode } from "./MyNode";

export class MyLinkedList {
  // fields
  private _first: MyNode;
  private _last: MyNode;
  private _size: number;

  // properties
  public get first(): MyNode {
    return this._first;
  }
  private set first(value: MyNode) {
    this._first = value;
  }

  public get last(): MyNode {
    return this._last;
  }
  private set last(value: MyNode) {
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
    let p: MyNode = this._first;
    while (p != null) {
      console.log(p.data.toString() + "\n");
      p = p.next!;
    }
  }
  /**
   * @decription Hàm thêm một món ăn vào cuối danh sách
   * @param ma Mã món ăn
   */
  public AddLast(ma: MonAn): MyNode {
    let newNode: MyNode = new MyNode(ma);
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
  public AddFirst(ma: MonAn): MyNode {
    let newNode: MyNode = new MyNode(ma);
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
  public FindPreviousNode(node: MyNode): MyNode {
    let p = this.first;
    while (p != null) {
      if (p.next == node) {
        return p;
      }
      p = p.next!;
    }
    return null!;
  }
  /**
   * @môtả Hàm xóa một node cuối trong danh sách
   * @returns Trả về node xóa cuối
   */
  public RemoveLast(): MyNode {
    let temp: MyNode = this.last;
    // [first.next]-newnode-[last.next]
    if (this.first == null) {
      throw new Error("First cannot be removed.");
    } else if (this.first == this.last) {
      this.first = null!;
      this.last = null!;
      this.size = 0;
    } else {
      let before: MyNode = this.FindPreviousNode(this.last);
      before.next = null!;
      this.last = before;
      this.size--;
    }
    return temp;
  }
  /**
   * @môtả Hàm xóa một node đầu trong danh sách
   * @returns Trả về node xóa đầu
   */
  public RemoveFirst(): MyNode {
    let temp: MyNode = this.first;
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
  public RemoveAfter(pre: MyNode): boolean {
    let check: boolean = false;
    if (pre != null) {
      pre.next = pre.next!.next!;
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
  public Remove(del: MyNode): boolean {
    let check: boolean = false;
    if (del == this.first) {
      this.RemoveFirst();
    } else if (del == this.last) {
      this.RemoveLast();
    } else {
      let beforeNode: MyNode = this.FindPreviousNode(del);
      check = this.RemoveAfter(beforeNode);
    }
    return check;
  }
  public Swap(nodeA: MyNode, nodeB: MyNode): void {
    let temp: MonAn = nodeA.data;
    nodeA.data = nodeB.data;
    nodeB.data = temp;
  }
  public InterchangeSortDonGia(): void {
    for (let p: MyNode = this.first; p != null; p = p.next!) {
      for (let q: MyNode = p.next!; q != null; q = q.next!) {
        if (p.data.CompareToDonGia(q.data) > 0) {
          this.Swap(p, q);
        }
      }
    }
  }
  public InterchangeSortMaMonAn(): void {
    for (let p: MyNode = this.first; p != null; p = p.next!) {
      for (let q: MyNode = p.next!; q != null; q = q.next!) {
        if (p.data.CompareToMaMonAn(q.data) > 0) {
          this.Swap(p, q);
        }
      }
    }
  }
  public FindFirstNode(maMonAn: string): MyNode {
    let p: MyNode = this._first;
    while (p != null) {
      if (p.data.maMonAn.toLocaleLowerCase().localeCompare(maMonAn) === 0) {
        return p;
      }
      p = p.next!;
    }
    return null!;
  }
  public FindMaxNode(): MyNode {
    let p: MyNode = this._first;
    let maxNode: MyNode = p;
    while (p != null) {
      let max: number = p.data.donGia;
      if (max < p.next!.data.donGia) {
        max = p.next!.data.donGia;
        maxNode = p;
      }
      p = p.next!;
    }
    return maxNode;
  }
}
