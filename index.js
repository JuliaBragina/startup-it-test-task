const header = document.querySelector('.header');
const burgerMenuButton = header.querySelector('.header__bottom');

burgerMenuButton.addEventListener('click', () => {
  const burgerMenu = document.querySelector('.burgerMenu');
  burgerMenu.classList.toggle('burgerMenu_active_true');
  burgerMenuButton.classList.toggle('header__bottom_closeButton');
})