document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const drawer = document.querySelector(".mobile-drawer");
  const closeBtn = document.getElementById("close-btn");
  const drawerLinks = document.querySelectorAll(".drawer-links a");

  // Open drawer
  hamburger.addEventListener("click", function () {
    drawer.classList.add("open");
  });

  // Close drawer
  closeBtn.addEventListener("click", function () {
    drawer.classList.remove("open");
  });

  // Close drawer on link click
  drawerLinks.forEach(link => {
    link.addEventListener("click", function () {
      drawer.classList.remove("open");
    });
  });
});
