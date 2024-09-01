// script.js

document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.container p');

    // Options pour l'observateur
    const observerOptions = {
        root: null, // Utilise le viewport par défaut
        rootMargin: '0px',
        threshold: 0.1 // 10% de l'élément doit être visible pour déclencher l'apparition
    };

    // Création d'un observateur
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1'; // Rendre visible
                entry.target.style.transform = 'translateY(0)'; // Position de base
                entry.target.classList.add('visible'); // Ajoute la classe visible
                observer.unobserve(entry.target); // Stopper l'observation après l'apparition
            }
        });
    }, observerOptions);

    // Observer chaque paragraphe
    paragraphs.forEach(paragraph => {
        observer.observe(paragraph);
    });
});
