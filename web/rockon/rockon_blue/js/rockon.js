"use strict";
 
$(document).on("ready", function(){
     /* url  navigation active */
    var url = window.location;
    var element = $('.side-nav li a').filter(function() {
        return this.href == url;
    }).addClass('active').parent("li").addClass('active').parentsUntil("collapsible-body").slideDown().parent(".bold").addClass("active").children("a").addClass("active");
    
    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
	
	$(".menu-collapse").on("click", function(){
        $("body").toggleClass("menuclose");
    });
    $(".menu-small").on("click",function(){
        $("body").toggleClass("menusmall");
    });

    $(".menuclosebtn").on("click",function(){
        $("body").removeClass("menusmall");
        $("body").removeClass("menuclose");
    });
    
     $(".chat-collapse").on("click", function(){
        $(".chat_panel").toggleClass("chatopen");
    });
    $(".chat-close").on("click", function(){
        $(".chat_panel").removeClass("chatopen");
    });
    
     $(".theme-collapse").on("click", function(){
        $(".theme_panel").toggleClass("themeopen");
    });
    $(".theme-close").on("click", function(){
        $(".theme_panel").removeClass("themeopen");
    });
    
    $(".theme_picker .theme_block").on("click", function(){
        var theme =$(this).attr("alt");
		createCookie('theme_class',theme,15) ;// call cookie
        $("body").removeClass().addClass(theme);
        
    });
    
});


/******Set theme class cookie*******/

var theme_class = readCookie('theme_class');
if( theme_class != ''){
	$("body").removeClass().addClass(theme_class);
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}