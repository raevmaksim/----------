const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  slidesPerView: 5,
  freeMode: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});