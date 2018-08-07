"use strict";
(function() {
/*===============================================*/
/* APP INIT		 						         */
/*===============================================*/
var myApp = new Framework7({
	material: true,
	swipePanel: 'left',
	cache: false,
	cacheDuration: 0,
	modalTitle: 'Weddings',
	showBarsOnPageScrollEnd: false,
	upscroller: {
		text: 'Back to top'
	}
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
$$(document).on('pageInit', function(e) {
	e.preventDefault();
	var page = e.detail.page;
	/* Photo Browser 
	================================*/
	var myPhotoBrowserDark = myApp.photoBrowser({
		photos: ['img/photos/gal-1.jpg', 'img/photos/gal-2.jpg', 'img/photos/gal-3.jpg', 'img/photos/gal-4.jpg', 'img/photos/gal-5.jpg', 'img/photos/gal-6.jpg', ],
		theme: 'light'
	});
	$$('.pb-standalone-dark').on('click', function() {
		myPhotoBrowserDark.open();
	});
	var mySwiper2 = myApp.swiper('.swiper-2', {
		spaceBetween: 13,
		slidesPerView: 2
	});
	var mySwiper1 = myApp.swiper('.swiper-1', {
		spaceBetween: 10
	});
	$$('.popup-about').on('opened', function() {
		var mySwiperPhotoChange = new Swiper('.swiper-photo-change', {
			spaceBetween: 10
		});
	});
	var mySwiper3 = myApp.swiper('.swiper-retro', {
		pagination: '.swiper-retro .swiper-pagination',
		paginationHide: false,
		paginationClickable: true,
	});
	$$('.pp-next').on('click', function() {
		mySwiper3.slideNext();
	});
	$$('.pp-prev').on('click', function() {
		mySwiper3.slidePrev();
	});
	$$('.pp-lifestyle').on('click', function() {
		mySwiper3.slideTo(5);
	});
	$$('.pp-basicd').on('click', function() {
		mySwiper3.slideTo(1);
	});
	$$('.pp-educatione').on('click', function() {
		mySwiper3.slideTo(2);
	});
	/* ACTION SHEET TO SHARE POSTS 
	===============================================*/
	$('.share-post').on('click', function() {
		var buttons = [{
			text: '<span class="text-thiny">Share this post with your friends</span>',
			label: true
		}, {
			text: '<span class="text-small share-post-icon share-post-facebook"><i class="flaticon-facebook"></i> Share on Facebook</span>',
		}, {
			text: '<span class="text-small share-post-icon share-post-twitter"><i class="flaticon-twitter"></i> Share on Twitter</span>',
		}, {
			text: '<span class="text-small share-post-icon share-post-whatsapp"><i class="flaticon-whatsapp"></i> Share on Whatsapp</span>',
		}, {
			text: '<span class="text-small">Cancel</span>',
			color: 'red'
		}, ];
		myApp.actions(buttons);
	});
	/* NOTIFICATIONS 
	================================*/
	$(document).on('click', '.alert', function() {
		$(this).addClass('is-hidden');
		return false;
	});
	$$('.notification-single').on('click', function() {
		myApp.addNotification({
			message: 'Simple message'
		});
	});
	$$('.notification-multi').on('click', function() {
		myApp.addNotification({
			message: 'Multi-line message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in magna nisi.',
		});
	});
	$$('.notification-custom').on('click', function() {
		myApp.addNotification({
			message: 'Nice yellow button',
			button: {
				text: 'Click me',
				color: 'yellow'
			}
		});
	});
	$$('.activeButton').on('click', function() {
		var activeButtonID = $$(this).attr("id");
		var numericId = activeButtonID.substr(activeButtonID.length - 2);
		var activeStatusBarId = "#statusBar" + numericId;
		$$(activeStatusBarId).hide();
		var statusMsgId = "#activeStatusMsg" + numericId;
		$(statusMsgId).fadeIn(300);
	});
	$$('.declineButton').on('click', function() {
		var activeButtonID = $$(this).attr("id");
		var numericId = activeButtonID.substr(activeButtonID.length - 2);
		var activeStatusBarId = "#statusBar" + numericId;
		$$(activeStatusBarId).hide();
		var statusMsgId = "#declineStatusMsg" + numericId;
		$(statusMsgId).fadeIn(300);
	});
	$$('.cancelInterest').on('click', function() {
		var cancelButtonID = $$(this).attr("id");
		var numId = cancelButtonID.substr(cancelButtonID.length - 2);
		var interestStatusBarId = "#interestStatus" + numId;
		$(interestStatusBarId).fadeOut(400);
	});
	$$('.sendintButton').on('click', function() {
		var sendintButtonID = $$(this).attr("id");
		var numericId = sendintButtonID.substr(sendintButtonID.length - 2);
		var activeintStatusBarId = "#statusintBar" + numericId;
		$$(activeintStatusBarId).hide();
		var statusintMsgId = "#activeintStatusMsg" + numericId;
		$(statusintMsgId).fadeIn(300);
	});
	/* SEARCH IN CONTACT LIST
	================================*/
	var page = e.detail.page;
	if (page.name === 'contact-list') {
		var mySearchbar = myApp.searchbar('.searchbar', {
			searchList: '.list-block-search',
			searchIn: '.item-title'
		});
	} else if (page.name === 'edit-profile') {
		var slideNumber = page.query.slide;
		mySwiper3.slideTo(slideNumber);
	}
	$$('.prompt-ok-cancel').on('click', function() {
		myApp.prompt('Enter your new email ID', function(value) {
			myApp.alert('We will varify your new email ID and update it in your profile soon "' + value + '". click Ok');
		}, function(value) {
			myApp.alert('You have not entered any ID "' + value + '". click Ok to Cancel');
		});
	});
	$$('.prompt-ok-cancel-one').on('click', function() {
		myApp.prompt('Enter your new Mobile Number', function(value) {
			myApp.alert('We will varify your new Mobile Number and update it in your profile soon "' + value + '". click Ok');
		}, function(value) {
			myApp.alert('You have not entered Mobile Number "' + value + '". click Ok to Cancel');
		});
	});
	$$('.password-modal').on('click', function() {
		myApp.modalPassword('Your password please:', function(password) {
			myApp.alert('We will manually verify your profile and delete your Account ');
		});
	});
	$$('.alert-text-title').on('click', function() {
		myApp.alert('Please link your online Payment Gateway Merchant account with this Mobile App. So you can easily recieve payments through your App.', 'Payment Gateway!');
	});
	$$('.alert-text-reminder').on('click', function() {
		myApp.alert('You have sent First Reminder to this Profile ID-XYZ2524.', 'Reminder Sent');
	});
	$$('.alert-text-viewcontact').on('click', function() {
		myApp.alert('Mobile Number: 786-458-2245<br>Suitable Time: 9:00AM-12:00AM', 'Phone Contact');
	});
	/* Acceptence CARD
	================================*/
	// Code for About page
	$$('.open-slider-modal').on('click', function() {
		var modal = myApp.modal({
			title: 'Awesome Photos?',
			text: 'Photo Gallery',
			afterText: '<div class="swiper-container" style="width: auto; margin:5px -15px -15px">' + '<div class="swiper-pagination"></div>' + '<div class="swiper-wrapper">' + '<div class="swiper-slide"><img src="img/tab-card.jpg" height="275" width="220" style="display:block"></div>' + '<div class="swiper-slide"><img src="img/cutien.jpg" height="275" width="220" style="display:block"></div>' + '<div class="swiper-slide"><img src="img/scubantu.jpg" height="275" width="220" style="display:block"></div>' + '<div class="swiper-slide"><img src="img/divyanshu.jpg" height="275" width="220" style="display:block"></div>' + '</div>' + '</div>',
			buttons: [{
				text: 'CLOSE'
			}, ]
		})
		myApp.swiper($$(modal).find('.swiper-container'), {
			pagination: '.swiper-pagination'
		});
	});
	$$('.open-slider-modal-men').on('click', function() {
		var modal = myApp.modal({
			title: 'Awesome Photos?',
			text: 'Photo Gallery',
			afterText: '<div class="swiper-container" style="width: auto; margin:5px -15px -15px">' + '<div class="swiper-pagination"></div>' + '<div class="swiper-wrapper">' + '<div class="swiper-slide"><img src="img/m2.jpg" height="275" width="220" style="display:block"></div>' + '<div class="swiper-slide"><img src="img/m3.jpg" height="275" width="220" style="display:block"></div>' + '<div class="swiper-slide"><img src="img/m1.jpg" height="275" width="220" style="display:block"></div>' + '<div class="swiper-slide"><img src="img/m4.jpg" height="275" width="220" style="display:block"></div>' + '</div>' + '</div>',
			buttons: [{
				text: 'CLOSE'
			}, ]
		})
		myApp.swiper($$(modal).find('.swiper-container'), {
			pagination: '.swiper-pagination'
		});
	});
});
})();