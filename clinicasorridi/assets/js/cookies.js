document.addEventListener('DOMContentLoaded', function () {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');

    // Verifica se já existe uma escolha salva
    const cookieChoice = localStorage.getItem('sorridi_cookies');

    if (!cookieChoice) {
        cookieBanner.classList.remove('hidden');
        // Adiciona classe flex se necessário para o design
        cookieBanner.classList.add('flex');
    } else {
        cookieBanner.remove(); // Remove do DOM se já foi escolhido
    }

    acceptBtn.addEventListener('click', function () {
        localStorage.setItem('sorridi_cookies', 'accepted');
        hideBanner();
    });

    declineBtn.addEventListener('click', function () {
        localStorage.setItem('sorridi_cookies', 'refused');
        hideBanner();
    });

    function hideBanner() {
        cookieBanner.classList.add('opacity-0');
        setTimeout(() => {
            cookieBanner.remove();
        }, 500);
    }
});
