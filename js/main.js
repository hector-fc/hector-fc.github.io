// Back to top logic as before
const btn = document.getElementById('to-top');
window.onscroll = function() {
  if(document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});

// Hamburger menu logic
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', function() {
  navLinks.classList.toggle('show');
});

// Optionally close menu when a link is clicked (for better UX)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});
