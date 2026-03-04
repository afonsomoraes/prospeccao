// Scripts personalizados para a landing page do cliente

document.addEventListener('DOMContentLoaded', () => {
    console.log('Landing page do cliente carregada!');

    // Exemplo: Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
