const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-reveal');
            
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.15 
});

const hiddenElements = document.querySelectorAll('.hidden-reveal');

hiddenElements.forEach((el) => observer.observe(el));

// Scroll spy
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observerSection = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            if (correspondingLink) correspondingLink.classList.add('active');
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observerSection.observe(section));

const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});