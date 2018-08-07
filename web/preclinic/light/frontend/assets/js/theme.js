$(document).ready(function() {
	
	// Mobile menu overlay
	
	var $sidebarOverlay = $(".sidebar-overlay");
	$(".toggle-menu").on("click", function(e) {
		var $target = $($(this).attr("href"));
		if ($target.length) {
			$target.toggleClass("opened");
			$sidebarOverlay.toggleClass("opened");
			$("body").toggleClass("menu-opened");
			$sidebarOverlay.attr("data-reff", $(this).attr("href"));
		}
		e.preventDefault();
	});
	
	$sidebarOverlay.on("click", function(e) {
		var $target = $($(this).attr("data-reff"));
		if ($target.length) {
			$target.removeClass("opened");
			$("body").removeClass("menu-opened");
			$(this).removeClass("opened");
		}
		e.preventDefault();
	});
	
	// Mobile Menu

    handleMobileMenu();

    // Mobile Menu Handler
    function handleMobileMenu() {
        var phoneMenuWrapper = $('.mobile-menu-wrapper');
        var phoneSubmenuWrapper = $('.mobile-submenu-wrapper');

        phoneMenuWrapper.css({
            display: 'block'
        });
        phoneSubmenuWrapper.css({
            display: 'none'
        });
        $('.menu-toggle').click(function() {
            $(this).parents('li').children('.mobile-submenu-wrapper').slideToggle(300);
            return false;
        });
    }
	
	// Testimonial Carousel
	
	if($('#testimonial_slider').length > 0 ){
		$("#testimonial_slider").owlCarousel({
			autoPlay: 3000,
			navigation : false, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
			items:1
		});
	}
	
	// Doctor Carousel

	if($('#our_doctor').length > 0 ){
		$("#our_doctor").owlCarousel({
			autoPlay:false,
			items :6,
			margin: 10,
			pagination : false,
			nav: true,
			loop: true,
			navText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive: {
			  0: {
				items: 1
			  },
			  600: {
				items: 3
			  },
			  1000: {
				items: 6
			  }
			}
		});
	}
	
	// Header menu dropdown

	$(".header .dropdown").hover(            
		function() {
			$('.dropdown-menu', this).stop( true, true ).slideDown("fast");
			$(this).toggleClass('open');            
		},
		function() {
			$('.dropdown-menu', this).stop( true, true ).slideUp("fast");
			$(this).toggleClass('open');            
		});
		
	// Date Time Picker	
		
	if($('.datetimepicker').length > 0 ){
		$('.datetimepicker').datetimepicker({
			format: 'DD/MM/YYYY'
		});
	}
	
	// Select2

	if($('.select').length > 0 ){
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
});