const proc = document.querySelector('.mobile-menu');
const procBtnOpen = document.querySelector('.proc-btn-open');
const procBtnClose = document.querySelector('.proc-btn-close');

const toggleProc = () => proc.classList.toggle('is-open');

procBtnOpen.addEventListener('click', toggleProc);
procBtnClose.addEventListener('click', toggleProc);