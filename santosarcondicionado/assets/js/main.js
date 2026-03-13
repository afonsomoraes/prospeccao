document.addEventListener('DOMContentLoaded', () => {
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
