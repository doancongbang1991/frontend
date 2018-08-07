"use strict";

/*===============================================*/
/* APP INIT		 						         */
/*===============================================*/
var myApp = new Framework7({
	material: true,
	init: false,
	swipePanel: 'left',
	cache: 'false'
		
});

/*===============================================*/
/* EXPORT SELECTORS ENGINE		 			     */
/*===============================================*/
var $$ = Dom7;

/*===============================================*/
/* ADD VIEW		 			     				 */
/*===============================================*/
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


/*=========================================================*/
/* SHOW/HIDE PRELOADER FOR REMOTE AJAX LOADED PAGES		   */
/*=========================================================*/

$$(document).on('ajaxStart', function (e) {
    myApp.showIndicator();
});
$$(document).on('ajaxComplete', function () {
    myApp.hideIndicator();
});



/*==================================================================*/
/* PAGE INIT : HERE, YOU CAN WRITE YOUR CUSTOM JAVASCRIPT/JQUERY    */
/*==================================================================*/

$$(document).on('pageInit', function (e) {
	
	
	/* SLIDE SLICK 
	================================*/
	var slickOpts = {
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows: false,
        dots: true,
		centerMode: true,
		centerPadding: '15px',
		adaptiveHeight: true,
    };
    $('#walkthrough-items').slick(slickOpts);
	
	var calendarDefault = myApp.calendar({
		input: '#calendar-default',
	});
	
	
	var pickerDescribe = myApp.picker({
		input: '#picker-time',
		cols: [
			{
				textAlign: 'left',
				values: (function () {
					var arr = [];
					for (var i = 0; i <= 23; i++) { arr.push(i); }
					return arr;
				})(),
			},
			{
				values: ('PM AM').split(' ')
			},
		]
				
	});
	
// 1 Slide Per View, 50px Between
var mySwiper1 = myApp.swiper('.swiper-1', {
  pagination:'.swiper-1 .swiper-pagination',
  spaceBetween: 50
});
	
	
	
});

 
//And now we initialize app
myApp.init();