const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('#navLinks');
const barIcon = document.querySelector('.bar');
const closeIcon = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');

  if (hamburger.classList.contains('active')) {
    barIcon.style.display = 'none';        // Hide hamburger bars
    closeIcon.style.display = 'block';     // Show X icon
  } else {
    barIcon.style.display = 'block';       // Show hamburger bars
    closeIcon.style.display = 'none';      // Hide X icon
  }
});
