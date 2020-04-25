'use strict';
(function () {
  var WIDTH_MOBILE = 768;
  var LOGO_TOP = '9px';
  var KeyCode = {
    ESC: 27,
  };

  var body = document.querySelector('body');
  var headerButton = document.querySelector('.header__menu');
  var headerInner = document.querySelector('.header__inner');
  var logo = document.querySelector('.header__logo');
  var header = document.querySelector('.header');

  var scrollY;

    window.addEventListener('DOMContentLoaded ', function (evt) {
      // if (document.querySelector('.header__inner--open')) {
      //   document.querySelector('.header__inner--open').addEventListener('scroll', function () {
      //     if (logo && body.classList.contains('body_hidden')) {
      //       scrollY = window.scrollY;
      //       logo.style.top = LOGO_TOP + '-' + scrollY + 'px';
      //     }
      //   });
      // }
    });


  if (headerButton && headerInner) {

    var closeMenuEsc = function (evt) {
      if (evt.keyCode === KeyCode.ESC) {
        if (headerInner.classList.contains('header__inner--open')) {
          headerInner.classList.remove('header__inner--open');
          headerButton.classList.remove('header__menu--open');
          body.classList.remove('body_hidden');
        }
      }
    };

    var toggleMenu = function (evt) {
      if (headerInner.classList.contains('header__inner--open')) {
        if (!evt.target.parentNode.classList.contains('header__inner--open') && !evt.target.classList.contains('header__link')) {
          headerInner.classList.remove('header__inner--open');
          headerButton.classList.remove('header__menu--open');
          body.classList.remove('body_hidden');
        } else if (evt.target.parentNode.classList.contains('header__inner--open')) {
          headerInner.classList.remove('header__inner--open');
          headerButton.classList.remove('header__menu--open');
          body.classList.remove('body_hidden');
        }
      } else if (evt.target.classList.contains('header__menu')) {
        evt.target.parentNode.classList.contains('header__inner--open') ? evt.target.parentNode.classList.remove('header__inner--open') : evt.target.parentNode.classList.add('header__inner--open');
        evt.target.classList.contains('header__menu--open') ? evt.target.classList.remove('header__menu--open') : evt.target.classList.add('header__menu--open');
        if (window.matchMedia('(max-width: ' + WIDTH_MOBILE + 'px)').matches) {
          console.log(evt);

          body.classList.contains('body_hidden') ? body.remove('body_hidden') : body.classList.add('body_hidden');
        }
      }
    };
    window.addEventListener('resize', function () {
      if (window.matchMedia('(max-width: ' + WIDTH_MOBILE + 'px)').matches) {
        if (!body.classList.contains('body_hidden') && headerButton.classList.contains('header__menu--open')) {
          body.classList.add('body_hidden');
        }
      } else {
        body.classList.remove('body_hidden');
      }
    });


    // if (logo && body.classList.contains('body_hidden')) {
    //   scrollY = 0;
    //   logo.style.top = LOGO_TOP + '-' + scrollY + 'px';
    // } else {
    //   scrollY = window.scrollY;
    //   logo.style.top = LOGO_TOP + '-' + scrollY + 'px';
    // }

    document.addEventListener('keydown', closeMenuEsc);
    document.addEventListener('click', toggleMenu);
  }
})();
