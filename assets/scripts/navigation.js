jQuery(document).ready(function($) {

    $(".op-menu").click(function(e) {
    	if ($('.menu').hasClass("vhidden")) {
			$('.menu').removeClass("vhidden");
			$('body').addClass("overflow");
			$('.bottomleft').addClass("btfull");
			$('.bottomright').addClass("btfull");
			$('.bottomright').removeClass("animate_line3");
			$('.bottomleft').removeClass("animate_line3");
			$('.line').removeClass("light");
			$('.line').addClass("dark");
			$('.op-menu').addClass("darkt");
			$('.op').addClass("hidden");
			$('.cl').removeClass("hidden");
			$('.menu-icon').addClass("close");
		} else {
			$('.menu').addClass("vhidden");
			$('body').removeClass("overflow");
			$('.line').removeClass("dark");
			$('.line').addClass("light");
			$('.op').removeClass("hidden");
			$('.cl').addClass("hidden");
			$('.op-menu').removeClass("darkt");
			$('.menu-icon').removeClass("close");
		}
	 });
		
		$(".menu a").click(function(e) {
    	if ($('.menu').hasClass("vhidden")) {
			$('.menu').removeClass("vhidden");
			$('body').addClass("overflow");
			$('.line').removeClass("light");
			$('.line').addClass("dark");
			$('.op-menu').addClass("darkt");
			$('.op').addClass("hidden");
			$('.cl').removeClass("hidden");
			$('.menu-icon').addClass("close");
		} else {
			$('.menu').addClass("vhidden");
			$('body').removeClass("overflow");
			$('.line').removeClass("dark");
			$('.line').addClass("light");
			$('.op').removeClass("hidden");
			$('.cl').addClass("hidden");
			$('.op-menu').removeClass("darkt");
			$('.menu-icon').removeClass("close");
		}
    });
   });