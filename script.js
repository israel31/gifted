document.addEventListener('DOMContentLoaded', function() {
    
    // --- Transparent Header on Scroll ---
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // When scrolled more than 50px
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            header.classList.toggle('nav-open'); 
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
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });
    }

    // --- NEW: Contact Form Logic ---
    const contactForm = document.querySelector('.contact-form-editorial');
    if (contactForm) {
        contactForm.addEventListener('submit', (ev) => {
            ev.preventDefault(); // Stop the form from submitting
            
            // Get values from the form
            const name = contactForm.querySelector('[name="name"]').value;
            const email = contactForm.querySelector('[name="email"]').value;
            const msg = contactForm.querySelector('[name="message"]').value;
            
            // **IMPORTANT: Change this to your real email address**
            const yourEmail = 'giftedgifted001@gmail.com'; 

            const subject = encodeURIComponent('GiFTED Contact - ' + name);
            const body = encodeURIComponent(`${msg}\n\nFrom: ${name} <${email}>`);
            
            // Open the user's default email client
            window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
        });
    }

});