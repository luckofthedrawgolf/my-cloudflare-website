window.onload = function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('navLinks');  // <-- using getElementById here
  const barIcon = document.querySelector('.bar');
  const closeIcon = document.querySelector('.close');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');

    if (hamburger.classList.contains('active')) {
      barIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    } else {
      barIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  });
};
