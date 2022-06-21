$(function(){

  $(".comments__star, .product__star").rateYo({
    starWidth: "16px",
    starHeight: "15px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "#FFB800",
    spacing: "6px",
    readOnly: true,
  }); 
  
  $(".comments__rating-star").rateYo({
    starWidth: "16px",
    starHeight: "15px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    spacing: "6px",
  });


  // Табсы

  $('.products-tabs__top-link').on('click', function(e){
    e.preventDefault();
    $('.products-tabs__top-link').removeClass('products-tabs__top-link--active');
    $(this).addClass('products-tabs__top-link--active');

    $('.products-tabs__content-item').removeClass('products-tabs__content-item--active');
    $($(this).attr('href')).addClass('products-tabs__content-item--active');
  })

  // изменение цены в инпуте и с помощью ползунка

  var $range = $(".shop-filters__input-price");
  var $inputFrom = $(".shop-filters__input-from");
  var $inputTo = $(".shop-filters__input-to");
  var instance;
  var min = 0;
  var max = 1200;
  var from = 0;
  var to = 0;

  $('.shop-filters__input-price').ionRangeSlider({
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
  $('.product__input').styler();
  

  // изменение и добавление новых классов при действиях (клик например)
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

  $('.shop-content__top-btn').on('click', function () {
    $('.shop-content__top-btn').removeClass('shop-content__top-btn--active');
    $(this).addClass('shop-content__top-btn--active');
  })

  $('.shop-content__top-btn-list').on('click', function(){
    $('.shop-content__products').addClass('shop-content__products--list');
  });

  $('.shop-content__top-btn-grid').on('click', function () {
    $('.shop-content__products').removeClass('shop-content__products--list');
  });

  $('.shop-content__top-btnFilter, .shop-filters__button').on('click', function () {
    $('.shop-filters').toggleClass('shop-filters--active');
  });


  // слайдер
  
  $('.top-slider__items').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    fade: true,
    autoplay: true,
    autoplaySpead: 2000,
    dots: true,
  });

  $('.product-slaider').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  });
  


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



// работа с селект в catalog-page.html

$('.select').each(function () {
  const _this = $(this),
    selectOption = _this.find('option'),
    selectOptionLength = selectOption.length,
    selectedOption = selectOption.filter(':selected'),
    duration = 350; // длительность анимации

  _this.hide();
  _this.wrap('<div class="select"></div>');
  $('<div>', {
    class: 'new-select',
    text: _this.children('option:disabled').text()
  }).insertAfter(_this);

  const selectHead = _this.next('.new-select');
  $('<div>', {
    class: 'new-select__list'
  }).insertAfter(selectHead);

  const selectList = selectHead.next('.new-select__list');
  for (let i = 1; i < selectOptionLength; i++) {
    $('<div>', {
      class: 'new-select__item',
      html: $('<span>', {
        text: selectOption.eq(i).text()
      })
    })
      .attr('data-value', selectOption.eq(i).val())
      .appendTo(selectList);
  }

  const selectItem = selectList.find('.new-select__item');
  selectList.slideUp(0);
  selectHead.on('click', function () {
    if (!$(this).hasClass('on')) {
      $(this).addClass('on');
      selectList.slideDown(duration);

      selectItem.on('click', function () {
        let chooseItem = $(this).data('value');

        $('select').val(chooseItem).attr('selected', 'selected');
        selectHead.text($(this).find('span').text());

        selectList.slideUp(duration);
        selectHead.removeClass('on');
      });

    } else {
      $(this).removeClass('on');
      selectList.slideUp(duration);
    }
  });
}); 


// активация overlay...клик установлен в html
function onOverlay() {
  document.getElementById("overlay").style.display = "block";
  document.querySelector(".menu-mobile").style.zIndex = "201";
  document.querySelector(".basket").style.zIndex = "201";
};

function offOverlay() {
  document.getElementById("overlay").style.display = "none";
};

let headerMobileBtn = document.querySelector('.header-top__btn-mobile');
headerMobileBtn.addEventListener('click', onOverlay);

let menuMobile = document.querySelector('.menu-mobile');
menuMobile.addEventListener('click', offOverlay);

let userNavLinkBasket = document.querySelector('.user-nav__link-basket');
userNavLinkBasket.addEventListener('click', onOverlay);

let basketExit = document.querySelector('.basket__exit');
basketExit.addEventListener('click', offOverlay);

let basketBtn = document.querySelector('.basket__bottom-btn');
basketBtn.addEventListener('click', offOverlay);







let sliders = document.querySelectorAll('.slider');
// sliders - список всех элементов с классом class="slider"
// sliders[0] — первый элемент, sliders[1] — второй, sliders[i] — i-тый.

for (let i = 0; i < sliders.length; i++) {
  // Перебирает все, вызывает функцию для каждого.
  init_slider(sliders[i]);
}

function init_slider(slider) {
  // Значение slider: Очередной sliders[i], переданный при вызове функции.

  let slide = slider.querySelectorAll('.slide');
  // Вместо document.query... Получается список всех class="slide"
  // которые находятся где-то внутри текущего элемента slider.

  let next = slider.querySelector('.next');
  // Кнопка next внутри этого slider.

  let i = 0;
  // Номер текущего "открытого" слайда.

  next.addEventListener('click', function () {
    slide[i].classList.remove('block');
    // slide[i] - открытый слайд. Скрываем.

    i = (i + 1) % slide.length; // (*1)

    slide[i].classList.add('block');
    // slide[i] - следующий слайд. Показываем.
  });
}






const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  autoHeight: true,
  allowTouchMove: false,
  freeMode: true,
  simulateTouch: false,
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
