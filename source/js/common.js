// -----------------  Селект  --------------------

// переменная не переназначается, поэтому используем const
// используем querySelectorAll, чтобы собрать массив со всеми сущностями .select
const select = document.querySelectorAll(".select");

// если массив не пустой, пробегаемся в цикле по каждой найденой сущности
if (select.length) {
  select.forEach((item) => {
    // достаем из текущей сущности .select__current
    const selectCurrent = item.querySelector(".select__current");

    item.addEventListener("click", (event) => {
      const el = event.target.dataset.choice;
      const text = event.target.innerText;

      // Проверяем является ли это choosen и не выбрано ли его значение уже
      if (el === "choosen" && selectCurrent.innerText !== text) {
        selectCurrent.innerText = text;
      }

      item.classList.toggle("is-active");
    });
  });
}




$('.breadcrumb__list').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  vertical: false,
  touchThreshold: 100,
  variableWidth: true,
  infinite: false,
  swipeToSlide: true,
  responsive: [{
    breakpoint: 1026,
    settings: {
      slidesToShow: 8,
      slidesToScroll: 1,
    }
  }, {
    breakpoint: 769,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    }
  }, , {
    breakpoint: 321,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },]
});



$('.submenu-1__close-btn,.overlay,.mobile-menu__close-btn').on('click', function () {
  $(".submenu-1__list").removeClass('active')
  $(".header__mobile-menu").removeClass("active")
  $(".mobile-submenu-1__list").removeClass("active")
  $(".overlay").removeClass('active')
});

$('.menu__link').on('click', function () {
  $(".overlay").addClass('active')
});

$('.header__mobile-menu-btn').on('click', function () {
  $(".header__mobile-menu").toggleClass("active")
  $(".overlay").addClass('active')
});

//------------Все фильтры------------

$('.filters__all-btn,.services-item__btn,.add-to-basket').on('click', function () {
  $(".all-filters").toggleClass("active")
  $(".overlay").addClass('active')
  $("body").addClass('lock')
});


$('.overlay,.all-filters__close-btn').on('click', function () {
  $(".all-filters").removeClass("active")
  $(".overlay").removeClass('active')
  $("body").removeClass('lock')
});
//------------Все фильтры------------

$('#first-menu-link').on('click', function () {
  $(this).toggleClass('active')
  $("#first-menu-list").toggleClass('active')
  $(this).removeClass('active')
});
$('#second-menu-link').on('click', function () {
  $(this).toggleClass('active')
  $("#second-menu-list").toggleClass('active')
  $(this).removeClass('active')
});
$('#third-menu-link').on('click', function () {
  $(this).toggleClass('active')
  $("#third-menu-list").toggleClass('active')
  $(this).removeClass('active')
});
$('#four-menu-link').on('click', function () {
  $(this).toggleClass('active')
  $("#four-menu-list").toggleClass('active')
  $(this).removeClass('active')
});

$('#first-mobile-menu-link').on('click', function () {
  $(this).toggleClass('active')
  $("#first-mobile-menu-list").toggleClass('active')
  $(this).removeClass('active')
});
$('#second-mobile-menu-link').on('click', function () {
  $(this).toggleClass('active')
  $("#second-mobile-menu-list").toggleClass('active')
  $(this).removeClass('active')
});
$('#third-mobile-menu-link').on('click', function () {
  $(this).toggleClass('active')
  $("#third-mobile-menu-list").toggleClass('active')
  $(this).removeClass('active')
});
$('#four-mobile-menu-link').on('click', function () {
  $(this).toggleClass('active')
  $("#four-mobile-menu-list").toggleClass('active')
  $(this).removeClass('active')
});
$('.mobile-submenu-1__back-btn').on('click', function () {
  $(".mobile-submenu-1__list").removeClass('active')
});

const search = document.querySelectorAll(".search__row");
const searchlist = document.querySelector(".search__list");
const overlaySearch = document.querySelector(".overlay-search");


for (i = 0; i < search.length; ++i) {
  search[i].addEventListener("keydown", function () {
    if (this.value.length > 0) {
      this.parentElement.nextElementSibling.classList.add("active")
      overlaySearch.classList.add("active")
    } else {
      this.parentElement.nextElementSibling.classList.remove("active")
      overlaySearch.classList.remove("active")
    }
  });
  search[i].addEventListener("focusout", function () {
    this.parentElement.nextElementSibling.classList.remove("active")
    this.value = ""
    overlaySearch.classList.remove("active")
  });
}



$(".gallery__image-plus-area").hover(function () {
  $(this).children(".gallery__image-plus").siblings(".image-tag").toggleClass("active")
});



