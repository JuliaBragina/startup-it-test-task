const header = document.querySelector('.header');
const headerContainer = header.querySelector('.header__container');
const burgerMenuButton = headerContainer.querySelector('.header__bottom');

burgerMenuButton.addEventListener('click', () => {
  const burgerMenu = document.querySelector('.burgerMenu');
  burgerMenu.classList.toggle('burgerMenu_active_true');
  burgerMenuButton.classList.toggle('header__bottom_closeButton');
})