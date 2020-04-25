'use strict';

(function () {
  var WIDTH_MOBILE = 768;
  var LOGO_TOP = '9px';
  var KeyCode = {
    ESC: 27
  };
  var body = document.querySelector('body');
  var headerButton = document.querySelector('.header__menu');
  var headerInner = document.querySelector('.header__inner');
  var logo = document.querySelector('.header__logo');
  var header = document.querySelector('.header');
  var scrollY;
  window.addEventListener('DOMContentLoaded ', function (evt) {// if (document.querySelector('.header__inner--open')) {
    //   document.querySelector('.header__inner--open').addEventListener('scroll', function () {
    //     if (logo && body.classList.contains('body_hidden')) {
    //       scrollY = window.scrollY;
    //       logo.style.top = LOGO_TOP + '-' + scrollY + 'px';
    //     }
    //   });
    // }
  });

  if (headerButton && headerInner) {
    var closeMenuEsc = function closeMenuEsc(evt) {
      if (evt.keyCode === KeyCode.ESC) {
        if (headerInner.classList.contains('header__inner--open')) {
          headerInner.classList.remove('header__inner--open');
          headerButton.classList.remove('header__menu--open');
          body.classList.remove('body_hidden');
        }
      }
    };

    var toggleMenu = function toggleMenu(evt) {
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
    }); // if (logo && body.classList.contains('body_hidden')) {
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
'use strict';

(function () {
  document.addEventListener('mouseup', function (evt) {
    if (evt.target.tagName !== 'A' && evt.target.tagName !== 'BUTTON') {
      return;
    }

    evt.target.blur();
  });
})();
"use strict";

(function () {
  function scrollIt(destination) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
    var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
    var callback = arguments.length > 3 ? arguments[3] : undefined;
    var easings = {
      linear: function linear(t) {
        return t;
      },
      easeInQuad: function easeInQuad(t) {
        return t * t;
      },
      easeOutQuad: function easeOutQuad(t) {
        return t * (2 - t);
      },
      easeInOutQuad: function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      },
      easeInCubic: function easeInCubic(t) {
        return t * t * t;
      },
      easeOutCubic: function easeOutCubic(t) {
        return --t * t * t + 1;
      },
      easeInOutCubic: function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
      easeInQuart: function easeInQuart(t) {
        return t * t * t * t;
      },
      easeOutQuart: function easeOutQuart(t) {
        return 1 - --t * t * t * t;
      },
      easeInOutQuart: function easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
      },
      easeInQuint: function easeInQuint(t) {
        return t * t * t * t * t;
      },
      easeOutQuint: function easeOutQuint(t) {
        return 1 + --t * t * t * t * t;
      },
      easeInOutQuint: function easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
      }
    };
    var start = window.pageYOffset;
    var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

    if ('requestAnimationFrame' in window === false) {
      window.scroll(0, destinationOffsetToScroll);

      if (callback) {
        callback();
      }

      return;
    }

    function scroll() {
      var now = 'now' in window.performance ? performance.now() : new Date().getTime();
      var time = Math.min(1, (now - startTime) / duration);
      var timeFunction = easings[easing](time);
      window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

      if (window.pageYOffset === destinationOffsetToScroll) {
        if (callback) {
          callback();
        }

        return;
      }

      requestAnimationFrame(scroll);
    }

    scroll();
  }

  var buttonScroll = document.querySelector('.scroll__button');

  if (buttonScroll && document.querySelector('#info_page')) {
    buttonScroll.addEventListener('click', function () {
      scrollIt(document.querySelector('#info_page'), 700, 'easeOutQuad');
    });
  }
})();
'use strict';

(function () {
  var WIDTH_MOBILE = 768;
  var sliderMobile = tns({
    container: '.slider',
    mouseDrag: true,
    controls: false,
    nav: false,
    speed: 400,
    lazyload: true,
    lazyloadSelector: 'slider__item img',
    responsive: {
      300: {
        items: 1.2,
        center: true
      },
      769: {
        items: 3,
        center: false
      }
    }
  });
  var sliderDesktop = tns({
    container: '.slider',
    mouseDrag: true,
    controls: false,
    nav: false,
    speed: 400,
    lazyload: true,
    lazyloadSelector: 'slider__item img',
    responsive: {
      300: {
        items: 1.2,
        center: true
      },
      769: {
        items: 3,
        center: false
      }
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('resize', function () {
      if (window.matchMedia('(max-width: ' + WIDTH_MOBILE + 'px)').matches) {
        if (sliderDesktop.isOn === true) {
          sliderDesktop.destroy();
          sliderMobile = tns({
            container: '.slider',
            items: 1.2,
            center: true,
            mouseDrag: true,
            controls: false,
            nav: false,
            speed: 400,
            lazyload: true,
            lazyloadSelector: 'slider__item img'
          });
        }
      } else {
        if (sliderMobile.isOn === true) {
          sliderMobile.destroy();
          sliderDesktop = tns({
            container: '.slider',
            items: 3,
            mouseDrag: true,
            controls: false,
            nav: false,
            speed: 400,
            lazyload: true,
            lazyloadSelector: 'slider__item img'
          });
        }
      }
    });
  });
})();