const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: true,
    // пагинация
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // навигация
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {

        const path = e.currentTarget.dataset.path;

        document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
            btn.classList.remove('tabs-nav__btn--active')
        });
        e.currentTarget.classList.add('tabs-nav__btn--active')
        document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
            tabsBtn.classList.remove('tabs-item--active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
        });
});

document.querySelectorAll(".faq__item").forEach(function (faqItem) {
    faqItem.addEventListener("click", function (e) {
      document.querySelectorAll(".faq__item").forEach(function (faqItem) {
        faqItem.classList.remove("faq__item--active");
      });
      faqItem.classList.add("faq__item--active");
    });
});

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header-nav");
let menuLinks = document.querySelectorAll(".nav__item");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("header-nav--active");
  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menu.classList.remove("header__nav--active");
    document.body.classList.remove("stop-scroll");
  });
});

let btnSearh = document.querySelector(".search");
let fieldSearch = document.querySelector(".header__search");
let btnCloseSearch = document.querySelector(".header__close-search");

btnSearh.addEventListener("click", function () {
  fieldSearch.classList.add("header__search--active");
});

btnCloseSearch.addEventListener("click", function () {
  fieldSearch.classList.remove("header__search--active");
});