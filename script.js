const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const barIcon = document.querySelector('.hamburger .bar');
const closeIcon = document.querySelector('.hamburger .close');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  if (navLinks.classList.contains('active')) {
    barIcon.style.display = 'none';       // Hide hamburger (3 bars)
    closeIcon.style.display = 'block';    // Show X icon
  } else {
    barIcon.style.display = 'block';      // Show hamburger
    closeIcon.style.display = 'none';     // Hide X icon
  }
});
