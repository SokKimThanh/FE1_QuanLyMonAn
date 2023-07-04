/**
 * Sok Kim Thanh
 * date 23/06/2023
 * slideshow.js
 */
// khai bao
const thumbnails = document.querySelectorAll('.thumbnail');// danh sách hình nhỏ
const mainPhoto = document.querySelector('.main-photo');// hình lớn mặc định
let hinhNhoHienTai = thumbnails[0];// hình nhỏ hiện tại mặc định
let viTriChonHinhKeTiep = 0;//vị trí chọn hình kế tiếp

/**
 * @param i vị trí hiện tại trong danh sách hình nhỏ
 * @mota chọn hình bất kỳ tại vị trí hình nhỏ bất kỳ
 */
for (let i = 0; i < thumbnails.length; i++) {
    let hinhNhoDangChon = thumbnails[i];// hình được chọn tại vi trí thứ i
    // sự kiện click hình nhỏ
    hinhNhoDangChon.onclick = function ()
    // bước chọn hình nhỏ hiện tại
    {
        /** 
        * figure 0. Tô màu tự động
        * */
        // hiển thị hình lớn từ hình nhỏ đang chọn
        mainPhoto.setAttribute('src', this.getAttribute('src'));
        // xóa viền mới của hình hiện tại
        hinhNhoHienTai.classList.remove('active');
        // thay viền mới của hình kế tiếp
        hinhNhoDangChon.classList.add('active');
        // áp dụng hình hiện tại là hình kế tiếp được chọn
        hinhNhoHienTai = hinhNhoDangChon;
        // vị trí kế tiếp là vị trí đang chọn
        viTriChonHinhKeTiep = i;
    }
}

function chuyenHinh() {
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
    mainPhoto.setAttribute('src', thumbnails[viTriChonHinhKeTiep].getAttribute('src'));// thay hình lớn bằng hình nhỏ kế tiếp
    thumbnails[viTriChonHinhKeTiep].classList.add('active');// thay đường viền cho hình nhỏ kế tiếp
    hinhNhoHienTai.classList.remove('active');// xóa đường viền của hình nhỏ hiện tại
    hinhNhoHienTai = thumbnails[viTriChonHinhKeTiep];// chuyển hình nhỏ hiện tại sang hình nhỏ kế tiếp
}


/**
 * @mota tự động chọn & chuyển ảnh ở vị trí kế tiếp
 */
setInterval(chuyenHinh, 3000);