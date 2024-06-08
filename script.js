const surgical = document.querySelector('.surgical');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

surgical.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
    });
});
