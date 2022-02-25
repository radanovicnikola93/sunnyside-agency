// navbar
const nav = document.querySelector('nav');

window.onscroll = () => {
    if (window.scrollY > 300) {
        nav.classList.add('nav-active');
    } else {
        nav.classList.remove('nav-active');
    }
};