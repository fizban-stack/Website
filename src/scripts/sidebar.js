const sidebar = document.getElementById('sidebar');
const navToggle = document.getElementById('nav-toggle');
const currentPath = window.location.pathname;

navToggle?.addEventListener('click', () => {
  const isOpen = sidebar?.classList.toggle('is-open') ?? false;
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.sidebar__group').forEach((group) => {
  const link = group.querySelector('.sidebar__group-link');
  const toggle = group.querySelector('.sidebar__toggle');
  const submenu = group.querySelector('.sidebar__submenu');
  if (!(toggle instanceof HTMLElement) || !submenu) return;

  const isCurrentSection = link instanceof HTMLAnchorElement && currentPath.startsWith(link.getAttribute('href') ?? '#');
  if (!isCurrentSection) {
    toggle.setAttribute('aria-expanded', 'false');
    submenu.classList.add('is-collapsed');
  }

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    submenu.classList.toggle('is-collapsed', expanded);
  });
});

sidebar?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});
