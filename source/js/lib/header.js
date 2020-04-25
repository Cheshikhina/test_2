'use strict';
(function () {
  var WIDTH_MOBILE = 768;
  var KeyCode = {
    ESC: 27,
  };

  var body = document.querySelector('body');
  var headerButton = document.querySelector('.header__menu');
  var headerInner = document.querySelector('.header__inner');

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

    document.addEventListener('keydown', closeMenuEsc);
    document.addEventListener('click', toggleMenu);
  }
})();
