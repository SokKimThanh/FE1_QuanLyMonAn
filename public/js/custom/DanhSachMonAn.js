"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DanhSachMonAn = void 0;
/**
 * Sok Kim Thanh
 * Date created: 28/06/2023
 * CTDL va giai thuat, lap trinh huong doi tuong
 * class DanhSachMonAn.js
 */
var MyLinkedList_1 = require("./MyLinkedList");
var DanhSachMonAn = /** @class */ (function () {
    // constructor
    function DanhSachMonAn() {
        this.data = new MyLinkedList_1.MyLinkedList();
    }
    Object.defineProperty(DanhSachMonAn.prototype, "Data", {
        //properties
        get: function () {
            return this.data;
        },
        set: function (value) {
            this.data = value;
        },
        enumerable: false,
        configurable: true
    });
    // methods
    /**
     *
     * @param ma ma mon an
     * @param luaChon lua chon 1: addlast 2: addfirst
     */
    DanhSachMonAn.prototype.Add = function (luaChon) {
        switch (luaChon) {
            case 1:
                var ma = new MonAn();
                ma.Nhap();
                this.data.AddLast(ma);
                break;
            case 2:
                var ma2 = new MonAn();
                ma.Nhap();
                this.data.AddFirst(ma);
                break;
            default:
                break;
        }
    };
    return DanhSachMonAn;
}());
exports.DanhSachMonAn = DanhSachMonAn;
