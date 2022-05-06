$(function(){

  var $range = $(".shop-filters__input-price");
  var $inputFrom = $(".shop-filters__input-from");
  var $inputTo = $(".shop-filters__input-to");
  var instance;
  var min = 0;
  var max = 1200;
  var from = 0;
  var to = 0;

  $('.shop-filters__input-price').ionRangeSlider({
    // type: "double",
    // onStart: function (data){
    //   $('.shop-filters__input-from').text(data.from);
    //   $('.shop-filters__input-to').text(data.to);
    // },
    // onChange: function (data){
    //   $('.shop-filters__input-from').text(data.from);
    //   $('.shop-filters__input-to').text(data.to);
    // },
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs

  });

  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });

    $(this).prop("value", val);

  });

  $inputTo.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });

    $(this).prop("value", val);
  });





  // кастом инпут, добавляем + - как нам надо...
  $('.products-card__input').styler();
  $('.basket-card__input').styler();
  
  $('.header-bottom__btn, .header-bottom__item').on('click', function () {
    $('.header-bottom__list').toggleClass('header-bottom__list--active');
    $('.header-bottom__btn').toggleClass('header-bottom__btn--active'); 
  })

  $('.user-nav__link-basket, .basket__exit').on('click', function () {
    $('.basket').toggleClass('basket--active');
    // $('body').toggleClass('body--hidden');
  })

  $('.form-search__btn-mobile').on('click', function () {
    $('.form-search__input-mobile').toggleClass('form-search__input-mobile--active');
    $('.form-search__btn').toggleClass('form-search__btn--active');
    $('.form-search__btn-mobile').toggleClass('form-search__btn-mobile--active');
    $('.form-search').toggleClass('form-search--mobile');
  })

  $('.header-top__btn-mobile, .menu-mobile__exit').on('click', function () {
    $('.menu-mobile').toggleClass('menu-mobile--active');
  })

  $('.top-slider__items').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    fade: true,
    autoplay: true,
    autoplaySpead: 2000,
    dots: true,
  })

  // var mixer = mixitup('.top-products__content'); для одного слайдера на странице, тогда div container не нужен

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

    
})