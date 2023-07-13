/**
 * @author Sok Kim Thanh
 * @createdDate 28/06/2023
 * @createdClass DanhSachMonAn.js
 * @description CTDL va giai thuat, lap trinh huong doi tuong
 * ---------------------------------------------------------------------------------------
 * @updateDate 05/07/2023
 * @updateContent Cập nhật phương thức xóa, sửa, kéo thả, đọc ghi file, tìm kiếm, sắp xếp
 * ---------------------------------------------------------------------------------------
 * @updateDate 13/07/2023
 * @updateContent Thực hiện chức năng ghi file
 */


import { EventEmitter, Injectable } from "@angular/core";
import { MonAn } from "./MonAn";
import { MyLinkedList } from "./MyLinkedList";
import { MyNode } from "./MyNode";
// import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class DanhSachMonAnService {
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
     * @description Phương thức add vào sau hoặc add vào trước
     * @param ma ma mon an
     * @param luaChon lua chon 1: addlast 2: addfirst
     */
    public Add(luaChon: number, ma: MonAn): MyNode {
        let myNode: MyNode = new MyNode(ma);
        switch (luaChon) {
            case 1:
                myNode = this.data.AddLast(ma);
                break;
            case 2:
                myNode = this.data.AddFirst(ma);
                break;
            default:
                break;
        }
        return myNode;
    }
    /**
     * Hàm xóa 1 phần tử trong danh sach
     */
    public Remove(del: MyNode): void {
        this.data.Remove(del);
    }
    /**
     * 
     * @returns danh sách món ăn
     */
    public getMonAnList(): MonAn[] {
        return this.data.Show();
    }
    /**
     * chức năng sắp xếp
     */
    public Sort(/* int */ type: number) {
        switch (type) {
            case 1: // theo ma
                this.data.InterchangeSortMaMonAn();
                break;
            case 2: // theo don gia
                this.data.InterchangeSortDonGia();
                break;
            case 3: // search theo ten
                this.data.InterchangeSortTenMonAn();
                break;
            default: break;
        }
    }
    /**
     * @description Phương thức cho phép thả file vào ô chứa
     * @param ev DragEvent
     */
    public onDragOver(ev: DragEvent) {
        /* preventDefault là một phương thức của đối tượng Event trong TypeScript. 
        Nó được sử dụng để ngăn chặn hành vi mặc định của một sự kiện */
        ev.preventDefault();//convert allow true

        /* Kiểm tra từng loại ảnh khác nhau ví dụ .png .jpeg */
        const dataTransfer = ev.dataTransfer;
        const mimeTypes = dataTransfer!.types;
        mimeTypes.forEach((mimeType) => {
            console.log(dataTransfer!.getData(mimeType));
        });
    }

    /**
     * @description phương kéo file vào ô chứa
     * @param ev DragEvent
     */
    public onDragStart(ev: DragEvent) {
        /**
         * Trong TypeScript, bạn có thể sử dụng event.target 
         * để lấy đối tượng gốc mà sự kiện được kích hoạt. 
         * Sau đó, bạn có thể sử dụng thuộc tính id để lấy ID của đối tượng đó
         */
        const target = ev.target as HTMLElement;
        console.log('Clicked:', target.id);
        /**
         * Trong TypeScript, dataTransfer là một đối tượng 
         * được sử dụng trong các sự kiện drag and drop. 
         * Nó chứa các phương thức và thuộc tính 
         * để truyền dữ liệu giữa các thành phần
         * 
         */
        // ev.dataTransfer!.setData("text/plain", target.id);
        const dataTransfer = ev.dataTransfer;
        const mimeTypes = ['image/png', 'image/jpeg'];
        mimeTypes.forEach((mimeType) => {
            dataTransfer!.setData(mimeType, 'data:' + mimeType + ';base64,' + 'base64-encoded-image-data');
        });
    }

    /**
     * @description Phương thức thả file vào ô chứa
     * Trong TypeScript, DropEvent không phải là một đối tượng có sẵn. 
     * Tuy nhiên, bạn có thể sử dụng DragEvent để xử lý các sự kiện thả
     * @param ev DragEvent
     */
    public onDrop(ev: DragEvent) {
        ev.preventDefault();
        /*  khai báo biến */
        // const dropZone = document.getElementById('drop-zone');  // vùng chứa hình
        var dragImage = document.getElementById('dragImage') as HTMLImageElement;// hình hiển thị
        var dataTransfer = ev.dataTransfer;// truyền dữ liệu 

        /* kiểm tra kiểm dữ liệu hình và đưa vào dataTranfer */
        const mimeTypes = ['image/png', 'image/jpeg'];
        mimeTypes.forEach((mimeType) => {
            dataTransfer!.setData(mimeType, 'data:' + mimeType + ';base64,' + 'base64-encoded-image-data');
        });

        /* chuẩn bị hình mới kéo vào*/
        const file = dataTransfer!.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                // thay đường dẫn bằng base64
                dragImage.src = reader.result as string;
                dragImage.style.width = "100%";
                dragImage.style.height = "auto";
            };
            // hien thi hinh
            reader.readAsDataURL(file);
        }

    }

    /**
     * 
     * @param event Chua hoan thien
     */
    onFileSelected(event: any) {
        const file: File = event.target.files[0];
        const formData: FormData = new FormData();
        formData.append('image', file, file.name);
        // this.onDrop(event);
    }

    // /**
    //  * Đọc file
    //  */
    // public ReadFile(file_path: string) {
    //     return this.http.get(file_path, { responseType: 'text' }).subscribe(data => {
    //         console.log(data);
    //     });
    // }
    // /**
    //  * Ghi File
    //  */
    // public WriteFile(file_path: string) {
    //     let data = this.data.Show();
    //     let sum: string = "";
    //     for (let i = 0; i < data.length; i++) {
    //         let ma: MonAn = data[i];
    //         sum += ma.toFile();
    //     }
    //     return this.http.post(file_path, sum, { responseType: 'text' }).subscribe(data => {
    //         console.log(data);
    //     });
    // }

    /** Need to be sorted list first before using this method */
    binarySearchCity(arr: MonAn[], keySearch: string): MonAn[] {
        // binary search
        let /* int */ left: number = 0;
        let /* int */ right: number = arr.length - 1;
        let /* int */ mid: number = 0;
        let results: MonAn[] = [];/* reset this result after n click search times */
        // started searching...
        while (left <= right) {
            mid = Math.ceil((left + right) / 2);
            let monan = arr[mid];
            // so sanh bat ky
            if (monan.tenMonAn.toLocaleLowerCase().includes(keySearch.toLocaleLowerCase())) {
                results.push(monan);// tim tat ca ket qua
                break;
            } else if (monan.tenMonAn.toLocaleLowerCase().localeCompare(keySearch.toLocaleLowerCase()) < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        // return null if not found or success with as least one result;
        return results;
    }

    search(searchText: string): MonAn[] {
        if (!searchText) {
            return [];
        }
        let result = this.getMonAnList();
        result = result.filter(
            (location: MonAn) => location.tenMonAn
                .toLowerCase()
                .includes(
                    searchText.toLowerCase()
                ));
        return result;
    }
}