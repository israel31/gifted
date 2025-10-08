/* app.js - simple interactions for GiFTED site */
/* Replace YOUR_WHATSAPP_NUMBER e.g. +2348112223333 */

document.addEventListener('DOMContentLoaded', function(){
  // Scroll reveal for elements with .fade-in
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('show');
    });
  }, {threshold:0.18});
  document.querySelectorAll('.fade-in').forEach(el=>io.observe(el));

  // Tower rotation on scroll (applies to elements with data-rotate)
  const tower = document.querySelector('.tower-svg');
  if(tower){
    window.addEventListener('scroll', ()=>{
      const rect = tower.getBoundingClientRect();
      const vh = window.innerHeight;
      // map center position to -12deg .. 12deg
      const offset = (rect.top + rect.height/2 - vh/2) / (vh/2);
      const angle = Math.max(-1, Math.min(1, offset)) * 12; // clamp
      tower.style.transform = `rotateY(${angle}deg)`;
    });
  }

  // CTA "download deck" (fake modal/download)
  document.querySelectorAll('[data-deck]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const link = btn.getAttribute('data-deck');
      // open in new tab - replace link with actual PDF url when ready
      if(link && link !== '#') window.open(link,'_blank');
      else alert('Investor deck link not set. Replace data-deck attribute with your investor-deck.pdf URL.');
    });
  });

  // WhatsApp quick chat
  document.querySelectorAll('[data-whatsapp]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const number = btn.getAttribute('data-whatsapp'); // in format +234...
      const text = encodeURIComponent("Hello GiFTED — I want to learn more / partner / invest.");
      const url = `https://wa.me/${number.replace(/\D/g,'')}?text=${text}`;
      window.open(url,'_blank');
    });
  });

  // Simple email contact (mailto fallback)
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', (ev)=>{
      ev.preventDefault();
      const name = contactForm.querySelector('[name="name"]').value;
      const email = contactForm.querySelector('[name="email"]').value;
      const msg = contactForm.querySelector('[name="message"]').value;
      const subject = encodeURIComponent('GiFTED Contact - ' + name);
      const body = encodeURIComponent(`${msg}\n\nContact: ${name} <${email}>`);
      window.location.href = `mailto:hello@gifted.example?subject=${subject}&body=${body}`;
    });
  }
});