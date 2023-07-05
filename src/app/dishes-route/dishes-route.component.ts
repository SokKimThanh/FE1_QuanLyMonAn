/**----------------------------------------------------------------
  * @author Sok Kim Thanh
  * @datecreated 23/06/2023
  * @filename slideshow.js
  * ----------------------------------------------------------------
  * @updated 05/07/2023
  * @content adding, finding, searching, sorting, writing, reading
  * */
import { Component } from '@angular/core';
import { DanhSachMonAnService } from '../model/DanhSachMonAn';
import { MonAn } from '../model/MonAn';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dishes-route',
  templateUrl: './dishes-route.component.html',
  styleUrls: ['./dishes-route.component.css']
})

export class DishesRouteComponent {
  /* danh sach mon an */

  title = 'appBootstrap';

  closeResult: string = '';

  constructor(private modalService: NgbModal, private data: DanhSachMonAnService) {
    data = new DanhSachMonAnService();
  }

  ngAfterContentInit() {
    // khai bao
    let thumbnails = document.querySelectorAll('.thumbnail');// danh sách hình nhỏ
    let mainPhoto = document.querySelector('.main-photo');// hình lớn mặc định
    let hinhNhoHienTai = thumbnails[0];// hình nhỏ hiện tại mặc định
    let viTriChonHinhKeTiep = 0;//vị trí chọn hình kế tiếp
    let data = new DanhSachMonAnService();
    /**
     * @param i vị trí hiện tại trong danh sách hình nhỏ
     * @mota chọn hình bất kỳ tại vị trí hình nhỏ bất kỳ
     */
    for (let i = 0; i < thumbnails.length; i++) {
      let hinhNhoDangChon = thumbnails[i];// hình được chọn tại vi trí thứ i
      // sự kiện click hình nhỏ
      hinhNhoDangChon.addEventListener("click", function () {
        // bước chọn hình nhỏ hiện tại
        /** 
        * figure 0. Tô màu tự động
        * */
        // hiển thị hình lớn từ hình nhỏ đang chọn
        mainPhoto!.setAttribute('src', hinhNhoDangChon.getAttribute('src')!);
        // xóa viền mới của hình hiện tại
        hinhNhoHienTai!.classList.remove('active');
        // thay viền mới của hình kế tiếp
        hinhNhoDangChon.classList.add('active');
        // áp dụng hình hiện tại là hình kế tiếp được chọn
        hinhNhoHienTai = hinhNhoDangChon;
        // vị trí kế tiếp là vị trí đang chọn
        viTriChonHinhKeTiep = i;
      });
      let chuyenHinh = function () {
        viTriChonHinhKeTiep++;// vị trí hình nhỏ kế tiếp tự tăng lên 1
        /** 
         * figure 1. Out of bounds check
         * */
        if (viTriChonHinhKeTiep == thumbnails.length - 1) {
          viTriChonHinhKeTiep = 0;//chuyển về vị trí ban đầu
        }
        /** 
         * figure 2. Tô màu vị trí kế tiếp
         * */
        mainPhoto!.setAttribute('src', thumbnails[viTriChonHinhKeTiep].getAttribute('src')!);// thay hình lớn bằng hình nhỏ kế tiếp
        thumbnails[viTriChonHinhKeTiep].classList.add('active');// thay đường viền cho hình nhỏ kế tiếp
        hinhNhoHienTai.classList.remove('active');// xóa đường viền của hình nhỏ hiện tại
        hinhNhoHienTai = thumbnails[viTriChonHinhKeTiep];// chuyển hình nhỏ hiện tại sang hình nhỏ kế tiếp
      }
      /**
       * @mota tự động chọn & chuyển ảnh ở vị trí kế tiếp
       */
      setInterval(chuyenHinh, 3000);
    }
  }
  writefile() {
    alert("writefile");
  }
  readfile() {
    console.log("readfile");
  }
  sort() {
    console.log("sort");
  }

  find() {
    alert("find");
  }
  remove() {
    alert("remove");
  }

  add() {
    /* nhap thong tin mon an */
    // let ma: MonAn = new MonAn();
    // ma.Nhap();


    /**
     * 1. Add Last
     * 2. Add First
     */
    // this.data.Add(1, ma);
  }
  onDrop(ev: DragEvent) {
    ev.preventDefault();
    // alert("onDrop");
    this.data.onDrop(ev);
  }
  onDragOver(ev: DragEvent) {
    ev.preventDefault();
    // alert("onDragOver");
    this.data.onDragOver(ev);
  }
  onDragStart(ev: DragEvent) {
    ev.preventDefault();
    // alert("onDragStart");
    this.data.onDragStart(ev);
  }
}
