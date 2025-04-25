window.onload = function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.close-btn a'); // Select the X close button

    // Open drawer
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        overlay.classList.toggle('show'); // Show overlay when drawer is open
    });

    // Close drawer when clicking the overlay
    overlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        overlay.classList.remove('show');
    });

    // Close drawer when clicking the X button
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent link default behavior
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        overlay.classList.remove('show');
    });
};
