// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  
  // Highlight active navigation link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  
  window.addEventListener('scroll', () => {
      let current = "";
      const navbarHeight = document.querySelector('nav').offsetHeight; // Adjust for fixed navbar
  
      sections.forEach(section => {
          const sectionTop = section.offsetTop - navbarHeight - 50; // Add threshold
          const sectionBottom = sectionTop + section.clientHeight;
          
          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
              current = section.getAttribute('id');
          }
      });
  
      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
              link.classList.add('active');
          }
      });
  });