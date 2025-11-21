document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mainContent = document.getElementById('main-content');
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('#mobile-nav a');

    const openMenu = () => {
        mobileNav.classList.add('open');
        mainContent.classList.add('menu-open');
        mobileMenuBtn.classList.add('open');
    };

    const closeMenu = () => {
        mobileNav.classList.remove('open');
        mainContent.classList.remove('menu-open');
        mobileMenuBtn.classList.remove('open');
    };

    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (mobileNav.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    closeMenuBtn.addEventListener('click', closeMenu);
    mobileNav.addEventListener('click', closeMenu);
    
    // Stop propagation for clicks inside the nav content
    mobileNav.querySelector('nav').addEventListener('click', e => e.stopPropagation());

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