$('.custom-input-outline').on('focusin', function () {
  $(this).parent().find('.custom-label-outline').addClass('active');
});

$('.custom-input-outline').on('focusout', function () {
  if (!this.value) {
    $(this).parent().find('.custom-label-outline').removeClass('active');
  }
});



$('.custom-outline-input-block').on('click', '.password-view', function () {
  if ($('.password').attr('type') == 'password') {
    $(this).addClass('view');
    $(this).siblings('.password').attr('type', 'text');
  } else {
    $(this).removeClass('view');
    $(this).siblings('.password').attr('type', 'password');
  }
  return false;
});




// $('.select-city').click(function () {
//   if ($('.select__placeholder-city').hasClass('active')) {

//     // $('.select__header').addClass('active');
//     // $('.select__placeholder-city').removeClass('active');
//   } else {
//     $('.select__placeholder-city').addClass('active')
//   }
// });

$('.select-city').click(function () {
  $('.select__placeholder-city').addClass('active')
  $('.select__header').addClass('active');
});



//tabs
var $tabs = function (target) {
  var
    _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
    _eventTabsShow,
    _showTab = function (tabsLinkTarget) {
      var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
      tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
      tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
      tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
      // если следующая вкладка равна активной, то завершаем работу
      if (tabsLinkTarget === tabsLinkActive) {
        return;
      }
      // удаляем классы у текущих активных элементов
      if (tabsLinkActive !== null) {
        tabsLinkActive.classList.remove('tabs__link_active');
      }
      if (tabsPaneShow !== null) {
        tabsPaneShow.classList.remove('tabs__pane_show');
      }
      // добавляем классы к элементам (в завимости от выбранной вкладки)
      tabsLinkTarget.classList.add('tabs__link_active');
      tabsPaneTarget.classList.add('tabs__pane_show');
      document.dispatchEvent(_eventTabsShow);
    },
    _switchTabTo = function (tabsLinkIndex) {
      var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
      if (tabsLinks.length > 0) {
        if (tabsLinkIndex > tabsLinks.length) {
          tabsLinkIndex = tabsLinks.length;
        } else if (tabsLinkIndex < 1) {
          tabsLinkIndex = 1;
        }
        _showTab(tabsLinks[tabsLinkIndex - 1]);
      }
    };

  _eventTabsShow = new CustomEvent('tab.show', {
    detail: _elemTabs
  });

  _elemTabs.addEventListener('click', function (e) {
    var tabsLinkTarget = e.target;
    // завершаем выполнение функции, если кликнули не по ссылке
    if (!tabsLinkTarget.classList.contains('tabs__link')) {
      return;
    }
    // отменяем стандартное действие
    e.preventDefault();
    _showTab(tabsLinkTarget);
  });

  return {
    showTab: function (target) {
      _showTab(target);
    },
    switchTabTo: function (index) {
      _switchTabTo(index);
    }
  }

};

//tabs

$('.gallery__list').masonry({
  itemSelector: '.gallery__item',
  columnWidth: 80,
  columnHeight: 80,
  gutter: ".gutter-sizer",
});





// -----------------Слайдеры-------------------

$('.gallery__tabs-slider').slick({
  slidesToShow: 10,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  vertical: false,
  touchThreshold: 1000,
  variableWidth: true,
  infinite: false,
  swipeToSlide: true,
  responsive: [{
    breakpoint: 1400,
    settings: {
      slidesToShow: 7,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    }
  }, {
    breakpoint: 320,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    }
  },
  ]
});

$('.top-slider__list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  touchThreshold: 1000,
  infinite: true,
  swipeToSlide: true,
  dots: true,
  // autoplay: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
    }
  },]
});

$('.fresh__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  infinite: false,
  swipeToSlide: true,
  responsive: [{
    breakpoint: 769,
    settings: {
      slidesToShow: 2.2,
    }
  },
  {
    breakpoint: 577,
    settings: {
      slidesToShow: 2.1,
      slidesToScroll: 1,
      dots: true
    }
  }, {
    breakpoint: 420,
    settings: {
      slidesToShow: 1.4,
      slidesToScroll: 1,
      dots: true
    }
  },
  {
    breakpoint: 321,
    settings: {
      slidesToShow: 1.1,
      dots: true
    }
  },
  ]
});

