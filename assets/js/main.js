document.addEventListener('DOMContentLoaded', () => {
    // Simple parallax effect for hero (from homepage)
    window.addEventListener('mousemove', (e) => {
        const hero = document.querySelector('.hero-parallax img');
        if(hero) {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            hero.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
        }
    });

    // Mobile Menu Toggle logic
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('mobile-menu-icon');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            if (mobileMenu.classList.contains('active')) {
                menuIcon.textContent = 'close';
                document.body.style.overflow = 'hidden';
            } else {
                menuIcon.textContent = 'menu';
                document.body.style.overflow = '';
            }
        });
    }
});

// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});
