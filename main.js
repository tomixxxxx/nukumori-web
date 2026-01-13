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
document.addEventListener('DOMContentLoaded', () => {
    const subtitles = document.querySelectorAll('.rich-subtitle');

    subtitles.forEach(subtitle => {
        const textNodes = [];
        // Extract text nodes and BRs
        subtitle.childNodes.forEach(node => {
            if (node.nodeType === 3) { // Text node
                const text = node.textContent.trim();
                // Only process non-empty text
                if (text) {
                    const chars = text.split('').map(char => `<span class="char">${char}</span>`).join('');
                    const tempSpan = document.createElement('span');
                    tempSpan.innerHTML = chars;
                    // Move children to a fragment to insert
                    while (tempSpan.firstChild) textNodes.push(tempSpan.firstChild);
                }
            } else if (node.tagName === 'BR') {
                textNodes.push(document.createElement('br'));
            }
        });

        // Clear and append new nodes
        subtitle.innerHTML = '';
        let delayIndex = 0;
        textNodes.forEach(node => {
            subtitle.appendChild(node);
            if (node.classList && node.classList.contains('char')) {
                // Set custom property or style for delay
                node.style.transitionDelay = `${0.8 + (delayIndex * 0.08)}s`; // Start after main slide-in (0.8s)
                delayIndex++;
            }
        });
    });
});
