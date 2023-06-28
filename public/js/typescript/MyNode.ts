/**
 * Sok Kim Thanh
 * Date created: 28/06/2023
 * class node.js
 */
export class MyNode {
    //fields
    private _data: MonAn;
    private _next: MyNode | null;

    //constructor
    constructor(data: MonAn) {
        this._data = data;
        this._next = null;
    }

    //properties
    public get data(): MonAn {
        return this._data;
    }
    public set data(value: MonAn) {
        this._data = value;
    }

    public get next(): MyNode {
        return this._next;
    }
    
    public set next(value: MyNode) {
        this._next = value;
    }
}
