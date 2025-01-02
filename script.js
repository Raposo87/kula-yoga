





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