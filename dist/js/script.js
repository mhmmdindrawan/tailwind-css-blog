// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header'); // Mengambil elemen header
    const fixedNav = header.offsetTop; // Mengambil posisi vertikal dari elemen header

    if (window.pageYOffset > fixedNav) { // Jika halaman digulir lebih dari posisi awal header
        header.classList.add('navbar-fixed'); // Menambahkan kelas navbar-fixed ke header
    } else {
        header.classList.remove('navbar-fixed'); // Menghapus kelas navbar-fixed dari header
    }
};

// Hamburger Menu Toggle
const hamburger = document.querySelector('#hamburger'); // Mengambil elemen dengan id hamburger
const navMenu = document.querySelector('#nav-menu'); // Mengambil elemen dengan id nav-menu

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active'); // Menambah/menghapus kelas hamburger-active
    navMenu.classList.toggle('hidden'); // Menambah/menghapus kelas hidden
});
