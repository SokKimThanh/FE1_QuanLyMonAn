/**
 * Sok Kim Thanh
 * Date created: 28/06/2023
 * CTDL va giai thuat, lap trinh huong doi tuong
 * class MonAn.js
 */
var MonAn = /** @class */ (function () {
    // constructor 
    function MonAn(_maMonAn, _tenMonAn, _donGia, _soLuong) {
        if (_maMonAn === void 0) { _maMonAn = ""; }
        if (_tenMonAn === void 0) { _tenMonAn = ""; }
        if (_donGia === void 0) { _donGia = 0; }
        if (_soLuong === void 0) { _soLuong = 0; }
        this._maMonAn = _maMonAn;
        this._tenMonAn = _tenMonAn;
        this._donGia = _donGia;
        this._soLuong = _soLuong;
    }
    Object.defineProperty(MonAn.prototype, "maMonAn", {
        // properties
        get: function () {
            return this._maMonAn;
        },
        set: function (value) {
            this._maMonAn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonAn.prototype, "tenMonAn", {
        get: function () {
            return this._tenMonAn;
        },
        set: function (value) {
            this._tenMonAn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonAn.prototype, "donGia", {
        get: function () {
            return this._donGia;
        },
        set: function (value) {
            this._donGia = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonAn.prototype, "soLuong", {
        get: function () {
            return this._soLuong;
        },
        set: function (value) {
            this._soLuong = value;
        },
        enumerable: false,
        configurable: true
    });
    MonAn.prototype.getRndInteger = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    MonAn.prototype.CompareToMaMonAn = function (other) {
        return this._maMonAn.toLocaleLowerCase().localeCompare(other._maMonAn.toLocaleLowerCase());
    };
    MonAn.prototype.CompareToTenMonAn = function (other) {
        return this._tenMonAn.toLocaleLowerCase().localeCompare(other._tenMonAn.toLocaleLowerCase());
    };
    MonAn.prototype.CompareToSoLuong = function (other) {
        if (this._soLuong > other._soLuong) {
            return 1;
        }
        else if (this._soLuong < other._soLuong) {
            return -1;
        }
        return 0;
    };
    MonAn.prototype.CompareToDonGia = function (other) {
        if (this._donGia > other._donGia) {
            return 1;
        }
        else if (this._donGia < other._donGia) {
            return -1;
        }
        return 0;
    };
    MonAn.prototype.Nhap = function () {
        this.maMonAn = "maMonAn" + this.getRndInteger(1, 999);
        this.tenMonAn = "tenMonAn" + this.getRndInteger(1, 999);
        this.donGia = this.getRndInteger(1, 999);
        this.soLuong = this.getRndInteger(1, 999);
    };
    MonAn.prototype.toString = function () {
        return "".concat((this.maMonAn, -15)).concat((this.tenMonAn, -15)).concat((this.soLuong, -15)).concat((this.donGia, -15));
    };
    return MonAn;
}());
