document.addEventListener('DOMContentLoaded', () => {
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    const navLinks = [...document.querySelectorAll('.nav-link')];

    const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

        if ('IntersectionObserver' in window)

            {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting)
                            return;

                        navLinks.forEach(link => {
                            const active = link.getAttribute('href') ==='#${entry.target.id}';

                            link.classList.toggle('active', active);
                        });
                    });
                }, { rootMargin: '-25% 0px -60% 0px', threshold: 0});

                sections.forEach(section => observer.observe(section));
            }

            const cards = document.querySelectorAll('.feature-card');
            cards.forEach(card => {
                card.addEventListener('pointermove', (event) => {
                    const rect = card.getBoundingClientRect();

                    card.style.setProperty('--pointer-x', '${event.clientX - rect.top}px');
                });
            });
});