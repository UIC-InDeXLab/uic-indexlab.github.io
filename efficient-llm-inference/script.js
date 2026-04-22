const tocLinks = Array.from(document.querySelectorAll('.toc-inner a'));
const sections = tocLinks
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const setActiveLink = () => {
  const y = window.scrollY + 120;
  let activeId = sections[0]?.id;

  sections.forEach(section => {
    if (section.offsetTop <= y) activeId = section.id;
  });

  tocLinks.forEach(link => {
    const isActive = link.getAttribute('href') === `#${activeId}`;
    link.classList.toggle('active', isActive);
  });
};

window.addEventListener('scroll', setActiveLink, { passive: true });
window.addEventListener('load', setActiveLink);
