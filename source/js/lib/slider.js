'use strict';
(function () {

  var slider = tns({
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
})();
