// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Terminal typing effect (respects reduced motion)
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const typeTarget = document.getElementById('type-target');
const fullText = "Full-stack developer. EEE-trained. Ships production code.";
if (prefersReduced) {
    typeTarget.textContent = fullText;
} else {
    let i = 0;
    function typeChar() {
        if (i <= fullText.length) {
            typeTarget.textContent = fullText.slice(0, i);
            i++;
            setTimeout(typeChar, 32);
        }
    }
    typeChar();
}

// Scroll reveal
const revealEls = document.querySelectorAll('.section-head, .about-grid, .t-item, .skill-card, .project-card, .edu-item, .contact-panel');
revealEls.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));