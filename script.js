// Toggle Hamburger Menu
const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Welcome overlay
window.addEventListener("load", () => {
  setTimeout(() => {
    const overlay = document.getElementById("welcome-overlay");
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 500);
  }, 2000);
});
