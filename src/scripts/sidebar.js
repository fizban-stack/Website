const sidebar = document.getElementById('sidebar');
const navToggle = document.getElementById('nav-toggle');

navToggle?.addEventListener('click', () => {
  const isOpen = sidebar?.classList.toggle('is-open') ?? false;
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.sidebar__group').forEach((group) => {
  const toggle = group.querySelector('.sidebar__toggle');
  const submenu = group.querySelector('.sidebar__submenu');
  if (!(toggle instanceof HTMLElement) || !submenu) return;

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
