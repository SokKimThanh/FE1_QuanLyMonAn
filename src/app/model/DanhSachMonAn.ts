/**
* @author Sok Kim Thanh
* @createdDate 28/06/2023
* @createdClass DanhSachMonAn.js
* @description CTDL va giai thuat, lap trinh huong doi tuong
*/


import { MonAn } from "./MonAn";
import { MyLinkedList } from "./MyLinkedList";
export class DanhSachMonAn {
    // fields
    private data: MyLinkedList;
    // constructor
    constructor() {
        this.data = new MyLinkedList();
    }
    //properties
    public get Data(): MyLinkedList {
        return this.data;
    }
    public set Data(value: MyLinkedList) {
        this.data = value;
    }
    // methods
    /**
     * 
     * @param ma ma mon an
     * @param luaChon lua chon 1: addlast 2: addfirst
     */
    public Add(luaChon: number): void {

        switch (luaChon) {
            case 1:
                let ma: MonAn = new MonAn();
                ma.Nhap();
                this.data.AddLast(ma);
                break;
            case 2:
                let ma2: MonAn = new MonAn();
                ma2.Nhap();
                this.data.AddFirst(ma2);
                break;
            default:
                break;
        }
    }
}