$('.recomented__slider').slick({
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  vertical: false,
  touchThreshold: 100,
  infinite: true,
  slidesToShow: 4,
  prevArrow: $('.recomented__button-prev'),
  nextArrow: $('.recomented__button-next'),
  responsive: [{
    breakpoint: 1025,
    settings: {
      slidesToShow: 4,
      variableWidth: true,

    }
  }, {
    breakpoint: 769,
    settings: {
      slidesToShow: 3,

    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 2,
      dots: true,


    }
  },

  ]

});


$('.finish-int__slider').slick({
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  vertical: false,
  touchThreshold: 100,
  infinite: true,
  slidesToShow: 2,
  prevArrow: $('.finish-int__button-prev'),
  nextArrow: $('.finish-int__button-next'),
  responsive: [{
    breakpoint: 577,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
    }
  }]

});


$('.of-blog__slider').slick({
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  vertical: false,
  touchThreshold: 100,
  infinite: true,
  slidesToShow: 4,
  prevArrow: $('.of-blog__button-prev'),
  nextArrow: $('.of-blog__button-next'),
  responsive: [{
    breakpoint: 1320,
    settings: {
      slidesToShow: 3,
      variableWidth: true


    }
  }, {
    breakpoint: 960,
    settings: {
      slidesToShow: 3,
      variableWidth: true,

    }
  },
  {
    breakpoint: 769,
    settings: {
      slidesToShow: 2,
      variableWidth: true,
      touchThreshold: 1000,

    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1.5,
      variableWidth: true,
      dots: true,
      touchThreshold: 1000,


    }
  },

  ]

});
$('.advice__slider').slick({
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  vertical: false,
  touchThreshold: 100,
  infinite: true,
  slidesToShow: 3,
  prevArrow: $('.of-blog__button-prev'),
  nextArrow: $('.of-blog__button-next'),
  responsive: [{
    breakpoint: 1320,
    settings: {
      slidesToShow: 3,
      variableWidth: true


    }
  }, {
    breakpoint: 960,
    settings: {
      slidesToShow: 2.5,
      variableWidth: true

    }
  },
  {
    breakpoint: 769,
    settings: {
      slidesToShow: 2.1,
      variableWidth: true

    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      // variableWidth: true


    }
  },

  ]

});

$('.product__slider-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product__slider-nav'
});

$('.product__slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product__slider-main',
  dots: false,
  focusOnSelect: true,
  touchThreshold: 100,
  variableWidth: true,
  responsive: [{
    breakpoint: 1326,
    settings: {
      slidesToShow: 3,

    }
  },
  {
    breakpoint: 1023,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
    }
  },
  ]
});

$('.gallery__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true,
  touchThreshold: 100,
  variableWidth: true,
  responsive: [{
    breakpoint: 769,
    settings: {
      arrows: false,
    }
  },

  ]
});
$('.rovika__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true,
  touchThreshold: 100,
  variableWidth: true,
  prevArrow: $('.rovika__slider-arrow-prev'),
  nextArrow: $('.rovika__slider-arrow-next'),
  responsive: [{
    breakpoint: 769,
    settings: {
      arrows: false,
    }
  },

  ]
});



if ($(window).width() < 500) {
  $('.category__list').slick({

    slidesToShow: 2,
    variableWidth: true,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 100,

  });
}
if ($(window).width() < 1290) {
  $('.filters__list').slick({
    variableWidth: true,
    arrows: true,
    swipeToSlide: true,
    touchThreshold: 1000,
    prevArrow: $('.filters__slider-btn--prev'),
    nextArrow: $('.filters__slider-btn--next'),
    infinite: false,
  });
}
if ($(window).width() < 730) {
  $('.filters__list-ns').slick({
    variableWidth: true,
    arrows: true,
    swipeToSlide: true,
    touchThreshold: 1000,
    prevArrow: $('.filters__slider-btn--prev'),
    nextArrow: $('.filters__slider-btn--next'),
    infinite: false,
  });
}
if ($(window).width() < 767) {
  $('.category__list').slick({
    variableWidth: true,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 1000,

  });
}
if ($(window).width() < 767) {
  $('.other-services__list').slick({
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    vertical: false,
    touchThreshold: 1000,
    infinite: false,
    slidesToShow: 2.1,
    variableWidth: true,
    responsive: [{
      breakpoint: 577,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        arrows: false,
        dots: true,
      }
    }]

  });
}
if ($(window).width() < 767) {
  $('.other-collection__list').slick({
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    vertical: false,
    touchThreshold: 1000,
    infinite: false,
    variableWidth: true,
    slidesToShow: 1.1,
    responsive: [{
      breakpoint: 577,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        variableWidth: true,
      }
    }]

  });
}




