/**
 * Sok Kim Thanh
 * Date 10/06/2023
 * sitescript-validate-form.js
 */

//Đăng ký
// Username:
let username = document.getElementById('username');
// Password:
let password = document.getElementById('password');

// Phone:
let phone = document.getElementById('phone');

// Mã số sinh viên:
let masv = document.getElementById('masv');

// Email:
let email = document.getElementById('email');

let registerValidate = function () {
    if (testUsername() & testPassword() & testPhone() & testEmail() & testMaSoSV()) {
        return;// passed!
    } else {
        return false;// khong chap nhan
    }
}
function testUsername() {
    //Kiểm tra username ít nhất là 6 ký tự word (không phân biệt chữ
    // hoa/thường) hoặc ký số: /^\w{6,}$/
    const regex = /^\w{6,}$/;
    if (regex.test(username.value)) {
        return;//pass
    } else {
        return false;
    }
}
//test mat khau có ít nhất 1 số 1 ký tự đặc biệt độ dài 7 đến 15 ký tự
function testPassword() {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (regex.test(username.value)) {
        return;//pass
    } else {
        return false;
    }
 }
 
function testPhone() { }
function testEmail() { }
function testMaSoSV() { }