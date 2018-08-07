"use strict";

/*===============================================*/
/* APP INIT		 						         */
/*===============================================*/
var myApp = new Framework7({
	material: true,
	swipePanel: 'left',
	modalTitle: 'Doctorz',
	showBarsOnPageScrollEnd: false,
	upscroller: {text : 'Back to top'}
});


/*===============================================*/
/* EXPORT SELECTORS ENGINE		 			     */
/*===============================================*/
var $$ = Dom7;

/*===============================================*/
/* ADD VIEW		 			     				 */
/*===============================================*/

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

/*==================================================================*/
/* PAGE INIT : HERE, YOU CAN WRITE YOUR CUSTOM JAVASCRIPT/JQUERY    */
/*==================================================================*/


$$(document).on('pageInit', function (e) {
	e.preventDefault();
	
	
	/* Photo Browser 
	================================*/

			var myPhotoBrowserDark = myApp.photoBrowser({
			photos : [
				'img/photos/gal-1.jpg',
				'img/photos/gal-2.jpg',
				'img/photos/gal-3.jpg',
				'img/photos/gal-4.jpg',
				'img/photos/gal-5.jpg',
				'img/photos/gal-6.jpg',
			],
			theme: 'light'
		});

			$$('.pb-standalone-dark').on('click', function () {
			myPhotoBrowserDark.open();
			});
	
	/* SLIDE SLICK 
	================================*/
	var slickOpts = {
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows: false,
        dots: true,
		centerMode: true,
		centerPadding: '15px',
    };
    $('#walkthrough-slides').slick(slickOpts);
	
	
	/* ACTION SHEET TO SHARE POSTS 
	===============================================*/
	$('.share-post').on('click', function () {

		var buttons = [
			{
				text: '<span class="text-thiny">Share this post with your friends</span>',
				label: true
			},
			{
				text: '<span class="text-small share-post-icon share-post-facebook"><i class="flaticon-facebook"></i> Share on Facebook</span>',
			},
			{
				text: '<span class="text-small share-post-icon share-post-twitter"><i class="flaticon-twitter"></i> Share on Twitter</span>',
			},
			{
				text: '<span class="text-small share-post-icon share-post-whatsapp"><i class="flaticon-whatsapp"></i> Share on Whatsapp</span>',
			},
			{
				text: '<span class="text-small">Cancel</span>',
				color: 'red'
			},
		];
		myApp.actions(buttons);
	});
	
	/* NOTIFICATIONS 
	================================*/
	$(document).on('click', '.alert', function() {
		$(this).addClass('is-hidden');
		return false;
	});
	
	$$('.notification-single').on('click', function () {
		myApp.addNotification({
			message: 'Simple message'
		});
	});
	$$('.notification-multi').on('click', function () {
		myApp.addNotification({
			message: 'Multi-line message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in magna nisi.',
		});
	});
	$$('.notification-custom').on('click', function () {
		myApp.addNotification({
			message: 'Nice yellow button',
			button: {
				text: 'Click me',
				color: 'yellow'
			}
		});
	});
	
	/* SEARCH IN CONTACT LIST
	================================*/
	var page = e.detail.page;
	if (page.name === 'contact-list') {
		var mySearchbar = myApp.searchbar('.searchbar', {
			searchList: '.list-block-search',
			searchIn: '.item-title'
		}); 
	}
	
	/* CHARTS 
	================================*/
	
	if (page.name === 'charts') {
		/* 01. LINE CHART 
		--------------------------------------------------------------*/
		var lineCtx = document.getElementById("lineChart");
		var data = {
			labels: ["J", "F", "M", "A", "M", "J", "Ju"],
			datasets: [
				{
					label: "My First dataset",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(75,192,192,0.4)",
					borderColor: "rgba(75,192,192,1)",
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: "rgba(75,192,192,1)",
					pointBackgroundColor: "#fff",
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: "rgba(75,192,192,1)",
					pointHoverBorderColor: "rgba(220,220,220,1)",
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: [65, 59, 80, 81, 56, 55, 40],
				}
			]
		};
		var myLineChart = new Chart(lineCtx, {
			type: 'line',
			data: data
		});
		
		/* 02. BAR CHART 
		--------------------------------------------------------------*/
		var data = {
			labels: ["J", "F", "M", "A", "M", "J", "Ju"],
			datasets: [
				{
					label: "My First dataset",
					backgroundColor: "rgba(255,99,132,0.2)",
					borderColor: "rgba(255,99,132,1)",
					borderWidth: 1,
					hoverBackgroundColor: "rgba(255,99,132,0.4)",
					hoverBorderColor: "rgba(255,99,132,1)",
					data: [65, 59, 80, 81, 56, 55, 40],
				}
			]
		};
		var data2 = {
			labels: ["J", "F", "M", "A", "M", "J", "Ju"],
			datasets: [
				{
					label: "My First dataset",
					backgroundColor: "rgba(63, 81, 181,0.2)",
					borderColor: "rgb(103, 58, 183,0.2)",
					borderWidth: 1,
					hoverBackgroundColor: "rgba(63, 81, 181,0.4)",
					hoverBorderColor: "rgb(103, 58, 183,1)",
					data: [65, 59, 80, 81, 56, 55, 40],
				}
			]
		};
		var barCtx = document.getElementById("barChart");
		var horizontalBarCtx = document.getElementById("horizontalBarChart");
		
		var myLineChart = new Chart(barCtx, {
			type: 'bar',
			data: data
		})
		var myLineChart = new Chart(horizontalBarCtx, {
			type: 'horizontalBar',
			data: data2
		})
		
		/* 03. PIE & DOUGHNUT CHART 
		--------------------------------------------------------------*/
		var data = {
			labels: [
				"Red",
				"Blue",
				"Yellow"
			],
			datasets: [
				{
					data: [300, 50, 100],
					backgroundColor: [
						"#f44336",
						"#3f51b5",
						"#ffeb3b"
					],
					hoverBackgroundColor: [
						"#f44336",
						"#3f51b5",
						"#ffeb3b"
					]
				}]
		};
		var pieCtx = document.getElementById("pieChart");
		var doughnutCtx = document.getElementById("doughnutChart");
		var myLineChart = new Chart(pieCtx, {
			type: 'pie',
			data: data
		})
		var myLineChart = new Chart(doughnutCtx, {
			type: 'doughnut',
			data: data
		});
	}
	
	
	
	
	
	/* CALENDAR 
	================================*/
	var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];
 
	var calendarInline = myApp.calendar({
		container: '#calendar-inline-container',
		value: [new Date()],
		weekHeader: false,
		toolbarTemplate: 
			'<div class="toolbar calendar-custom-toolbar">' +
				'<div class="toolbar-inner">' +
					'<div class="left">' +
						'<a href="#" class="link icon-only"><i class="icon icon-back"></i></a>' +
					'</div>' +
					'<div class="center"></div>' +
					'<div class="right">' +
						'<a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>' +
					'</div>' +
				'</div>' +
			'</div>',
		onOpen: function (p) {
			$$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
			$$('.calendar-custom-toolbar .left .link').on('click', function () {
				calendarInline.prevMonth();
			});
			$$('.calendar-custom-toolbar .right .link').on('click', function () {
				calendarInline.nextMonth();
			});
		},
		onMonthYearChangeStart: function (p) {
			$$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
		}
	});
	
	
});



