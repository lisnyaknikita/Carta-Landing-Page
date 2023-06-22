function burger() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body');
  const headerButtons = document.querySelector('.header__buttons');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active-burger');
    body.classList.toggle('locked');
    headerButtons.classList.toggle('inModal');
  });
}

burger();
