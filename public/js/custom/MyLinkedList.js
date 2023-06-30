"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLinkedList = void 0;
/**
* Sok Kim Thanh
* Date created: 28/06/2023
* class MyLinkedList.js
*/
var MyNode_1 = require("./MyNode");
var MyLinkedList = /** @class */ (function () {
    // constructor
    function MyLinkedList() {
        this._first = null;
        this._last = null;
        this._size = 0;
    }
    Object.defineProperty(MyLinkedList.prototype, "first", {
        // properties
        get: function () {
            return this._first;
        },
        set: function (value) {
            this._first = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyLinkedList.prototype, "last", {
        get: function () {
            return this._last;
        },
        set: function (value) {
            this._last = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyLinkedList.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    // methods
    MyLinkedList.prototype.Show = function () {
        var p = this._first;
        while (p != null) {
            console.log(p.data.toString() + "\n");
            p = p.next;
        }
    };
    /**
     * @decription Hàm thêm một món ăn vào cuối danh sách
     * @param ma Mã món ăn
     */
    MyLinkedList.prototype.AddLast = function (ma) {
        var newNode = new MyNode_1.MyNode(ma);
        if (this.first != null) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            // [last.next]-newnode
            this.last.next = newNode;
            this.last = newNode;
        }
        // tang kich thuoc
        this.size++;
        return newNode;
    };
    /**
     * @decription Hàm thêm một món ăn vào đầu danh sách
     * @param ma Mã món ăn
     */
    MyLinkedList.prototype.AddFirst = function (ma) {
        var newNode = new MyNode_1.MyNode(ma);
        if (this.first != null) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            // newnode-[first.next]
            newNode.next = this.first;
            this.first = newNode;
        }
        // tang kich thuoc
        this.size++;
        return newNode;
    };
    /**
     * @môtả Hàm tìm node trước 1 node
     * @param node node hiện tại
     * @returns Previous node
     */
    MyLinkedList.prototype.FindPreviousNode = function (node) {
        var p = this.first;
        while (p != null) {
            if (p.next == node) {
                return p;
            }
            p = p.next;
        }
        return null;
    };
    /**
     * @môtả Hàm xóa một node cuối trong danh sách
     * @returns Trả về node xóa cuối
     */
    MyLinkedList.prototype.RemoveLast = function () {
        var temp = this.last;
        // [first.next]-newnode-[last.next]
        if (this.first == null) {
            throw new Error("First cannot be removed.");
        }
        else if (this.first == this.last) {
            this.first = null;
            this.last = null;
            this.size = 0;
        }
        else {
            var before = this.FindPreviousNode(this.last);
            before.next = null;
            this.last = before;
            this.size--;
        }
        return temp;
    };
    /**
     * @môtả Hàm xóa một node đầu trong danh sách
     * @returns Trả về node xóa đầu
     */
    MyLinkedList.prototype.RemoveFirst = function () {
        var temp = this.first;
        // [first.next]-newnode-[last.next]
        if (this.first == null) {
            throw new Error("First cannot be removed.");
        }
        else if (this.first == this.last) {
            this.first = null;
            this.last = null;
            this.size = 0;
        }
        else {
            this.first = this.first.next;
            this.size--;
        }
        return temp;
    };
    /**
     *
     * @param pre node phia truoc can xoa
     * @returns
     */
    MyLinkedList.prototype.RemoveAfter = function (pre) {
        var check = false;
        if (pre != null) {
            pre.next = pre.next.next;
            check = true;
            this.size--;
        }
        else {
            this.first = null;
            this.last = null;
            this.size = 0;
        }
        return check;
    };
    /**
     * @môtả Hàm xóa một node bất kỳ trong danh sách
     */
    MyLinkedList.prototype.Remove = function (del) {
        var check = false;
        if (del == this.first) {
            this.RemoveFirst();
        }
        else if (del == this.last) {
            this.RemoveLast();
        }
        else {
            var beforeNode = this.FindPreviousNode(del);
            check = this.RemoveAfter(beforeNode);
        }
        return check;
    };
    MyLinkedList.prototype.Swap = function (nodeA, nodeB) {
        var temp = nodeA.data;
        nodeA.data = nodeB.data;
        nodeB.data = temp;
    };
    MyLinkedList.prototype.InterchangeSortDonGia = function () {
        for (var p = this.first; p != null; p = p.next) {
            for (var q = p.next; q != null; q = q.next) {
                if (p.data.CompareToDonGia(q.data) > 0) {
                    this.Swap(p, q);
                }
            }
        }
    };
    MyLinkedList.prototype.InterchangeSortMaMonAn = function () {
        for (var p = this.first; p != null; p = p.next) {
            for (var q = p.next; q != null; q = q.next) {
                if (p.data.CompareToMaMonAn(q.data) > 0) {
                    this.Swap(p, q);
                }
            }
        }
    };
    MyLinkedList.prototype.FindFirstNode = function (maMonAn) {
        var p = this._first;
        while (p != null) {
            if (p.data.maMonAn.toLocaleLowerCase().localeCompare(maMonAn) === 0) {
                return p;
            }
            p = p.next;
        }
        return null;
    };
    MyLinkedList.prototype.FindMaxNode = function () {
        var p = this._first;
        var maxNode = p;
        while (p != null) {
            var max = p.data.donGia;
            if (max < p.next.data.donGia) {
                max = p.next.data.donGia;
                maxNode = p;
            }
            p = p.next;
        }
        return maxNode;
    };
    return MyLinkedList;
}());
exports.MyLinkedList = MyLinkedList;
