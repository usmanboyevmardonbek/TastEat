const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 2,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }, 
  breakpoints: {
     768:{
    slidesPerView: 2,
    slidesPerGroup: 2,
  },

  4:{
    slidesPerView: 1,
    slidesPerGroup: 1,
  },




  }
 


});