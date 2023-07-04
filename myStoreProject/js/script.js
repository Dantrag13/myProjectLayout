(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('nav');
  const body = document.querySelector('body');

  const menuLinks = document.querySelectorAll('.header__list');
  console.log(burgerItem);


  burgerItem.addEventListener('click', (e) => {
    console.log(e);
    burgerItem.classList.toggle('active');
    body.classList.toggle('lock');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav_active');
  });
  if (window.innerWidth < 768) {
    console.log(menuLinks);
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
      });
    }
  }
}());