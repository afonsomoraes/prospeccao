// Main JavaScript for Santos Ar Condicionado

document.addEventListener('DOMContentLoaded', () => {

    console.log('Santos Ar - Loaded');

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('button.md\\:hidden');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});
