/**
* @author Sok Kim Thanh
* @createdDate 28/06/2023
* @createdClass MyNode.js
* @description CTDL va giai thuat, lap trinh huong doi tuong
*/
export class MyNode {
    //fields
    /**
    * Dòng code “private _data!: KieuThamSo;” có nghĩa là khai báo một thuộc tính private có tên là _data và kiểu dữ liệu là KieuThamSo.
    * Toán tử “!” được sử dụng để báo hiệu cho TypeScript rằng giá trị của thuộc tính _data sẽ được gán giá trị sau và không phải là một lỗi.
    */
    private _data!: MonAn;
    private _next!: MyNode;

    //constructor
    constructor(data: MonAn) {
        this._data = data;
        this._next = null!;
    }

    //properties
    public get data(): MonAn {
        return this._data;
    }
    public set data(value: MonAn) {
        this._data = value;
    }

    public get next(): MyNode {
        /**
         * Dòng code “return this._next!;” có nghĩa là trả về giá trị của thuộc tính _next của đối tượng hiện tại. 
         * Toán tử “!” được sử dụng để báo hiệu cho TypeScript rằng giá trị của thuộc tính _next sẽ được gán giá trị sau và không phải là một lỗi.
         */
        return this._next!;
    }

    public set next(value: MyNode) {
        this._next = value;
    }
}
