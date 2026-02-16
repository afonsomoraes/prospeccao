document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica do Badge "Aberto Agora" ---
    function checkBusinessStatus() {
        const now = new Date();
        const day = now.getDay(); // 0 = Domingo, 1 = Segunda, ...
        const hour = now.getHours();
        const minutes = now.getMinutes();
        
        const badge = document.getElementById('status-badge');
        const statusText = badge.querySelector('.status-text');
        
        let isOpen = false;

        // Seg (1) a Sex (5): 08:00 - 18:00
        if (day >= 1 && day <= 5) {
            if (hour >= 8 && hour < 18) {
                isOpen = true;
            }
        } 
        // Sábado (6): 08:00 - 12:00
        else if (day === 6) {
            if (hour >= 8 && hour < 12) {
                isOpen = true;
            }
        }
        
        // Atualiza a UI
        if (isOpen) {
            badge.className = 'status-badge open';
            statusText.textContent = 'Aberto Agora';
        } else {
            badge.className = 'status-badge closed';
            statusText.textContent = 'Fechado Agora';
        }
    }

    // Executa ao carregar e atualiza a cada minuto
    checkBusinessStatus();
    setInterval(checkBusinessStatus, 60000);


    // --- Menu Mobile ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.close-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    function toggleMenu() {
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    }

    if(mobileBtn) mobileBtn.addEventListener('click', toggleMenu);
    if(closeBtn) closeBtn.addEventListener('click', toggleMenu);
    if(overlay) overlay.addEventListener('click', toggleMenu);

    // Fechar menu ao clicar em link
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });


    // --- Scroll Suave para Links Internos (Compatibilidade) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Ajuste para o header fixo
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

});
