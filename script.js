// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    })
);

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

// Scroll reveal (.reveal is already set in the HTML)
const revealEls = document.querySelectorAll('.reveal');

if (prefersReduced) {
    revealEls.forEach(el => el.classList.add('in'));
} else {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el, n) => {
        el.style.transitionDelay = (n % 4) * 60 + 'ms';
        io.observe(el);
    });
}

// Scroll progress bar and active nav link
const progress = document.getElementById('progress');
const sections = [...document.querySelectorAll('main section[id]')];
const navAnchors = document.querySelectorAll('nav.links a');

function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    if (progress) progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';

    let current = '';
    sections.forEach(s => {
        if (s.getBoundingClientRect().top <= 140) current = s.id;
    });
    navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Copy email button
const copyBtn = document.getElementById('copyEmail');
const copyStatus = document.getElementById('copyStatus');
if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
        const email = copyBtn.dataset.email;
        try {
            await navigator.clipboard.writeText(email);
            copyStatus.textContent = 'Copied ' + email;
        } catch {
            copyStatus.textContent = email;
        }
        setTimeout(() => (copyStatus.textContent = ''), 2500);
    });
}