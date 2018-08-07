$(document).ready(function() {
	
	// Sidebar Overlay
	
	var $sidebarOverlay = $(".sidebar-overlay");
	$("#mobile_btn").on("click", function(e) {
		var $target = $($(this).attr("href"));
		if ($target.length) {
			$target.toggleClass("opened");
			$sidebarOverlay.toggleClass("opened");
			$("body").toggleClass("menu-opened");
			$sidebarOverlay.attr("data-reff", $(this).attr("href"))
		}
		e.preventDefault()
	});
	$sidebarOverlay.on("click", function(e) {
		var $target = $($(this).attr("data-reff"));
		if ($target.length) {
			$target.removeClass("opened");
			$("body").removeClass("menu-opened");
			$(this).removeClass("opened")
			$(".main-wrapper").removeClass("slide-nav");
		}
		e.preventDefault()
	});
	
	// Select2
	
	if($('.select').length > 0 ){
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
	
	// Slimscroll

	if($('.slimscroll').length > 0 ){
		if (screen.width >= 992) {
			$('.slimscroll').slimScroll({
				height: 'auto',
				width: '100%',
				position: 'right',
				size: "7px",
				color: '#ccc',
				wheelStep: 10,
				touchScrollStep : 100
			});
			var h=$(window).height()-60;
			$('.slimscroll').height(h);
			$('.sidebar .slimScrollDiv').height(h);
			
			$(window).resize(function(){
				var h=$(window).height()-60;
				$('.slimscroll').height(h);
				$('.sidebar .slimScrollDiv').height(h);
			});
		}
	}
	
	// Page content height

	if($('.content-wrap').length > 0 ){
		var height = $(window).height();	
		$(".content-wrap").css("min-height", height);
	}
	
	$(window).resize(function(){
		if($('.content-wrap').length > 0 ){
			var height = $(window).height();
			$(".content-wrap").css("min-height", height);
		}
	});
	
	// Date Time Picker
	
	if($('.datetimepicker').length > 0 ){
		$('.datetimepicker').datetimepicker({
			format: 'DD/MM/YYYY'
		});
	}
	
	// Datatable

	if($('.datatable').length > 0 ){
		$('.datatable').DataTable({
			"bFilter": false,
		});
	}
	
	// Tooltip

	if($('[data-toggle="tooltip"]').length > 0 ){
		$('[data-toggle="tooltip"]').tooltip();
	}
	
	// Mobile Menu

	if($('.main-wrapper').length > 0 ){
	var $wrapper = $(".main-wrapper");
		$(document).on('click', '#mobile_btn', function (e) {
			$(".dropdown.open > .dropdown-toggle").dropdown("toggle");
			return false;
		});
		$(document).on('click', '#mobile_btn', function (e) {
			$wrapper.toggleClass('slide-nav');
			return false;
		});
	}
	
	// Dropdown in Table responsive 

	$('.table-responsive').on('shown.bs.dropdown', function (e) {
	var $table = $(this),
		$dropmenu = $(e.target).find('.dropdown-menu'),
		tableOffsetHeight = $table.offset().top + $table.height(),
		menuOffsetHeight = $dropmenu.offset().top + $dropmenu.outerHeight(true);

	if (menuOffsetHeight > tableOffsetHeight)
	  $table.css("padding-bottom", menuOffsetHeight - tableOffsetHeight);
	});
	$('.table-responsive').on('hide.bs.dropdown', function () {
		$(this).css("padding-bottom", 0);
	})
	
});