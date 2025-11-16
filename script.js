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

// patrocinios:

// Controle do carrossel de patrocinadores (opcional)
document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.querySelector('.patrocinadores-carrossel');
    
    // Duplica os itens para um efeito contínuo
    carrossel.innerHTML += carrossel.innerHTML;
    
    // Pausa a animação no hover
    carrossel.addEventListener('mouseenter', () => {
      carrossel.style.animationPlayState = 'paused';
    });
    
    carrossel.addEventListener('mouseleave', () => {
      carrossel.style.animationPlayState = 'running';
    });
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

// Funcionalidade para detalhes expansíveis na seção de valores
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona funcionalidade aos detalhes expansíveis
    const details = document.querySelectorAll('details');
    
    details.forEach(detail => {
        const summary = detail.querySelector('summary');
        const arrow = summary.querySelector('.arrow');
        
        if (summary && arrow) {
            summary.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Fecha outros detalhes abertos
                details.forEach(otherDetail => {
                    if (otherDetail !== detail && otherDetail.open) {
                        otherDetail.open = false;
                        const otherArrow = otherDetail.querySelector('.arrow');
                        if (otherArrow) {
                            otherArrow.style.transform = 'rotate(0deg)';
                        }
                    }
                });
                
                // Toggle do detalhe atual
                detail.open = !detail.open;
                
                // Rotação da seta
                if (detail.open) {
                    arrow.style.transform = 'rotate(90deg)';
                } else {
                    arrow.style.transform = 'rotate(0deg)';
                }
            });
        }
    });
    
    // Adiciona efeito hover nas cartas
    const packCards = document.querySelectorAll('.pack-card');
    packCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
        });
    });
});

//--grafico--//

document.addEventListener('DOMContentLoaded', () => {
    // === Lógica do Gráfico e Cards de Packs ===
    const packsData = [
        {
            name: 'Pack 3 Aulas',
            description: 'Ideal para quem quer começar ou manter uma prática ligeira.',
            classes: 3,
            price: 35,
            validity: '1 mês',
            color: '#E1CDB5'
        },
        {
            name: 'Pack 5 Aulas',
            description: 'Perfeito para integrar o yoga na sua rotina semanal.',
            classes: 5,
            price: 50,
            validity: '2 meses',
            color: '#B08968'
        },
        {
            name: 'Pack 10 Aulas',
            description: 'A opção mais económica para quem pratica com regularidade.',
            classes: 10,
            price: 90,
            validity: '3 meses',
            color: '#7F5539'
        }
    ];

    function renderPacks() {
        const container = document.getElementById('packs-container');
        if (!container) return; 

        packsData.forEach(pack => {
            const pricePerClass = (pack.price / pack.classes).toFixed(2);
            const card = document.createElement('div');
            card.className = 'pack-card bg-white rounded-xl shadow-lg p-6 flex flex-col text-center';
            card.innerHTML = `
                <h3 class="text-2xl font-bold" style="color:${pack.color};">${pack.name}</h3>
                <p class="text-base my-4 flex-grow">${pack.description}</p>
                <div class="my-4">
                    <span class="text-5xl font-bold text-[#5D5C61]">${pack.price}€</span>
                </div>
                <ul class="text-left space-y-2 text-base mx-auto mb-6">
                    <li class="flex items-center"><span class="mr-2 text-xl" style="color:${pack.color};">&#10003;</span> ${pack.classes} Aulas</li>
                    <li class="flex items-center"><span class="mr-2 text-xl" style="color:${pack.color};">&#10003;</span> Validade de ${pack.validity}</li>
                    <li class="flex items-center"><span class="mr-2 text-xl" style="color:${pack.color};">&#10003;</span> Aulas partilháveis</li>
                </ul>
                <div class="mt-auto">
                    <div class="bg-gray-100 rounded-lg p-3">
                        <span class="font-semibold text-lg">${pricePerClass}€</span>
                        <span class="text-gray-600"> / aula</span>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    function renderChart() {
        const ctx = document.getElementById('packsChart');
        if (!ctx) return; 

        const chartData = {
            labels: packsData.map(p => p.name),
            datasets: [{
                label: 'Preço por Aula (€)',
                data: packsData.map(p => (p.price / p.classes).toFixed(2)),
                backgroundColor: packsData.map(p => p.color),
                borderColor: packsData.map(p => p.color),
                borderWidth: 1,
                borderRadius: 5,
            }]
        };

        new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(context.parsed.y);
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Custo por Aula (EUR)',
                            font: {
                                size: 14
                            }
                        },
                        ticks: {
                            callback: function(value, index, ticks) {
                                return value + '€';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // Chame as funções para renderizar os packs e o gráfico
    renderPacks();
    renderChart();
});