let menuBar = document.getElementById('menu-bar');
let nav = document.getElementById('nav');
let menuBg = document.getElementById('menu-bg');

function toggleMenu() {
    menuBar.classList.toggle('change');
    nav.classList.toggle('change');
    menuBg.classList.toggle('change-bg');
}
