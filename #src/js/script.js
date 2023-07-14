function buregrMenuHandle() {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('nav');
  const body = document.querySelector('body');

  const menuLinks = document.querySelectorAll('.nav__item, .nav__submenu__item');

  burgerItem.addEventListener('click', (e) => {
    burgerItem.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
  });

  if (window.innerWidth < 976) {
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', () => {
        menu.classList.remove('active');
        body.classList.remove('lock');
        burgerItem.classList.remove('active');

      });
    }
  }
};
buregrMenuHandle();
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

