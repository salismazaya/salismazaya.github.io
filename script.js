document.addEventListener('DOMContentLoaded', () => {
    // Neobrutalism-style "jump" scrolling (no smooth scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'auto', // Diubah dari 'smooth'
                    block: 'start'
                });
            }
        });
    });
});