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
////////////////////////////// start for rpoductpage //////////////////////////////

// const body = document.querySelector('body');
// const blure_filter = document.querySelector('.blure__filter-bg');
// const filters_container = document.querySelector('.products-store__filters-container');
// const filters_arrow = document.querySelector('.filters-header__arrow');
// const sidebar_toggle_btn = document.querySelector('.filter__sidebar-toggle-btn');
// const products_store_main_containern = document.querySelector('.products-store__main-container');

// function toggleSideBar() {
//   body.classList.toggle('lock');
//   blure_filter.classList.toggle('active');
//   filters_container.classList.toggle('active');
// }

// sidebar_toggle_btn.addEventListener('click', () => {
//   toggleSideBar();
// });

// filters_arrow.addEventListener('click', () => {
//   toggleSideBar();
// });

////////////////////////////// end for rpoductpage //////////////////////////////

const seiperr = document.querySelector('.product__inner__swiper-container');
console.log(seiperr);


let product_swiper2 = new Swiper('.product__inner__swiper-container2', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true,
});

let product_swiper = new Swiper('.product__inner__swiper-container', {
  loop: true,
  navigation: {
    nextEl: ".product__swiper-button-next",
    prevEl: ".product__swiper-button-prev",
  },
  thumbs: {
    swiper: product_swiper2,
  },
});

