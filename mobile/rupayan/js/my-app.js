// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
   

       
  var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination',
    paginationClickable: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
  });
       
  var mySwiper = myApp.swiper('.swiper-container2', {
    autoplay: 2500,
    autoplayDisableOnInteraction: false
  });

 /*---------------------
 Load More Button js blog page
--------------------- */
myApp.onPageInit('blog', function (page) {

  size_lib = $(".single-blog").size();
    b=8;
    $('.single-blog:lt('+b+')').show();  
    $('.click-blog').click(function () {
        b= (b+4 <= size_lib) ? b+4 : size_lib;
        $('.single-blog:lt('+b+')').show(1000);  
        if(size_lib<=b)
            {
             $(".click-blog").hide(1000);
            }     
    });
        
 
});




 /*---------------------
 index page
--------------------- */ 
myApp.onPageInit('index', function (page) {
 /*---------------------
 mixItUp
--------------------- */    
   $('.awesome-portfolio-content').mixItUp({
   animation: {
       effects: 'rotateZ',
       duration: 1000,
        }
    });
  var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination',
    paginationClickable: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
  });
    var mySwiper = myApp.swiper('.swiper-container2', {
    autoplay: 2500,
    autoplayDisableOnInteraction: false
  });
       
 $(".show-team").on('click', function(){
        $(".blok-text").slideToggle();
    });
 $(".show-team2").on('click', function(){
        $(".blok-text2").slideToggle();
    });
 $(".show-team3").on('click', function(){
        $(".blok-text3").slideToggle();
    });
 $(".show-team4").on('click', function(){
        $(".blok-text4").slideToggle('blue');
    });




});














 /*---------------------
 our-team
--------------------- */  
myApp.onPageInit('our-team', function (page) {

 $(".show-teams").on('click', function(){
        $(".blok-texts").slideToggle();
    });
 $(".show-team2s").on('click', function(){
        $(".blok-text2s").slideToggle();
    });
 $(".show-team3s").on('click', function(){
        $(".blok-text3s").slideToggle();
    });
 $(".show-team4s").on('click', function(){
        $(".blok-text4s").slideToggle();
    });


});

 /*---------------------
 image-gallery
--------------------- */  
myApp.onPageInit('image-gallery', function (page) {

$('.galleryimg' ).swipebox();

});

/*---------------------
 live chat page
--------------------- */  
myApp.onPageInit('live-chat-page', function (page) {
var conversationStarted = false;
 
// Init Messages
var myMessages = myApp.messages('.messages', {
  autoLayout:true
});
 
// Init Messagebar
var myMessagebar = myApp.messagebar('.messagebar');
 
// Handle message
$$('.messagebar .link').on('click', function () {
  // Message text
  var messageText = myMessagebar.value().trim();
  // Exit if empy message
  if (messageText.length === 0) return;
 
  // Empty messagebar
  myMessagebar.clear()
 
  // Random message type
  var messageType = (['sent', 'received'])[Math.round(Math.random())];
 
  // Avatar and name for received message
  var avatar, name;
  if(messageType === 'received') {
    avatar = 'http://lorempixel.com/output/people-q-c-100-100-9.jpg';
    name = 'Madhusudan';
  }
  // Add message
  myMessages.addMessage({
    // Message text
    text: messageText,
    // Random message type
    type: messageType,
    // Avatar and name:
    avatar: avatar,
    name: name,
    // Day
    day: !conversationStarted ? 'Today' : false,
    time: !conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
  })
 
  // Update conversation flag
  conversationStarted = true;
});                
 
});



(function ($) {
 "use strict";
    
$(function(){

$( '.swipebox' ).swipebox();

$(".click-pages-menu").on('click',function(){
  $(".pages-menu-show").slideToggle();
});

$(".click-shop-menu").on('click',function(){

  $(".shop-menu-show").slideToggle();

});

 $(".show-team").on('click', function(){
        $(".blok-text").slideToggle();
    });
 $(".show-team2").on('click', function(){
        $(".blok-text2").slideToggle();
    });
 $(".show-team3").on('click', function(){
        $(".blok-text3").slideToggle();
    });
 $(".show-team4").on('click', function(){
        $(".blok-text4").slideToggle();
    });


 /*---------------------
 mixItUp
--------------------- */    

   $('.awesome-portfolio-content').mixItUp({
   animation: {
       effects: 'rotateZ',
       duration: 1000,
        }
    });



});
    
    
})(jQuery);    

  