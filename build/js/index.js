"use strict";!function(){var e=27,n=document.querySelector("body"),s=document.querySelector(".header__menu"),a=document.querySelector(".header__inner");if(s&&a){window.addEventListener("resize",(function(){window.matchMedia("(max-width: 768px)").matches?!n.classList.contains("body_hidden")&&s.classList.contains("header__menu--open")&&n.classList.add("body_hidden"):n.classList.remove("body_hidden")})),document.addEventListener("keydown",(function(n){n.keyCode===e&&a.classList.contains("header__inner--open")&&(a.classList.remove("header__inner--open"),s.classList.remove("header__menu--open"))})),document.addEventListener("click",(function(e){a.classList.contains("header__inner--open")?e.target.parentNode.classList.contains("header__inner--open")||e.target.classList.contains("header__link")?e.target.parentNode.classList.contains("header__inner--open")&&(a.classList.remove("header__inner--open"),s.classList.remove("header__menu--open"),n.classList.remove("body_hidden")):(a.classList.remove("header__inner--open"),s.classList.remove("header__menu--open"),n.classList.remove("body_hidden")):e.target.classList.contains("header__menu")&&(e.target.parentNode.classList.contains("header__inner--open")?e.target.parentNode.classList.remove("header__inner--open"):e.target.parentNode.classList.add("header__inner--open"),e.target.classList.contains("header__menu--open")?e.target.classList.remove("header__menu--open"):e.target.classList.add("header__menu--open"),window.matchMedia("(max-width: 768px)").matches&&(n.classList.contains("body_hidden")?n.remove("body_hidden"):n.classList.add("body_hidden")))}))}}();
"use strict";document.addEventListener("mouseup",(function(t){"A"!==t.target.tagName&&"BUTTON"!==t.target.tagName||t.target.blur()}));
"use strict";!function(){var e=document.querySelector(".scroll__button");e&&document.querySelector("#info_page")&&e.addEventListener("click",(function(){!function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",u=arguments.length>3?arguments[3]:void 0,o={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},i=window.pageYOffset,r="now"in window.performance?performance.now():(new Date).getTime(),c=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),a=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,d="number"==typeof e?e:e.offsetTop,f=Math.round(c-d<a?c-a:d);if("requestAnimationFrame"in window==!1)return window.scroll(0,f),void(u&&u());function m(){var e="now"in window.performance?performance.now():(new Date).getTime(),c=Math.min(1,(e-r)/n),a=o[t](c);window.scroll(0,Math.ceil(a*(f-i)+i)),window.pageYOffset!==f?requestAnimationFrame(m):u&&u()}m()}(document.querySelector("#info_page"),700,"easeOutQuad")}))}();
"use strict";tns({container:".slider",mouseDrag:!0,controls:!1,nav:!1,speed:400,lazyload:!0,lazyloadSelector:"slider__item img",responsive:{300:{items:1.2,center:!0},769:{items:3,center:!1}}});