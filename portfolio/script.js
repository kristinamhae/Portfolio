function toggleProject(id) {
  const card = document.getElementById(id);
  card.classList.toggle('expanded');
  const btn = card.querySelector('.toggle-btn');
  btn.textContent = card.classList.contains('expanded') ? 'View Less' : 'View More';
}

// Animate skill items as they enter the viewport
const skillItems = document.querySelectorAll('.skill');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

skillItems.forEach(item => observer.observe(item));