$('.product__collection-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true,
  touchThreshold: 100,
  variableWidth: true,
  prevArrow: $('.product__collection-slide-prev'),
  nextArrow: $('.product__collection-slide-next'),
  infinite: false,
  responsive: [{
    breakpoint: 1026,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    }
  }, {
    breakpoint: 769,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },]
});

$('.similar-products__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true,
  touchThreshold: 100,
  variableWidth: true,
  prevArrow: $('.similar-products__slide-prev'),
  nextArrow: $('.similar-products__slide-next'),
  infinite: false,
  responsive: [{
    breakpoint: 1026,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    }
  }, {
    breakpoint: 769,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },]
});


$('.our-works__slider').slick({
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  vertical: false,
  touchThreshold: 1000,
  infinite: true,
  slidesToShow: 2,
  prevArrow: $('.finish-int__button-prev'),
  nextArrow: $('.finish-int__button-next'),
  responsive: [{
    breakpoint: 577,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      infinite: true,
      touchThreshold: 1000,

    }
  }]

});

if ($(window).width() < 596) {
  $('.blog__filter-list').slick({
    variableWidth: true,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 1000,
  });
}





// ---------------- Счетчик ---------------------
$(function () {
  (function quantityProducts() {
    var $quantityArrowMinus = $(".block-count__minus");
    var $quantityArrowPlus = $(".block-count__plus");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      var $quantityNum = $(this).siblings('.block-count__input');
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      var $quantityNum = $(this).siblings('.block-count__input');
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
});


// ----------------- Аккордион --------------------
/**
 * Классы для аккордиона
 */
const accordeon = {
  CLASS: 'accordion',
  CLASS_ACTIVE: 'accordion__active',
}

/**
 * acc - неизменная переменная для работы с аккордионом
 */
const acc = document.querySelectorAll(`.${accordeon.CLASS}`);
let openedAccordeon = null;

/**
 * использует nextElementSibling для открытия или закрытия аккордиона
 */
function closeAccordeon(acc) {
  acc.nextElementSibling.style.maxHeight = 0;
  acc.classList.remove(accordeon.CLASS_ACTIVE);
}


function openAccordeon(acc) {
  acc.nextElementSibling.style.maxHeight = `${acc.nextElementSibling.scrollHeight}px`;
  acc.classList.add(accordeon.CLASS_ACTIVE);
}

/**
 * Проверка на открытие аккордиона !nextElementSibling!
 */
function isAccordeonOpen(acc) {
  acc.nextElementSibling && !acc.nextElementSibling.style.maxHeight
}

/**
 * Итерация, реализация переключения открытого аккордиона
 *
 */
for (const accordeon of acc) {
  accordeon.addEventListener("click", function () {
    const currentAccordeon = this;

    openedAccordeon && closeAccordeon(openedAccordeon);

    if (isAccordeonOpen(currentAccordeon)) {
      closeAccordeon(currentAccordeon);
    } else {
      openAccordeon(currentAccordeon);
      openedAccordeon = currentAccordeon;
    }
  });
};

// --------------

const accordionList = document.getElementsByClassName("accordion--multiple");
const classNameActive = "accordion--active";

for (const accordion of accordionList) {
  accordion.addEventListener("click", function () {
    this.classList.toggle(classNameActive);
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


$(function () {
  $("#promocode-checkbox").on("click", function () {
    if ($(this).is(":checked")) {
      $(".promocode__row").slideDown({
        start: function () {
          $(this).css({
            display: "flex"
          })
        }
      });
    } else {
      $(".promocode__row").slideUp();
    }
  })
});





$(document).ready(function () {
  $('.collections-gallery__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
    touchThreshold: 100,
    variableWidth: true,
    prevArrow: $('.collections-gallery__arrow-prev'),
    nextArrow: $('.collections-gallery__arrow-next'),
    responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false,
      }
    },

    ]
  });
  $('.collections-gallery__slider--2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
    touchThreshold: 100,
    variableWidth: true,
    prevArrow: $('.collections-gallery__arrow-prev--2'),
    nextArrow: $('.collections-gallery__arrow-next--2'),
    responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false,
      }
    },

    ]
  });
});
$(function () {
  $(".twentytwenty-container").twentytwenty({
    move_slider_on_hover: false,
    no_overlay: true,
    move_with_handle_only: false,
    click_to_move: true,
  });
});

//read-more

$(document).ready(function () {
  $('.content_toggle').click(function () {
    $('.content_block').toggleClass('hide');
    if ($('.content_block').hasClass('hide')) {
      $('.content_toggle').html('Читать полностью');
    } else {
      $('.content_toggle').html('Скрыть');
    }
    return false;
  });
});




