document.querySelectorAll('.nav a, .link, .project, .touch').forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = new URL(link.href, window.location.href).hash;
        const target = targetId ? document.querySelector(targetId) : null;

        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', targetId);
    });
});
