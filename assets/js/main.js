// Mobile menu toggle
const btn = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');

btn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('nav a').forEach(link =>
  link.addEventListener('click', () => nav.classList.remove('open'))
);
