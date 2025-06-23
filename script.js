window.onload = function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.close-btn');
  const navItems = document.querySelectorAll('.nav-links a');

  // Open drawer
  hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
    hamburger.classList.add('active');
    overlay.classList.add('show');
  });

  // Close drawer by clicking the "X Close" link
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Only this one needs preventDefault
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    overlay.classList.remove('show');
  });

  // Close drawer and follow link when any nav link is clicked
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(() => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        overlay.classList.remove('show');
      }, 100); // Small delay allows link navigation to register first
    });
  });
};

