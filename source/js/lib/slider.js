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
        center: true,
      },
      769: {
        items: 3,
        center: false,
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
        center: true,
      },
      769: {
        items: 3,
        center: false,
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
            lazyloadSelector: 'slider__item img',
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
            lazyloadSelector: 'slider__item img',
          });
        }
      }
    });
  });
})();
