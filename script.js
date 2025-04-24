window.onload = function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const barIcons = document.querySelectorAll('.bar');  // Grabs ALL bars now!
  const closeIcon = document.querySelector('.close');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');

    if (hamburger.classList.contains('active')) {
      barIcons.forEach(bar => bar.style.display = 'none');   // Hide all three bars
      closeIcon.style.display = 'block';                     // Show the X icon
    } else {
      barIcons.forEach(bar => bar.style.display = 'block');  // Show all three bars
      closeIcon.style.display = 'none';                      // Hide the X icon
    }
  });
};

