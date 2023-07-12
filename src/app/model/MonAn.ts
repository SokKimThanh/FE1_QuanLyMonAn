/**
* @author Sok Kim Thanh
* @createdDate 28/06/2023
* @createdClass MonAn.js
* @description CTDL va giai thuat, lap trinh huong doi tuong
*/
export class MonAn {
    //fields
    private _maMonAn: string;
    private _tenMonAn: string;
    private _donGia: number;
    private _soLuong: number;
    private _url_image: string;

    // constructor 
    constructor(_maMonAn: string = "", _tenMonAn: string = "", _donGia: number = 0, _soLuong: number = 0, _url: string = "") {
        this._maMonAn = _maMonAn;
        this._tenMonAn = _tenMonAn;
        this._donGia = _donGia;
        this._soLuong = _soLuong;
        this._url_image = _url;
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
    public get url_image(): string {
        return this._url_image;
    }
    public set url_image(value: string) {
        this._url_image = value;
    }

    // medthods
    private getRndInteger(min: /* int */number, max: /* int */number) {
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

    // Input data
    public Nhap(url_image: string = ""): void {
        this._maMonAn = "maMonAn" + this.getRndInteger(1, 999);
        this._tenMonAn = "tenMonAn" + this.getRndInteger(1, 999);
        this._donGia = this.getRndInteger(1, 999);
        this._soLuong = this.getRndInteger(1, 999);
        this._url_image = url_image;
    }

    // tostring
    public toString(): string {
        return `${this._maMonAn, -15}${this._tenMonAn, -15}${this._soLuong, -15}${this._donGia, -15}${this._url_image}`;
    }
}
