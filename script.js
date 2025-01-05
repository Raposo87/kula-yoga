

// Seleciona os elementos necessários
const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-list li a'); // Adicione esta linha para selecionar os links do menu

// Função para fechar o menu
function fecharMenu() {
    mobileMenu.classList.remove('active');
    navList.classList.remove('active');
    
    // Remove as animações dos itens do menu
    const itensMenu = document.querySelectorAll('.nav-list li');
    itensMenu.forEach(item => {
        item.style.animation = '';
    });
}

// Adiciona evento de clique para cada link do menu
navLinks.forEach(link => {
    link.addEventListener('click', fecharMenu);
});

// Fecha o menu quando clicar fora dele
document.addEventListener('click', (evento) => {
    const clicouDentroMenu = navList.contains(evento.target);
    const clicouNoBotaoMenu = mobileMenu.contains(evento.target);
    
    if (!clicouDentroMenu && !clicouNoBotaoMenu) {
        fecharMenu();
    }
});

// Funcionalidade do botão do menu
mobileMenu.addEventListener('click', (evento) => {
    evento.stopPropagation(); // Impede que o clique feche o menu imediatamente
    mobileMenu.classList.toggle('active');
    navList.classList.toggle('active');
    
    // Animação para os itens do menu
    const itensMenu = document.querySelectorAll('.nav-list li');
    itensMenu.forEach((item, indice) => {
        if (item.style.animation) {
            item.style.animation = '';
        } else {
            item.style.animation = `navLinkFade 0.5s ease forwards ${indice / 7 + 0.3}s`;
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
