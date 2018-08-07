"use strict";
$(document).ready(function(){
    /* footer margin on body for sticky footer*/
    $('body').css({'margin-bottom': $(".footer").outerHeight()});
            
    /* Sidemenu open close */
    $(".side-menu-close").on("click", function(){
        $(".side-menu").toggleClass("active");
    }); 
    
    /* file explorer open close */
    $(".filemenu_btn").on("click", function(){
        $(".filemenu").toggleClass("active");
    }); 
    
    /* sidemenu */
    $(".user-profile").on("click", function(){
        $(".side-menu").toggleClass("active");
    });
    
    /* carousel speed about us */
    $('.carousel').carousel({ interval: 1500})
    
    
    /* theme picker js starts here */
    //load selected color css
    if($.type($.cookie("themecolor")) != 'undefined' && $.cookie("themecolor") != ''){
		$('link[title=styles-animations]').prop('disabled',true);
		$('head').append('<link rel="stylesheet" href="'+$.cookie("themecolor")+'" type="text/css" title="styles-animations">');
		$('.select-color').prop( "checked",false);
		$( "input[data-color='"+$.cookie("themecolor")+"']" ).prop( "checked",true);
	}
	$('.dropup .dropdown-item img').on('click', function(){
		$.cookie("themecolor", $(this).attr('alt'), { expires: 7 });
		$('link[title=styles-animations]').prop('disabled',true);
		$('head').append('<link rel="stylesheet" href="'+$.cookie("themecolor")+'" type="text/css" title="styles-animations">');
    });
    /* theme picker js ends here */

});
        
$(window).on('scroll', function(){
    /* Add style on navbar on scroll some pixels */
    if($(this).scrollTop()>10){
        $(".navbar").addClass("active")
    } else{
       $(".navbar").removeClass("active")
    }
});
$(window).on('resize', function(){
    /* footer margin on body for sticky footer*/
    $('body').css({'margin-bottom': $(".footer").outerHeight()});
});