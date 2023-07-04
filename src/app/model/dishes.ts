// /**
//   * @author Sok Kim Thanh
//   * @Môtả Cài đặt navbar
//   * @date 29/06/2023
//   */

//collapsibleNavbar
let collapsibleNavbar = document.getElementById('collapsibleNavbar');
//button click
let buttonToggle = document.querySelector('[data-bs-toggle]');

// the span cua button ( hinh background)
let childOfButtonToggle = buttonToggle!.children[0];

// navbar
let getNavBar = document.querySelector('nav');

// footer
let getFooter = document.querySelector('footer');


function buttonToggleClick() {
    // khai bao
    let /* boolean */ isShow = collapsibleNavbar!.classList.contains('show');
    let /* boolean */ isCollapsed = buttonToggle!.classList.contains('collapsed');

    if (isShow === false) {

        // change background color
        getNavBar!.classList.toggle('navbar-light');
        getNavBar!.classList.toggle('navbar-dark');
        // footer
        getFooter!.classList.toggle('navbar-light');
        getFooter!.classList.toggle('navbar-dark');
    }
    // navbar background color
    if (isCollapsed === false) {
        // change background color
        childOfButtonToggle.classList.toggle('open');
        childOfButtonToggle.classList.toggle('close');
    } else {
        childOfButtonToggle.classList.toggle('open');
        childOfButtonToggle.classList.toggle('close');
    }
}