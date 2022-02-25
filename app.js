// navbar
const nav = document.querySelector('nav');

// on scroll change color
window.onscroll = () => {
    if (window.scrollY > 300) {
        nav.classList.add('nav-active');
    } else {
        nav.classList.remove('nav-active');
    }
};

// hamburger menu
const hamburger = document.querySelector('.nav--btn-toggle');
const navLinks = document.querySelector('.nav--links');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})