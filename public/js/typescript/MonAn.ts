/**
 * Sok Kim Thanh
 * Date created: 28/06/2023
 * CTDL va giai thuat, lap trinh huong doi tuong
 * class MonAn.js
 */
class MonAn {
    //fields
    private _maMonAn: string;
    private _tenMonAn: string;
    private _donGia: number;
    private _soLuong: number;

    // constructor 
    constructor(_maMonAn: string = "", _tenMonAn: string = "", _donGia: number = 0, _soLuong: number = 0) {
        this._maMonAn = _maMonAn;
        this._tenMonAn = _tenMonAn;
        this._donGia = _donGia;
        this._soLuong = _soLuong;
    }
    // properties
    public get maMonAn(): string {
        return this._maMonAn;
    }
    public set maMonAn(value: string) {
        this._maMonAn = value;
    }

    public get tenMonAn(): string {
        return this._tenMonAn;
    }
    public set tenMonAn(value: string) {
        this._tenMonAn = value;
    }

    public get donGia(): number {
        return this._donGia;
    }
    public set donGia(value: number) {
        this._donGia = value;
    }

    public get soLuong(): number {
        return this._soLuong;
    }
    public set soLuong(value: number) {
        this._soLuong = value;
    }

    private getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    public CompareToMaMonAn(other: MonAn): number {
        return this._maMonAn.toLocaleLowerCase().localeCompare(other._maMonAn.toLocaleLowerCase());
    }

    public CompareToTenMonAn(other: MonAn): number {
        return this._tenMonAn.toLocaleLowerCase().localeCompare(other._tenMonAn.toLocaleLowerCase());
    }

    public CompareToSoLuong(other: MonAn): number {
        if (this._soLuong > other._soLuong) {
            return 1;
        } else if (this._soLuong < other._soLuong) {
            return -1;
        }
        return 0;
    }
    public CompareToDonGia(other: MonAn): number {
        if (this._donGia > other._donGia) {
            return 1;
        } else if (this._donGia < other._donGia) {
            return -1;
        }
        return 0;
    }
    public Nhap(): void {
        this.maMonAn = "maMonAn" + this.getRndInteger(1, 999);
        this.tenMonAn = "tenMonAn" + this.getRndInteger(1, 999);
        this.donGia = this.getRndInteger(1, 999);
        this.soLuong = this.getRndInteger(1, 999);
    }

    public toString(): string {
        return `${this.maMonAn, -15}${this.tenMonAn, -15}${this.soLuong, -15}${this.donGia, -15}`
    }
}
