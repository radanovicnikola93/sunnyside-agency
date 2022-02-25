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
