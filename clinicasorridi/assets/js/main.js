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
});
