document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        if(this.getAttribute('href') !== '#') {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if(targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70, 
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    const calculatorsLink = document.getElementById('calculators-link');
    const glossaryLink = document.getElementById('glossary-link');
    const calculatorsModal = document.getElementById('calculators-modal');
    const glossaryModal = document.getElementById('glossary-modal');
    const closeButtons = document.querySelectorAll('.close-button');
    
    calculatorsLink.addEventListener('click', function(e) {
      e.preventDefault();
      calculatorsModal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
    
    glossaryLink.addEventListener('click', function(e) {
      e.preventDefault();
      glossaryModal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
    
    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        calculatorsModal.style.display = 'none';
        glossaryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      });
    });
    
    window.addEventListener('click', function(e) {
      if (e.target === calculatorsModal) {
        calculatorsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
      if (e.target === glossaryModal) {
        glossaryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.content-card').forEach(card => {
      observer.observe(card);
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    document.head.insertAdjacentHTML('beforeend', `
      <style>
        .fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      </style>
    `);
  });