// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const instaBtn = document.querySelector('.floating-insta');

    if (window.scrollY > 100) {
        if (header) header.classList.add('scrolled');
        if (instaBtn) instaBtn.classList.add('is-visible');
    } else {
        if (header) header.classList.remove('scrolled');
        if (instaBtn) instaBtn.classList.remove('is-visible');
    }
});

// Fade-in animation on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-active');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .fade-in-up').forEach(element => {
    observer.observe(element);
});

// Mobile menu placeholder (can be expanded)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        console.log('Mobile menu clicked');
        // Add mobile menu logic here
    });
}
// Rich subtitle animation - split text

