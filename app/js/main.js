$(function(){
  
  $('.header__centr-catalog, .header__centr-item').on('click', function () {
    $('.header__centr-items').toggleClass('header__centr-items--active');
    $('.header__centr-products').toggleClass('header__centr-products--active'); 
  })

  $('.slider__items').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt=""></button>',
    fade: true,
    autoplay: true,
    autoplaySpead: 2000,
  })

  var mixer = mixitup('.product-card__content');
})