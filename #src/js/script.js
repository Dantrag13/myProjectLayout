function smoothScroll() {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('nav');
  const body = document.querySelector('body');

  const menuLinks = document.querySelectorAll('.header__list');


  burgerItem.addEventListener('click', (e) => {
    // console.log(window.innerWidth);
    burgerItem.classList.toggle('active');
    body.classList.toggle('lock');
  });
  // menuCloseItem.addEventListener('click', () => {
  //   menu.classList.remove('header__nav_active');
  // });
  if (window.innerWidth < 768) {
    console.log(menuLinks);
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
      });
    }
  }
};
smoothScroll();

const body = document.querySelector('body');
const blure_filter = document.querySelector('.blure__filter-bg');
const filters_container = document.querySelector('.products-store__filters-container');
const filters_arrow = document.querySelector('.filters-header__arrow');
const sidebar_toggle_btn = document.querySelector('.filter__sidebar-toggle-btn');
const products_store_main_containern = document.querySelector('.products-store__main-container');
// console.log('blure_filter', blure_filter);
// console.log('filters_arrow', filters_arrow);
// console.log('filters_container', filters_container);
// console.log('sidebar_toggle_btn', sidebar_toggle_btn);
// console.log('products_store_main_containern', products_store_main_containern);

function toggleSideBar() {
  body.classList.toggle('lock');
  blure_filter.classList.toggle('active');
  filters_container.classList.toggle('active');
}

sidebar_toggle_btn.addEventListener('click', () => {
  toggleSideBar();
});

filters_arrow.addEventListener('click', () => {
  toggleSideBar();
});