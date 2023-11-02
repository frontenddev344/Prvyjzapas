$(document).ready(function(){
    $(".menu-toggle").click(function(){
        $("body").addClass("toggle");
    });
});

$(document).ready(function(){
    $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
    });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  speed: 6000,
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});