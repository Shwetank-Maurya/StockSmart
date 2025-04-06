document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        this.classList.add('active');
      });
    });
  
    const animateElements = () => {
      const allCards = document.querySelectorAll('.stock-card, .index-card, .market-cap-card, .tool-card');
      
      allCards.forEach((card, index) => {
        const delay = 0.05 + (index % 4) * 0.05;
        card.style.animationDelay = `${delay}s`;
      });
    };
  
    animateElements();
  
    const handleResponsiveNav = () => {
      const nav = document.querySelector('.nav');
      if (window.innerWidth < 768) {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'flex';
      }
    };
  
    handleResponsiveNav();
  
    window.addEventListener('resize', handleResponsiveNav);
  
    const stockCards = document.querySelectorAll('.stock-card');
    stockCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.boxShadow = 'var(--hover-shadow)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'var(--shadow)';
      });
    });
  
    const simulatePriceChanges = () => {
      const stockPrices = document.querySelectorAll('.stock-price');
      const stockChanges = document.querySelectorAll('.stock-change');
      
      stockPrices.forEach((price, index) => {
        const change = stockChanges[index];
        
        if (Math.random() > 0.7) {
          const currentPrice = parseFloat(price.textContent.replace('₹', '').replace(',', ''));
          const fluctuation = currentPrice * (Math.random() * 0.01 - 0.005); // -0.5% to +0.5%
          const newPrice = currentPrice + fluctuation;
          
          price.textContent = `₹${newPrice.toFixed(1)}`;
          
          const percentChange = (fluctuation / currentPrice) * 100;
          change.textContent = `${percentChange >= 0 ? '+' : ''}${percentChange.toFixed(2)}%`;
          
          if (percentChange >= 0) {
            change.classList.add('rise');
            change.classList.remove('fall');
          } else {
            change.classList.add('fall');
            change.classList.remove('rise');
          }
        }
      });
      
      setTimeout(simulatePriceChanges, Math.random() * 5000 + 5000);
    };
    
    setTimeout(simulatePriceChanges, 3000);
  });