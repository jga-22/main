const filters = document.querySelectorAll('.filter');
const timelineItems = document.querySelectorAll('.timeline__item[data-category]');
const yearEl = document.getElementById('year');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const category = filter.dataset.filter;

    filters.forEach((btn) => btn.classList.remove('filter--active'));
    filter.classList.add('filter--active');

    timelineItems.forEach((item) => {
      const matches = category === 'all' || item.dataset.category === category;
      item.classList.toggle('timeline__item--hidden', !matches);
    });
  });
});

yearEl.textContent = new Date().getFullYear();

document.querySelectorAll('[data-scroll]').forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    const target = document.querySelector(trigger.dataset.scroll);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Collapse/expand panels (Experience, Education)
document.querySelectorAll('.collapse-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const panel = btn.closest('.panel');
    const isCollapsed = panel.classList.toggle('panel--collapsed');

    // Update aria-expanded and icon (+ to expand, - to collapse)
    btn.setAttribute('aria-expanded', String(!isCollapsed));
    btn.textContent = isCollapsed ? '+' : '-';

    // Update accessible label using the panel's heading text
    const title = panel.querySelector('h2')?.textContent?.trim() || 'Section';
    btn.setAttribute('aria-label', (isCollapsed ? 'Expand ' : 'Collapse ') + title);
    btn.setAttribute('title', isCollapsed ? 'Expand' : 'Collapse');

    // If we have an aria-controls target, ensure it's hidden/shown for a11y
    const targetId = btn.getAttribute('aria-controls');
    if (targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        target.hidden = isCollapsed;
      }
    }

    // Also hide/show filters bar for accessibility
    const filtersBar = panel.querySelector('.panel__filters');
    if (filtersBar) {
      filtersBar.hidden = isCollapsed;
    }
  });
});
