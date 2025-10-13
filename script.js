document.addEventListener('DOMContentLoaded', function() {
    
    // --- Animated Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // --- Scroll Animation ---
    const elementsToAnimate = document.querySelectorAll('.fade-up');
    
    if (elementsToAnimate.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // CORRECTED THIS LINE: 'isIntersecting' is the correct property.
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Triggers when 10% of the element is visible
        });

        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });
    }
});