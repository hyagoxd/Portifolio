// Dados dos artigos e vídeos
const conteudos = [
    {
        id: 1,
        titulo: "Proteção de Nascentes no Vale do Ribeira",
        tipo: "artigo",
        imagem: "img/artigo1.jpg",
        data: "15/03/2024",
        tempo: "5 min leitura",
        descricao: "Técnicas comprovadas para proteção e recuperação de nascentes na região do Vale do Ribeira.",
        link: "#"
    },
    {
        id: 2,
        titulo: "Documentário: Rio Ribeira em Perigo",
        tipo: "video",
        imagem: "img/video1.jpg",
        data: "22/02/2024",
        tempo: "12 min",
        descricao: "A situação atual do Rio Ribeira e os desafios para sua preservação.",
        link: "#"
    },
    {
        id: 3,
        titulo: "Como Monitorar a Qualidade da Água",
        tipo: "guia",
        imagem: "img/guia1.jpg",
        data: "10/01/2024",
        tempo: "8 min leitura",
        descricao: "Passo a passo para realizar o monitoramento básico da qualidade da água em rios e nascentes.",
        link: "#"
    },
    {
        id: 4,
        titulo: "Agricultura Sustentável e Recursos Hídricos",
        tipo: "artigo",
        imagem: "img/artigo2.jpg",
        data: "05/01/2024",
        tempo: "7 min leitura",
        descricao: "Como práticas agrícolas sustentáveis podem proteger os recursos hídricos do Vale do Ribeira.",
        link: "#"
    },
    {
        id: 5,
        titulo: "Técnicas de Reflorestamento de Margens",
        tipo: "video",
        imagem: "img/video2.jpg",
        data: "18/12/2023",
        tempo: "9 min",
        descricao: "Aprenda como replantar vegetação nativa nas margens de rios e córregos.",
        link: "#"
    },
    {
        id: 6,
        titulo: "Como Organizar um Mutirão de Limpeza",
        tipo: "guia",
        imagem: "img/guia2.jpg",
        data: "30/11/2023",
        tempo: "10 min leitura",
        descricao: "Manual completo para organizar ações comunitárias de limpeza de rios e nascentes.",
        link: "#"
    }
];

// Elementos DOM
const contentGrid = document.querySelector('.content-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const videoModal = document.getElementById('videoModal');
const closeModalBtn = document.querySelector('.close-modal');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

// Renderizar conteúdos
function renderConteudos(filter = 'all') {
    contentGrid.innerHTML = '';
    
    const conteudosFiltrados = filter === 'all' 
        ? conteudos 
        : conteudos.filter(item => item.tipo === filter);
    
    conteudosFiltrados.forEach(conteudo => {
        const card = document.createElement('div');
        card.className = `content-card ${conteudo.tipo}`;
        
        const badgeText = conteudo.tipo === 'artigo' ? 'Artigo' : 
                         conteudo.tipo === 'video' ? 'Vídeo' : 'Guia';
        
        const playIcon = conteudo.tipo === 'video' ? 
            `<div class="play-icon"><i class="fas fa-play"></i></div>` : '';
        
        const linkText = conteudo.tipo === 'artigo' ? 'Ler Artigo' : 
                        conteudo.tipo === 'video' ? 'Assistir' : 'Baixar Guia';
        
        card.innerHTML = `
            <div class="card-image" style="background-image: url('${conteudo.imagem}')">
                <div class="card-badge">${badgeText}</div>
                ${playIcon}
            </div>
            <div class="card-content">
                <h3>${conteudo.titulo}</h3>
                <p class="card-meta">
                    <i class="fas fa-calendar-alt"></i> ${conteudo.data} | 
                    <i class="fas fa-clock"></i> ${conteudo.tempo}
                </p>
                <p class="card-excerpt">${conteudo.descricao}</p>
                <a href="${conteudo.link}" class="card-link">
                    ${linkText} <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        // Adiciona evento para abrir modal se for vídeo
        if (conteudo.tipo === 'video') {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('a')) {
                    openVideoModal(conteudo);
                }
            });
        }
        
        contentGrid.appendChild(card);
    });
}

// Abrir modal de vídeo
function openVideoModal(conteudo) {
    document.querySelector('.video-title').textContent = conteudo.titulo;
    document.querySelector('.video-thumbnail').src = conteudo.imagem;
    document.querySelector('.video-description').textContent = conteudo.descricao;
    
    const playBtn = document.querySelector('.play-btn');
    playBtn.onclick = () => {
        window.location.href = conteudo.link;
    };
    
    videoModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Fechar modal
function closeVideoModal() {
    videoModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Menu mobile
function toggleMenu() {
    mainNav.classList.toggle('active');
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Renderiza todos os conteúdos inicialmente
    renderConteudos();
    
    // Filtros
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderConteudos(button.dataset.filter);
        });
    });
    
    // Modal
    closeModalBtn.addEventListener('click', closeVideoModal);
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });
    
    // Menu mobile
    menuToggle.addEventListener('click', toggleMenu);
    
    // Fecha menu ao clicar em um link
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });
});