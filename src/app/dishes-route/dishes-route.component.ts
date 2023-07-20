/**----------------------------------------------------------------
  * @author Sok Kim Thanh
  * @datecreated 23/06/2023
  * @filename dishes-route.component.ts
  * ----------------------------------------------------------------
  * @author Sok Kim Thanh
  * @updatedDate 05/07/2023
  * @filename dishes-route.component.ts
  * @content adding, finding, searching, sorting, writing, reading
  * ----------------------------------------------------------------
  * @author Sok Kim Thanh
  * @updatedDate 12/07/2023
  * @filename dishes-route.component.ts
  * @content them 1 doi tuong vao danh sach, xoa 1 doi tuong khoi danh sach, hien thi, xoa hinh anh
  * */
import { Component, EventEmitter, Output } from '@angular/core';
import { DanhSachMonAnService } from '../model/DanhSachMonAn';
import { MonAn } from '../model/MonAn';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MyNode } from '../model/MyNode';

@Component({
  selector: 'app-dishes-route',
  templateUrl: './dishes-route.component.html',
  styleUrls: ['./dishes-route.component.css']
})

export class DishesRouteComponent {
  /* -------------------------------- khai bao -------------------------------- */
  // tieu de 
  title = 'appBootstrap';
  /* danh sach mon an */
  dishes: MonAn[] = [];
  // clear interval slideshow
  intervalID: any;

  // @Output() galleryMonAnParrentGeneric = new EventEmitter<MonAn>;
  monAnDetail: MonAn = new MonAn('general', 'Trứng rán', 1000, 10, '../../assets/images/logo.svg');
  // tim kiem thong tin
  gallerySearch: string = "";

  /* ------------------------------- constructor ------------------------------ */
  constructor(private modalService: NgbModal, private data: DanhSachMonAnService) {
    data = new DanhSachMonAnService();
    this.dishes = data.getMonAnList();
  }
  /**
   * Khởi tạo mảng sau khi render hook angular
   */
  ngAfterContentInit() {
    this.data.Add(1, new MonAn('Monan001', 'khoai tay chien', 15000, 100, '../../assets/images/logo.png'));
    this.dishes = this.data.getMonAnList();
  }

  /* --------------------------------- method --------------------------------- */
  /**
   * Test đóng modal
   */
  closeModal() {
    let close_button = document.getElementById('close_button');
    close_button?.click();
  }

  stop() {
    clearInterval(this.intervalID);
  }
  /**
   * Hàm chạy tự động slideshow
   */
  play() {
    //reset data;
    // this.dishes = this.data.getMonAnList();
    // khai bao
    let thumbnails = document.querySelectorAll('.thumbnail');// danh sách hình nhỏ
    let mainPhoto = document.querySelector('.main-photo');// hình lớn mặc định
    let hinhNhoHienTai = thumbnails[0];// hình nhỏ hiện tại mặc định
    let viTriChonHinhKeTiep = 0;//vị trí chọn hình kế tiếp

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
    }
    let chuyenHinh = function () {
      viTriChonHinhKeTiep++;// vị trí hình nhỏ kế tiếp tự tăng lên 1

      /** 
       * figure 1. Out of bounds check
       * */
      if (viTriChonHinhKeTiep == thumbnails.length) {
        viTriChonHinhKeTiep = 0;//chuyển về vị trí ban đầu
      }
      /** 
       * figure 2. Tô màu vị trí kế tiếp
       * */
      let hinhKeTiep = thumbnails[viTriChonHinhKeTiep];
      if (hinhKeTiep && hinhKeTiep.getAttribute('src')) {
        // Do something with object.getAttribute()
        mainPhoto!.setAttribute('src', hinhKeTiep.getAttribute('src')!);// thay hình lớn bằng hình nhỏ kế tiếp
        hinhKeTiep.classList.add('active');// thay đường viền cho hình nhỏ kế tiếp
        hinhNhoHienTai.classList.remove('active');// xóa đường viền của hình nhỏ hiện tại
        hinhNhoHienTai = hinhKeTiep;// chuyển hình nhỏ hiện tại sang hình nhỏ kế tiếp
      }
    }
    /**
     * @mota Dừng thread cũ slideshow
     */
    clearInterval(this.intervalID);
    /**
     * @mota tự động chọn & chuyển ảnh ở vị trí kế tiếp
     * tạo thread mới(bất đồng bộ)
     */
    this.intervalID = setInterval(chuyenHinh, 1000);
  }
  public readURL(input: any) {
    var url = input.value;
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    let dragImage = document.getElementById('dragImage');
    if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
      var reader = new FileReader();

      reader.onload = function (e) {
        let result: any = e.target?.result;
        dragImage!.setAttribute('src', result);
      }

      reader.readAsDataURL(input.files[0]);
    } else {
      dragImage!.setAttribute('src', '/assets/no_preview.png');
    }
  }

  /* thêm hình vào khung hình */
  public onFileSelected() {
    // selector input upload
    let inputUpload = document.getElementById('inputUpload')!;
    this.readURL(inputUpload);
  }
  clickImage() {
    // alert("clicked image");
    let inputUpload = document.getElementById('inputUpload')!;
    inputUpload.click();
  }
  /**
   * 
   * @param this.gallerySearch Tu khoa tìm kiếm
   * @returns danh sách tìm được
   */
  searchGallery(gallerySearch: string) {

    if (gallerySearch == "") {
      this.dishes = this.data.getMonAnList();
    } else {
      this.dishes = this.data.search(gallerySearch);
    }
  }

  writefile() {
    alert("writefile");
  }
  readfile() {
    console.log("readfile");
  }

  /**
   * 
   * @param type 1: Theo mã, 2: Theo Đơn giá
   */
  sort(/* int */ type: number) {
    // console.log("sort");
    this.data.Sort(type);
    this.dishes = this.data.getMonAnList();
  }

  /**
   * 
   * @param monan Mon an tren danh sach can xoa
   */
  remove(monan: MonAn) {
    // alert("remove");
    // xác nhận xóa 
    let confirm: boolean = window.confirm("Đồng ý xóa?");
    // xoa tren giao dien

    // xoa trong danh sach
    if (confirm == true) {
      this.data.Remove(new MyNode(monan));
      // Test size: console.log(this.data.Data.size);
      this.dishes = this.data.getMonAnList();
    }
  }

  /**
   * hàm thêm theo 2 dạng thêm vào đầu và thêm vào cuối danh sách
   */
  add() {
    /* nhap thong tin mon an */
    let ma: MonAn = new MonAn();
    ma.Nhap();
    let dragImage = document.getElementById('dragImage');
    let url_image = dragImage!.getAttribute('src')!;
    if (url_image != null && url_image != undefined && url_image != "") {
      ma.url_image = url_image;//tim thay hình ảnh mới
    }
    /**
     * 1. Add Last
     * 2. Add First
     */
    let check: MyNode = this.data.Add(1, ma);
    // Test size: console.log(this.data.Data.size)
    // Kiem tra them thanh cong
    if (check != null) {
      // add thanh cong thi tat modal
      this.closeModal();
      //refresh danh sach hinh nho
      this.dishes = this.data.getMonAnList();
    }
  }
  /**
   * 
   * @param ma món ăn chi tiết
   */
  getDetails(ma: MonAn) {
    // alert("get details")
    this.monAnDetail = ma;
    // this.galleryMonAnParrentGeneric.emit(ma);
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
