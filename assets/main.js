// Mobile menu toggle
const btn = document.getElementById('menu-toggle');
const navList = document.querySelector('nav ul');

btn.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('nav a').forEach(link =>
  link.addEventListener('click', () => navList.classList.remove('open'))
);

// Highlight active section on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80;
    const sectionId = current.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`nav ul a[href="#${sectionId}"]`).classList.add('active');
    } else {
      document.querySelector(`nav ul a[href="#${sectionId}"]`).classList.remove('active');
    }
  });
});
