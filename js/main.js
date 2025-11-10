document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#menu-icon');
    const navlist = document.querySelector('.navlist');

    if (!menu || !navlist) return;

    menu.addEventListener('click', () => {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('open');
    });
});
document.addEventListener('DOMContentLoaded', function () {
  const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
  });
  sr.reveal('.hero-text', { delay: 200, origin: 'top' });
  sr.reveal('.hero-img', { delay: 400, origin: 'top' });
  sr.reveal('.icons', { delay: 600, origin: 'left' });
   sr.reveal('.scroll-down', { delay: 600, origin: 'right' });

   });