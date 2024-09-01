// Crée des éléments flottants dynamiquement
function createFloatingElement(className) {
    const element = document.createElement('div');
    element.className = `floating-element ${className}`;
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = Math.random() * 100 + 'vh';
    element.style.width = Math.random() * 30 + 10 + 'px';
    element.style.height = Math.random() * 30 + 10 + 'px';
    element.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
    element.style.animationDuration = (Math.random() * 10 + 5) + 's';
    element.style.opacity = Math.random() * 0.6 + 0.4;
    document.body.appendChild(element);
}

// Générer des étoiles et des ballons flottants
for (let i = 0; i < 20; i++) {
    createFloatingElement('star');
}

for (let i = 0; i < 10; i++) {
    createFloatingElement('balloon');
}

for (let i = 0; i < 5; i++) {
    createFloatingElement('confetti');
}

// Ajouter des animations au scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('p').forEach(p => {
    observer.observe(p);
});
