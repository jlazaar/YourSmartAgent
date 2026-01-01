document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple scroll reveal
    const reveal = () => {
        const reveals = document.querySelectorAll('.feature-card, .char-preview');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', reveal);

    // Initial setup for reveal
    document.querySelectorAll('.feature-card, .char-preview').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
    });

    reveal();

    // Horizontal scroll for characters on mouse wheel (optional enhancement)
    const slider = document.querySelector('.characters-slider');
    if (slider) {
        slider.addEventListener('wheel', (evt) => {
            evt.preventDefault();
            slider.scrollLeft += evt.deltaY;
        });
    }
});
