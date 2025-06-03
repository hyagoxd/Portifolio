/**
 * SISTEMA COMPLETO DO SITE VALE DO RIBEIRA
 * Controla todas as interações e funcionalidades do site
 */

document.addEventListener('DOMContentLoaded', function() {
  // =============================================
  // LOADER
  // =============================================
  const loader = document.querySelector('.loader');
  if (loader) {
    window.addEventListener('load', function() {
      setTimeout(function() {
        loader.style.opacity = '0';
        setTimeout(function() {
          loader.style.display = 'none';
        }, 600);
      }, 1500);
    });
  }

  // =============================================
  // CURSOR PERSONALIZADO
  // =============================================
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  if (cursor && cursorFollower) {
    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      setTimeout(function() {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
      }, 100);
    });
    
    const interactiveElements = document.querySelectorAll(
      'a, button, input, .card, .campaign-card, .ranking-card'
    );
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', function() {
        cursor.classList.add('active');
        cursorFollower.classList.add('active');
      });
      
      el.addEventListener('mouseleave', function() {
        cursor.classList.remove('active');
        cursorFollower.classList.remove('active');
      });
    });
  }

  // =============================================
  // TOGGLE DE TEMA
  // =============================================
  const themeSwitcher = document.getElementById('theme-switcher');
  if (themeSwitcher) {
    const currentTheme = localStorage.getItem('theme') || 'light';

    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      
      const icon = themeSwitcher.querySelector('i');
      if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    }

    applyTheme(currentTheme);

    themeSwitcher.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  
  // =============================================
  // MENU MOBILE
  // =============================================
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      this.classList.toggle('active');
      mainNav.classList.toggle('active');
      
      if (mainNav.classList.contains('active')) {
        document.querySelectorAll('.main-nav a').forEach(link => {
          link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
          });
        });
      }
    });
  }

  // =============================================
  // MODAL DE INSCRIÇÃO
  // =============================================
  const modal = document.getElementById('campaign-modal');
  const joinButtons = document.querySelectorAll('.join-btn');
  const closeModal = document.querySelector('.close-modal');
  
  if (modal && joinButtons.length > 0 && closeModal) {
    joinButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const campaign = this.getAttribute('data-campaign');
        document.getElementById('campaign-id').value = campaign;
        
        const modalTitle = document.getElementById('modal-title');
        const campaignTitle = this.closest('.campaign-content').querySelector('h3').textContent;
        modalTitle.textContent = `Inscreva-se: ${campaignTitle}`;
        
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      });
    });
    
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
      }
    });
    
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
          name: document.getElementById('modal-name').value,
          email: document.getElementById('modal-email').value,
          phone: document.getElementById('modal-phone').value,
          campaign: document.getElementById('campaign-id').value
        };
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('span');
        const btnIcon = submitBtn.querySelector('i');
        
        btnText.textContent = 'Enviando...';
        btnIcon.classList.remove('fa-paper-plane');
        btnIcon.classList.add('fa-spinner', 'fa-spin');
        
        setTimeout(() => {
          btnText.textContent = 'Inscrito!';
          btnIcon.classList.remove('fa-spinner', 'fa-spin');
          btnIcon.classList.add('fa-check');
          
          setTimeout(() => {
            btnText.textContent = 'Confirmar Inscrição';
            btnIcon.classList.remove('fa-check');
            btnIcon.classList.add('fa-paper-plane');
            signupForm.reset();
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
            
            alert(`Obrigado por se inscrever, ${formData.name}! Entraremos em contato em breve sobre a ação.`);
          }, 2000);
        }, 1500);
      });
    }
  }

  // =============================================
  // ANIMAÇÕES AO ROLAR
  // =============================================
  function animateOnScroll() {
    const elements = document.querySelectorAll('[data-aos]');
    if (elements.length === 0) return;
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.classList.add('aos-animate');
      }
    });
  };
  
  const animatedElements = document.querySelectorAll('.education-card, .campaign-card, .ranking-card');
  if (animatedElements.length > 0) {
    animatedElements.forEach((element, index) => {
      element.setAttribute('data-aos', 'fade-up');
      element.style.opacity = '1';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
  }

  // =============================================
  // ANIMAÇÕES GSAP
  // =============================================
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero text animation
    gsap.from('.hero-text h2, .hero-text .subtitle', {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out'
    });
    
    gsap.from('.hero-buttons', {
      duration: 0.8,
      y: 30,
      opacity: 0,
      delay: 0.4,
      ease: 'back.out'
    });
    
    gsap.from('.scroll-down', {
      duration: 1,
      opacity: 0,
      delay: 1,
      ease: 'power2.inOut'
    });
    
    // Section animations
    gsap.utils.toArray('section').forEach((section, i) => {
      if (i > 0) { // Skip hero section
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.out'
        });
      }
    });
    
    // Card animations
    gsap.utils.toArray('.education-card, .campaign-card, .ranking-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'back.out'
      });
    });
  }

  // =============================================
  // INICIALIZAÇÃO FINAL
  // =============================================
  document.documentElement.classList.add('js-enabled');
  document.documentElement.classList.remove('no-js');
});
