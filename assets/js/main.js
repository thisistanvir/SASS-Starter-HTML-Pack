/***************************************************
==================== JS INDEX ======================
****************************************************

	Preloader
	Header Sticky
	Mobile Menu Js
	Data CSS Js
	Nice Select Js

****************************************************/

(function ($) {
	"use strict";

	////////////////////////////////////////////////////
	// Preloader
	$(window).on("load", function () {
		$("#preloader").fadeOut(500);
	});
	if ($("#preloader").length > 0) {
		$(".tj-cancel-btn").each(function () {
			$(this).on("click", function (e) {
				e.preventDefault();
				$("#preloader").fadeOut(500);
			});
		});
	}

	////////////////////////////////////////////////////
	// Header Sticky
	$(window).scroll(function () {
		var Width = $(document).width();

		if ($("body").scrollTop() > 250 || $("html").scrollTop() > 250) {
			$(".header-sticky").addClass("sticky");
		} else {
			$(".header-sticky").removeClass("sticky");
		}
	});

	////////////////////////////////////////////////////
	// Mobile Menu Js
	$("#mobile-menu").meanmenu({
		meanMenuContainer: ".mobile-menu",
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	////////////////////////////////////////////////////
	// Data CSS Js
	$("[data-bg-image]").each(function () {
		$(this).css(
			"background-image",
			"url( " + $(this).attr("data-bg-image") + "  )"
		);
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	////////////////////////////////////////////////////
	// Nice Select Js
	$("select").niceSelect();
})(jQuery);
