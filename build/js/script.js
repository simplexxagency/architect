'use strict';

$(document).ready(function () {

  $('#fullpage').fullpage({
    //options here
    anchors: ['hero', 'desc', 'company', 'project', 'blog', 'contact'],
    menu: '#menu',
    lockAnchors: false,
    responsiveWidth: 991,
    afterResponsive: function (isResponsive) {
      if ($(window).width() <= '991') {
        $('.section').height('auto');
        $('.fp-tableCell').height('auto');
        $('.pagination').css('display', 'none');
      } else {
        $('.section').height('inherit');
        $('.fp-tableCell').height('inherit');
        $('.pagination').css('display', 'flex');
      }
    },
    afterResize: function (width, height) {
      if ($(window).width() <= '991') {
        $('.section').height('auto');
        $('.fp-tableCell').height('auto');
        $('.pagination').css('display', 'none');
      } else {
        $('.section').height('inherit');
        $('.fp-tableCell').height('inherit');
        $('.pagination').css('display', 'flex');
      }
    },
    onLeave: function (origin, destination, direction) {
      let $pagMenu = $('#menu');

      if ($(window).width() >= '991') {
        if (destination == 4) {
          $pagMenu.css('display', 'none');
        } else {
          $pagMenu.css('display', 'flex');
        };
      }



    }
  });

  // Tooltip in Header
  let $langTip = $('.header__lang-tooltip');
  let $langMenu = $('.header__lang');

  $langTip.on('click', function () {
    $langMenu.find('div').toggleClass('active');
  });

  // Menu in section Header
  let $btn = $('.header__menu-line');
  let $navMenu = $('.header__menu-list');
  let $headerLogo = $('.header__logo');


  $('.header__menu-btn').on('click', function () {
    if (!($btn.hasClass('active'))) {
      $btn.addClass('active');
      $navMenu.addClass('active');
      $headerLogo.addClass('active');
      $('.header').addClass('active');
      $('.header__container').addClass('active');
      $('.header__menu-btn span').toggleClass('passive');
    } else {
      $btn.removeClass('active');
      $navMenu.removeClass('active');
      $headerLogo.removeClass('active');
      $('.header').removeClass('active');
      $('.header__container').removeClass('active');
      $('.header__menu-btn span').toggleClass('passive');
    }

  });

  // Button in Section Adventure

  $('.a-adventure__button a').on('click', function () {
    $('.a-adventure__box').toggleClass('active');
  });

  // Button in Section Blog

  $('.b-blog__container-button a').on('click', function () {
    $('.b-blog__hide').toggleClass('active');
  });

  // Slick Slider in section Project
  function slickify() {
    $('.project__slider').slick({
      dots: true,
      arrows: true,
      // mobileFirst: true,
      swipe: true,
      nextArrow: '<a href="#" class="project__arrowright slick__arrows"><img src="img/arrright.png" class="arrowright-img" alt="arrright"></a>',
      prevArrow: '<a href="#" class="project__arrowleft slick__arrows"><img src="img/arrleft.png" class="arrowleft-img" alt="arrleft"></a>',
      responsive: [
        {
          breakpoint: 575,
          settings: "unslick",
          arrows: false
        }
      ]
    });
  }

  slickify();
  $(window).resize(function () {
    var $windowWidth = $(window).width();
    if ($windowWidth > 500) {
      slickify();
    }
  });


  // Slick Slider in section Task
  function slickifyTask() {
    $('.task__slider').slick({
      dots: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // mobileFirst: true,
      swipe: true,
      nextArrow: '.task__slider-arrowright',
      prevArrow: '.task__slider-arrowleft',
      adaptiveHeight: true,
    });
  }

  slickifyTask();

  // Popup Form
  $('.a-knowing__button a').on('click', function () {
    $('.popup__form').removeClass('passive');
    $('body, html').addClass('active');
  });

  $('.popup__close, .popup__shadow').on('click', function () {
    $('.popup').addClass('passive');
    $('body, html').removeClass('active');
  });

  // Validate form in popup Form
  $("#validate1").validate({
    errorClass: "input_error",
    rules: {
      email1: {
        required: true,
        email: true
      },
      name1: {
        required: true,
        minlength: 2
      },
      text1: {
        required: true,
        minlength: 2
      }
    }
  });

  //   Validate form1
  $('#validate1').submit(function (event) {
    event.preventDefault();

    if (($('#email1').val() == '') || ($('#name1').val() == '') || ($('#text1').val() == '')) {
      return false;
    } else {
      $('.popup__form').addClass('passive');
      $('.popup__thank').removeClass('passive');
    }
  });

  // Contact Page
  // $('.cont__form-button').on('click', function(){
  //   $('.popup__thank').removeClass('passive');
  // });

  // Validate form in popup Enter
  $("#validate2").validate({
    errorClass: "input_error",
    rules: {
        email2: {
            required: true,
            email: true,
        },
        name2: {
            required: true,
            minlength: 2,
        },
        text2: {
          required: true,
          minlength: 5,
        }
    },
    messages: {
        email2: {
            required: "Нам нужен ваш email, чтобы связаться с Вами",
            email: "Ваш почтовый адрес должен выглядеть name@domain.ru"
        },
        name2: {
            required: "Введите имя",
            minlength: "Имя должено быть не меньше 3 символов",
        },
        text2: {
          required: "Введите текст сообщения",
          minlength: "Сообщение должено быть не меньше 3 символов",
      },
    },
    focusInvalid: true,
});

$('#validate2').submit(function (event) {
  event.preventDefault();
  var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
var mail = $('#email2');

  if ( mail.val() != '') {
    console.log('1')
      if ((mail.val().search(pattern)) || ($('#name2').val() == '') || ($('#text2').val() == '')) {
        console.log('2')
        return false;
    } else {
      console.log('3')
        $('.popup__thank').removeClass('passive');
        $('body, html').addClass('active');
    }
  }

  
});

// Validate email
// function emailValidate(){

//   var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
// var mail = $('.email');
// console.log(mail)

// mail.each(function () {
//   var $thisInput = $(this);
//   console.log($thisInput.val())
//   if ($thisInput.val() != '') {
//     console.log('1')
//     if ($thisInput.val().search(pattern) == 0) {
//       console.log('2')
//       return false;
//     } else {
//       console.log('3')
//       return true;
//     }
//   } else {
//     console.log('4')
//     return false;
//   }
// });
// };

// $('form').on('submit', function(){
//   emailValidate();
// });
});





