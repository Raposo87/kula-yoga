


const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // Animação dos links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Animação do menu hamburger (opcional)
    mobileMenu.classList.toggle('active');
});