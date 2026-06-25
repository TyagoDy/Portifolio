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