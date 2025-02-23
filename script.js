

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


//------ Alerta------//

 // Função para mostrar o alerta
 function showAlert() {
    document.getElementById('customAlert').classList.add('show');
}

// Função para fechar o alerta
function closeAlert() {
    document.getElementById('customAlert').classList.remove('show');
}

// Detecta quando o usuário chegou ao final da página
window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        showAlert();
    }
});

//------------ zoom-------------//

const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const img = document.getElementById('horarioImg');
const closeBtn = document.getElementsByClassName('close')[0];
let currentScale = 1;
let isDragging = false;
let startX, startY, translateX = 0, translateY = 0;

// Abrir modal ao clicar na imagem
img.onclick = function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
    currentScale = 1;
    translateX = 0;
    translateY = 0;
    updateTransform();
}

// Fechar modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Função para ajustar o zoom
function adjustZoom(delta) {
    currentScale = Math.max(1, currentScale + delta);
    updateTransform();
}

// Resetar zoom
function resetZoom() {
    currentScale = 1;
    translateX = 0;
    translateY = 0;
    updateTransform();
}

// Atualizar transformação
function updateTransform() {
    modalImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
}

// Zoom com a roda do mouse
modal.addEventListener('wheel', function(e) {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    adjustZoom(delta);
});

// Arrastar imagem
modalImg.addEventListener('mousedown', function(e) {
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
});

document.addEventListener('mousemove', function(e) {
    if (isDragging) {
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        updateTransform();
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});

// Suporte para dispositivos touch
modalImg.addEventListener('touchstart', function(e) {
    const touch = e.touches[0];
    isDragging = true;
    startX = touch.clientX - translateX;
    startY = touch.clientY - translateY;
});

document.addEventListener('touchmove', function(e) {
    if (isDragging) {
        const touch = e.touches[0];
        translateX = touch.clientX - startX;
        translateY = touch.clientY - startY;
        updateTransform();
    }
});

document.addEventListener('touchend', function() {
    isDragging = false;
});

//------animação de seção-------//

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, {
    threshold: 0.1
});

const animatedSections = document.querySelectorAll('.casa, .pratica, .nosso-espaço, .calendario, .valores, .professoras');

// Observa cada section
animatedSections.forEach(section => {
    scrollObserver.observe(section);
});