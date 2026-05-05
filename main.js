document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(251, 251, 255, 0.9)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.padding = '1.2rem 0';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.padding = '2rem 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // 2. Custom Cursor (Subtle)
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 3. Scroll Reveal for Sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.hero-content, .about-text, .stat-card, .exp-item, .bento-box');
    revealElements.forEach(el => {
        el.classList.add('reveal-on-scroll');
        revealObserver.observe(el);
    });

    // 4. Modal Logic
    const modal = document.getElementById('referenceModal');
    const btn = document.getElementById('openReference');
    const span = document.querySelector('.close-modal');

    if (btn && modal) {
        btn.onclick = () => modal.style.display = 'block';
        span.onclick = () => modal.style.display = 'none';
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        };
    }

    // 5. Mobile Menu Toggle (Simplified)
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle && navbar) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            navbar.classList.toggle('nav-active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navbar.classList.remove('nav-active');
            });
        });
    }

    // 6. Handle Touch Devices for Cursor
    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
    }
});
