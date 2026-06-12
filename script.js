console.log("Portfolio loaded successfully!");[cite: 1]

// Scroll Reveal Animation Engine
const hiddenElements = document.querySelectorAll('.hidden');[cite: 1]

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {[cite: 1]
            entry.target.classList.add('show');[cite: 1]
            // Unobserving elements helps free up visual processing lag on scrolls
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15 // Triggers animations cleanly when 15% of container shows
});

hiddenElements.forEach((el) => observer.observe(el));[cite: 1]