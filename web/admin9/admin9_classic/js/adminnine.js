"use strict";
$(document).ready(function(){
    
    /* url  navigation active */
    var url = window.location;
    var element = $('.sidebar ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent().addClass('in').parent().parent().addClass('active');
    
    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
    
    
    
    /* Side menu drop down code */
$(".menudropdown").on('click',function(){
    if( $(this).parent().hasClass("active")==true){
         $(this).next("ul.nav").slideUp();
        $("ul.nav").parent().removeClass("active");
    }else{
        $(".sidebar-nav ul.nav ul.nav").slideUp();
        $("ul.nav").parent().removeClass("active");
        $(this).next("ul.nav").slideToggle();
        $(this).parent().toggleClass("active");
    }   
});
    $(".menudropdown2").on('click',function(){
    if( $(this).parent().hasClass("active")==true){
        $(this).next("ul.nav").slideUp();
        $(this).parent().removeClass("active");
    }else{
        $(this).next("ul.nav").slideDown();
        $(this).parent().addClass("active");
    }   
});

/* Chat icon click show chat window*/
$(".chatbtn").on('click',function(event){
    $(this).toggleClass("active");
    $(".chat-panel").toggleClass("active");
    
});




/* Search width increase decrease */
$(".searchglobal .form-control").focusin(function(){
    $(this).parent().addClass("active");  
});
$(".searchglobal .form-control").focusout(function(){
    $(this).parent().removeClass("active");  
});



/* Hide count on click top navigation*/
$(".navbar-top-links li a").on('click',function(){
    $(this).find(".count").fadeOut();

});


/* Hide sidebar on click square icon */
$(".menubtn").on('click',function(){
    $(this).toggleClass("active");
    $("body").toggleClass("menuclose");

});

/* small sidebar on click top menu icons*/
$(".navbar-toggle").on('click',function(){
    $(this).toggleClass("active");
    $("body").toggleClass("menusmall");

});

/* small sidebar on click top menu icons*/
$(".mailclose").on('click',function(){
    $('.mailcompose').removeClass("active");

});

    
/* Create mail popup */
$(".mailbtn, .compose").on('click',function(){
    $('.mailcompose').addClass("active");

});

/* Fedback popover */
$(".feedbackbtn").on('click',function(){
    $(this).parent().toggleClass("active");

});


/* Tool tip execution*/
 $('[data-toggle="tooltip"]').tooltip();


/* Toast message appends here at bosy tag */
 setTimeout(function(){
      $('body').append('<div class="alert alert-info toastupdates alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button> <strong>Updates</strong><p>Check it out with our classic designed about page. <a href="aboutus.html">Click here!</a></p></div>');
      
     setTimeout(function(){
          $('.toastupdates').addClass("active");
        },1000);
    },5000);

    
    /* Small menu on load while screen size is smaller tahn 1180*/
    if( $(window).width() <= 1180){
            $("body").addClass("menusmall");
            
        }else {
            $("body").removeClass("menusmall");           
    }
    
    
    $(window).on("load resize", function(){
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset; 
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
        
        if( $(window).width() <= 1180){
            $("body").addClass("menusmall");
        }else {
            
        }
        /* loading screen */
        $(".loader").fadeOut("slow");
    });
    
    $(document).on('scroll', function() {
        /* on scroll change about us page header background color */
        if ($(document).scrollTop() >= 100) {
            $('.aboutheader').addClass("active");
        } else {
            $('.aboutheader').removeClass("active");
        }
    });


});

  



 