const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelector('.nav-links');
const barIcon = document.querySelector('.hamburger .bar');
const closeIcon = document.querySelector('.hamburger .close');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Toggle between the hamburger and the X
  if (navLinks.classList.contains('active')) {
    barIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    barIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});
