

const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');
const sections = document.querySelectorAll('section');

// Function to handle menu state
function handleMenuState() {
    mobileMenu.classList.remove('active');
    navList.classList.remove('active');
    
    // Reset the animations for nav items
    const navItems = document.querySelectorAll('.nav-list li');
    navItems.forEach(item => {
        item.style.animation = '';
    });
}

// Close menu when clicking on sections
sections.forEach(section => {
    section.addEventListener('click', handleMenuState);
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navList.contains(event.target);
    const isClickOnMenuButton = mobileMenu.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnMenuButton) {
        handleMenuState();
    }
});

// Existing menu button functionality (if you don't have it already)
mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent document click from immediately closing menu
    mobileMenu.classList.toggle('active');
    navList.classList.toggle('active');
    
    // Animation for nav items
    const navItems = document.querySelectorAll('.nav-list li');
    navItems.forEach((item, index) => {
        if (item.style.animation) {
            item.style.animation = '';
        } else {
            item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

//--------------Botão ------------//


document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carrossel-img');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    // Função para mostrar um slide específico
    function showSlide(n) {
        // Remove classes ativas atuais
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // Atualiza o índice do slide atual
        currentSlide = (n + totalSlides) % totalSlides;
        
        // Adiciona classes ativas aos novos elementos
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Event listeners para os botões
    document.querySelector('.prev').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Event listeners para os dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Opcional: Navegação automática
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000); // Muda a cada 5 segundos
});