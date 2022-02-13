$(function(){
  
  $('.header-bottom__btn, .header-bottom__item').on('click', function () {
    $('.header-bottom__list').toggleClass('header-bottom__list--active');
    $('.header-bottom__btn').toggleClass('header-bottom__btn--active'); 
  })

  $('.top-slider__items').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt=""></button>',
    fade: true,
    autoplay: true,
    autoplaySpead: 2000,
  })

  var mixer = mixitup('.top-products__content');
})