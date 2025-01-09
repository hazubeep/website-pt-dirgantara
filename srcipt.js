// Hamburger Menu Dropdown
document.addEventListener('DOMContentLoaded', function() {
      const hamburger = document.querySelector('.hamburger');
      const menu = document.querySelector('.menu');
      const overlay = document.querySelector('.overlay');
      
      hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = this.classList.contains('active') ? 'hidden' : '';
      });
      
      overlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
        this.classList.remove('active');
        document.body.style.overflow = '';
      });

      const menuLinks = document.querySelectorAll('.menu a');
      menuLinks.forEach(link => {
        link.addEventListener('click', function() {
          hamburger.classList.remove('active');
          menu.classList.remove('active');
          overlay.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    });