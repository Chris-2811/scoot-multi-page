const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const primaryNav = document.getElementById('primary-navigation');

const toggleIcon = document.getElementById('toggle-faq');
const sectionFAQ = document.getElementById('faq');

// Mobile Nav
mobileNavToggle.addEventListener('click', (e) => {
  if (e.currentTarget.getAttribute('aria-expanded') === 'false') {
    e.currentTarget.setAttribute('aria-expanded', 'true');
    primaryNav.setAttribute('data-visible', 'true');
  } else {
    e.currentTarget.setAttribute('aria-expanded', 'false');
    primaryNav.setAttribute('data-visible', 'false');
  }
});

// FAQ
sectionFAQ.addEventListener('click', (e) => {
  if (e.target.classList.contains('faq-toggle')) {
    console.log('hello', e.target);
    if (e.target.getAttribute('aria-expanded') === 'false') {
      e.target.setAttribute('aria-expanded', 'true');
    } else {
      e.target.setAttribute('aria-expanded', 'false');
    }

    const targetContent = e.target.parentElement.querySelector('p');
    console.log(targetContent);

    if (e.target.getAttribute('aria-expanded') === 'true') {
      targetContent.classList.add('open');
    } else {
      targetContent.classList.remove('open');
    }
  }
});
