const mobileBtnEl = document.querySelector('.icon-btn');
const navLinks = document.querySelectorAll('.header-nav-links');

window.addEventListener('resize', () => {
    const viewPortWidth = window.innerWidth;
    if (viewPortWidth > 950) document.body.classList.remove('open');
});

mobileBtnEl.addEventListener('click', () => {
    document.body.classList.toggle('open');
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (!document.body.classList.contains('open')) return;
        document.body.classList.remove('open');
    });
});
