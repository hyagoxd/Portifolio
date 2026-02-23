// Inicializa AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Cursor personalizado
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power3.out"
    });
});

// Adiciona classe active ao cursor quando em elementos interativos
const interactiveElements = document.querySelectorAll('a, button, .project-card, .project-link, .social-link');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        cursorFollower.classList.add('active');
    });

    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        cursorFollower.classList.remove('active');
    });
});

// Alternador de tema claro/escuro
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
});

// Verifica o tema salvo no localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

if (savedTheme === 'light') {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// Botão "Voltar ao topo"
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Efeito de header ao rolar
const header = document.querySelector('.glass-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Efeito de parallax nos cards
// Efeito de parallax nos cards - versão corrigida
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // posição X relativa ao card
        const y = e.clientY - rect.top;  // posição Y relativa ao card

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calcula o deslocamento do mouse em relação ao centro do card
        const xAxis = (centerX - x) / 15; // Reduzi a sensibilidade (de 25 para 15)
        const yAxis = (centerY - y) / 15;

        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        card.style.boxShadow = `${-xAxis}px ${yAxis}px 15px rgba(0,0,0,0.1)`;
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease, box-shadow 0.1s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
});