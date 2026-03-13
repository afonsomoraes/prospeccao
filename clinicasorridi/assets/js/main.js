// Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Reveal animations on scroll (basic implementation)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    // Placeholder image removal simulator
    setTimeout(() => {
        const heroPlaceholder = document.getElementById('img-placeholder-hero');
        if (heroPlaceholder) {
            heroPlaceholder.style.display = 'none';
        }
    }, 2000);

    // Regra Global: Links externos abrem em nova aba
    const currentDomain = window.location.hostname;
    document.querySelectorAll('a[href]').forEach(link => {
        const url = new URL(link.href, window.location.origin);
        if (url.hostname !== currentDomain && url.hostname !== '' && !link.href.startsWith('#') && !link.href.startsWith('javascript:')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
