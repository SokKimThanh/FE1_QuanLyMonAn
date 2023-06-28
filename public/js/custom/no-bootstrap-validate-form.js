/**
 * Sok Kim Thanh
 * Validation.js
 * 22/06/2023
 */

let messageInvalid = document.getElementsByClassName('invalid');
let messageOK = document.getElementsByClassName('ok');

// hàm thực thi kiểm tra form nhập 
function validateForm() {

    if (testNameInput() & testAgeInput() & testPhoneNumber() & testEmail() & testStudentID() & testUsername() & testPassword()) {
        //TH: dung
        return;
    } else {
        //TH: Sai:
        return;
    }
}
// hàm thông báo vị trí đúng ở trên form
function TrueMessage(index) {
    messageInvalid[index].style.display = 'none';
    messageOK[index].style.display = 'block';
}
// hàm thông báo vị trí lỗi ở trên form
function FalseMessage(index, exceptionMessage = '') {
    messageInvalid[index].style.display = 'block';
    messageOK[index].style.display = 'none';
    messageInvalid[index].innerHTML = '';
    messageInvalid[index].innerHTML += exceptionMessage;
}
//Kiem tra ma so sinh vien
function testStudentID() {
    // Get the value of the input field with id="fstudentid"
    let txtInput = document.getElementById('fstudentid');
    const regex = /^(\d{5})(\w{2})(\d{4})$/;//22211tt0063, 22211OT0030
    if (regex.test(txtInput.value)) {
        // truong hop dung
        TrueMessage(0);
        txtInput.classList.remove('invalid-message');
        txtInput.classList.add('ok-message');
        return true;
    }
    // truong hop sai 
    FalseMessage(0, 'Chưa nhập đủ thông tin hoặc Nhập sai định dạng mã số sinh viên');
    txtInput.classList.add('invalid-message');
    txtInput.classList.remove('ok-message');
    return false;
}
// ham kiem tra nhap ten
function testNameInput() {
    // Get the value of the input field with id="fname"
    let txtInput = document.getElementById('fname');
    const regex = /[\w\s]{8,30}/;
    if (regex.test(txtInput.value)) {
        // truong hop dung
        TrueMessage(1);
        txtInput.classList.remove('invalid-message');
        txtInput.classList.add('ok-message');
        return true;
    }
    // truong hop sai 
    FalseMessage(1, 'Chưa nhập đủ thông tin hoặc chưa nhập từ 8 đến 30 kí tự');
    txtInput.classList.add('invalid-message');
    txtInput.classList.remove('ok-message');
    return false;
}
// hàm kiểm tra tuổi từ 18 đến 35
function testAgeInput() {
    // Get the value of the input field with id="fage"
    let txtInput = document.getElementById('fage');
    // nhập tuổi từ 18 đến 35
    let regex = /\b(1[89]|2\d|3[0-5])\b/;
    if (regex.test(parseInt(txtInput.value))) {
        // truong hop dung
        TrueMessage(2);
        txtInput.classList.remove('invalid-message');
        txtInput.classList.add('ok-message');
        return true;
    }
    // truong hop sai 
    FalseMessage(2, 'Chưa nhập đủ thông tin hoặc nhập chưa đủ tuổi từ 18 đến 35');
    txtInput.classList.add('invalid-message');
    txtInput.classList.remove('ok-message');
    return false;
}
// hàm kiểm tra nhập số điện thoại việt nam
function testPhoneNumber() {
    // Get the value of the input field with id="fphonenumber"
    let txtInput = document.getElementById('fphonenumber');
    //  nhập số điện thoại bắt đầu bằng 0 hoặc 84 độ dài từ 8 đến 11 kitu
    let regex = /(84|0[3|5|7|8|9])+([0-9]{8,11})\b/;
    if (regex.test(txtInput.value)) {
        // truong hop dung
        TrueMessage(3);
        txtInput.classList.remove('invalid-message');
        txtInput.classList.add('ok-message');
        return true;
    }
    // truong hop sai 
    FalseMessage(3, 'Chưa nhập đủ thông tin hoặc nhập số điện thoại không đúng định dạng bắt đầu từ 0 hoặc 84 và chưa đủ 8 đến 11 kí tự.');
    txtInput.classList.add('invalid-message');
    txtInput.classList.remove('ok-message');
    return false;
}

// hàm kiểm tra email
function testEmail() {
    // Get the value of the input field with id="femail"
    let txtInput = document.getElementById('femail');
    // nhập đúng định dạng email
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (regex.test(txtInput.value)) {
        // truong hop dung
        TrueMessage(4);
        txtInput.classList.remove('invalid-message');
        txtInput.classList.add('ok-message');
        return true;
    }
    // truong hop sai 
    FalseMessage(4, 'Chưa nhập đủ thông tin hoặc sai định dạng e-mail.');
    txtInput.classList.add('invalid-message');
    txtInput.classList.remove('ok-message');
    return false;
}

// hàm kiểm tra username
function testUsername() {
    // Get the value of the input field with id="fusername"
    let txtInput = document.getElementById('fusername');
    //  Kiểm tra username ít nhất là 6 ký tự word (không phân biệt chữ
    // hoa/thường) hoặc ký số: /^\w{6,}$/
    let regex = /^\w{6,}$/;
    if (regex.test(txtInput.value)) {
        // truong hop dung
        TrueMessage(5);
        txtInput.classList.remove('invalid-message');
        txtInput.classList.add('ok-message');
        return true;
    }
    // truong hop sai 
    FalseMessage(5, 'Chưa nhập đủ thông tin hoặc ít nhất là 6 ký tự word (không phân biệt chữ hoa/thường).');
    txtInput.classList.add('invalid-message');
    txtInput.classList.remove('ok-message');
    return false;
}
// hàm kiểm tra password
function testPassword() {
    // Get the value of the input field with id="fpassword"
    let txtInput = document.getElementById('fpassword');
    // Nhập password 1 chữ cái viết hoa, 1 chữ cái viêt thường, 1 kí tự đặc biệt, 1 kí tự số độ dài 7 đến 15 kí tự
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (regex.test(txtInput.value)) {
        // truong hop dung
        TrueMessage(6);
        txtInput.classList.remove('invalid-message');
        txtInput.classList.add('ok-message');
        return true;
    }
    // truong hop sai 
    FalseMessage(6, 'Chưa nhập đủ thông tin hoặc Nhập chưa password 1 chữ cái viết hoa, 1 chữ cái viêt thường, 1 kí tự đặc biệt, 1 kí tự số độ dài 7 đến 15 kí tự.');
    txtInput.classList.add('invalid-message');
    txtInput.classList.remove('ok-message');
    return false;
}

function hienpassword() {
    let txtInput = document.getElementById('fpassword');
    if (txtInput.type == 'text') {
        txtInput.type = 'password';
    } else {
        txtInput.type = 'text';
    }
}