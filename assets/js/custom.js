!function(a){"use strict";a(window).scroll(function(){var e=a(window).scrollTop();a(".header-text").height()-a("header").height()<=e?a("header").addClass("background-header"):a("header").removeClass("background-header")}),a(".filters ul li").click(function(){a(".filters ul li").removeClass("active"),a(this).addClass("active");var e=a(this).attr("data-filter");t.isotope({filter:e})});var t=a(".grid").isotope({itemSelector:".all",percentPosition:!0,masonry:{columnWidth:".all"}});function o(e){var o=a(document).scrollTop();a(".nav a").each(function(){var e=a(this),t=a(e.attr("href"));t.position().top<=o&&t.position().top+t.height()>o?(a(".nav ul li a").removeClass("active"),e.addClass("active")):e.removeClass("active")})}function e(){var e=a(window).width();a(".submenu").on("click",function(){e<767&&(a(".submenu ul").removeClass("active"),a(this).find("ul").toggleClass("active"))})}a(".Modern-Slider").slick({autoplay:!0,autoplaySpeed:1e4,speed:600,slidesToShow:1,slidesToScroll:1,pauseOnHover:!1,dots:!0,pauseOnDotsHover:!0,cssEase:"linear",draggable:!1,prevArrow:'<button class="PrevArrow"></button>',nextArrow:'<button class="NextArrow"></button>'}),a(".search-icon a").on("click",function(e){e.preventDefault(),a("#search").addClass("open"),a('#search > form > input[type="search"]').focus()}),a("#search, #search button.close").on("click keyup",function(e){e.target!=this&&"close"!=e.target.className&&27!=e.keyCode||a(this).removeClass("open")}),a("#search-box").submit(function(e){return e.preventDefault(),!1}),a(".owl-carousel").owlCarousel({loop:!0,margin:30,nav:!1,pagination:!0,responsive:{0:{items:1},600:{items:2},1e3:{items:3}}}),e(),window.sr=new scrollReveal,a(".menu-trigger").length&&a(".menu-trigger").on("click",function(){a(this).toggleClass("active"),a(".header-area .nav").slideToggle(200)}),a("a[href*=\\#]:not([href=\\#])").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=(e=a(this.hash)).length?e:a("[name="+this.hash.slice(1)+"]");if(e.length)return a(window).width()<991&&(a(".menu-trigger").removeClass("active"),a(".header-area .nav").slideUp(200)),a("html,body").animate({scrollTop:e.offset().top-80},700),!1}}),a(document).ready(function(){a(document).on("scroll",o),a('a[href^="#"]').on("click",function(e){e.preventDefault(),a(document).off("scroll"),a("a").each(function(){a(this).removeClass("active")}),a(this).addClass("active");t=this.hash;var t=a(this.hash);a("html, body").stop().animate({scrollTop:t.offset().top-79},500,"swing",function(){window.location.hash=t,a(document).on("scroll",o)})})}),a(window).on("load",function(){a(".cover").length&&a(".cover").parallax({imageSrc:a(".cover").data("image"),zIndex:"1"}),a("#preloader").animate({opacity:"0"},600,function(){setTimeout(function(){a("#preloader").css("visibility","hidden").fadeOut()},300)})}),a(window).on("resize",function(){e()})}(window.jQuery);