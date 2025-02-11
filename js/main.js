// 1. MOBILE NAV TOGGLE
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// 2. DARK MODE TOGGLE
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  darkModeToggle.setAttribute('aria-pressed', isDarkMode.toString());

  if (isDarkMode) {
    darkModeToggle.innerHTML = '<i class="fas fa-sun" aria-hidden="true"></i>';
  } else {
    darkModeToggle.innerHTML = '<i class="fas fa-moon" aria-hidden="true"></i>';
  }
});

// 3. SCROLL-TO-TOP BUTTON
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 4. PROJECT FILTERING
const filterButtons = document.querySelectorAll('.project-filter button');
const allProjectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove 'active' from all
    filterButtons.forEach(b => b.classList.remove('active'));
    // Add 'active' to clicked
    btn.classList.add('active');

    // Filter logic
    const filterValue = btn.getAttribute('data-filter');
    allProjectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (filterValue === 'all' || cardCategory.includes(filterValue)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// 5. CONFETTI ON FORM SUBMISSION
function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const duration = 2000; // 2s confetti
  const end = Date.now() + duration;

  // Simple confetti animation
  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

  setTimeout(() => {
    form.submit();
  }, duration);

  return false;
}

// 6. DYNAMIC FOOTER YEAR
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();