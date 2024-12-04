//    Мобильное меню
burger.onclick = function (e) { 
  e.preventDefault()
  // document.getElementById('navmenu').classList.remove('header__navmenu')
  // document.getElementById('navmenu').classList.add('header__navmenu_mobile')
    
  document.getElementById('navMenu').style.display='block'
  document.getElementById('menuBtns').style.display='block'
  document.getElementById('burger').style.display='none'
  document.getElementById('close').style.display='block'
}

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
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1,
    },
    706: {
      slidesPerView: 2,
    },
    1060: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  }
});