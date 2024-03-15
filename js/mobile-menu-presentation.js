const pres = document.querySelector('.mobile-menu');
const presBtnOpen = document.querySelector('.pres-btn-open');
const presBtnClose = document.querySelector('.pres-btn-close');

const togglePres = () => pres.classList.toggle('is-open');

presBtnOpen.addEventListener('click', togglePres);
presBtnClose.addEventListener('click', togglePres);