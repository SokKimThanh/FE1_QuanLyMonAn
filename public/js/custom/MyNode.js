"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNode = void 0;
/**
 * Sok Kim Thanh
 * Date created: 28/06/2023
 * class node.js
 */
var MyNode = /** @class */ (function () {
    //constructor
    function MyNode(data) {
        this._data = data;
        this._next = null;
    }
    Object.defineProperty(MyNode.prototype, "data", {
        //properties
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyNode.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (value) {
            this._next = value;
        },
        enumerable: false,
        configurable: true
    });
    return MyNode;
}());
exports.MyNode = MyNode;
