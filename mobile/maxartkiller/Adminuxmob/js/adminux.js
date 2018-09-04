/*!
 * Adminux (http://maxartkiller.com)
 * Copyright 2017 The Adminux Author: Maxartkiller
 * purchase licence before use
 * You can not resale and/or modify without prior licences.
*/

"use strict";
 
$(document).on("ready", function(){
     /*LAYOUT CONTENT SCRIPT*/
    var body_1= $('body');
    
    if( body_1.hasClass("scroll_header") === true){
       $(window).on("scroll", function(){
            if ($(document).scrollTop() >= 250) {
                body_1.addClass("active_scroll");
            }else{ 
                body_1.removeClass("active_scroll");
            }
        });
    }
    
    $(window).on("load", function(){
         /*cicular progress sidebar home page */   
         $('.progress_profile').circleProgress({ 
             fill: {gradient: ["#2ec7cb", "#6c8bef"]},
             lineCap: 'butt'
         });
        
         /* Sparklines can also take their values from the first argument   passed to the sparkline() function */
        var myvalues = [10,8,5,7,4,2,8,10,8,5,6,4,1,7,4,5,8,10,8,5,6,4,4];
        $('.dynamicsparkline').sparkline(myvalues,{ type: 'bar', width: '100px', height: '20', barColor: '#ffffff', barWidth:'2', barSpacing: 2});
        
        var myvalues2 = [10,8,5,7,4,2,8,10,8,5,6,4,1,7,4,5,8,10,8,5,6,4,4,1,7,4,5,8,10,8,5,6,4,4];
        $('.dynamicsparkline2').sparkline(myvalues2,{ type: 'bar', width: '200px', height: '60', barColor: '#ffffff', barWidth:'3', barSpacing: 3});
        
        
        /* url  navigation active */
        var url = window.location;        
        function menuitems(){            
            if(body_1.hasClass('horizontal-menu') === false){
                var element = $('.sidebar-left #side-menu li a').filter(function() {
                    return this.href == url;
                }).addClass('active').parent("li").addClass('active').closest('.nav').addClass('in').slideDown().prev().addClass('show');

                $('.sidebar-left .nav li a').on('click', function(){
                    if( $(this).hasClass('menudropdown')=== true){ 
                        $(this).toggleClass("show").next().slideToggle().parent().addClass("in");
                    } 
                });                
            }else {
                if( $(window).width() >=1020){
                    var element = $('.sidebar-left #side-menu li a').filter(function() {
                        return this.href == url;
                    }).addClass('active').parent("li").addClass('active').closest('.nav').addClass('in').prev().addClass('show');

                    $('.sidebar-left > .nav > li').on('mouseover', function(){
                        if( $(this).find('a:first-of-type').hasClass('menudropdown')==true){ 
                            $(this).find('a:first-of-type').addClass("show").next().slideDown().parent().addClass("in");
                        } 
                    }); 
                    $('.sidebar-left > .nav > li ').on('mouseleave', function(){
                        if( $(this).find('a:first-of-type').hasClass('menudropdown')==true){ 
                            $(this).find('a:first-of-type').removeClass("show").next().slideUp().parent().removeClass("in");
                        } 
                    });                 
                }
                else{
                    var element = $('.sidebar-left #side-menu li a').filter(function() {
                        return this.href == url;
                    }).addClass('active').parent("li").addClass('active').closest('.nav').addClass('in').slideDown().prev().addClass('show');

                    $('.sidebar-left .nav li a').on('click', function(){
                        if( $(this).hasClass('menudropdown')===true){ 
                            $(this).toggleClass("show").next().slideToggle().parent().addClass("in");
                        } 
                    });               
                }               
            }
        }
       menuitems();
        
        /*Full screen result container show*/
        $('#search_header').on('focus', function(){
            $(".search-block").show();   
            body_1.addClass('searchshow');$('#search_header').focusout();
            
        });
        
        /* Search window screen fullscreen open */
        $('.search-block .close-btn').on('click', function(){
            $(".search-block").slideUp();  
             body_1.removeClass('searchshow');
        });
        
        /* on keypress hide search block which was in fullscreen */
        $(document).keyup(function(e) {
            if (e.keyCode == 27) { // escape key maps to keycode `27`
                $(".search-block").fadeOut();   
                body_1.removeClass('searchshow');
                 $('#search_header').focusout();
            }
        });
        
        /* inbox mail page  collapsible */
        $(".inboxmenu").on("click", function(){
            $(".mailboxnav ").toggleClass("mailboxnavopen");
        });
        
        /* menu  collapsible */
        $(".menu-collapse").on("click", function(){
            body_1.toggleClass("menuclose");
        });
        $(".menu-collapse-right").on("click", function(){
            body_1.toggleClass("menuclose-right");
        });
        $(".menu-small").on("click",function(){
            body_1.toggleClass("menusmall");
        });
     
       
   });
    
    /* Custome css checkbox script */
    $('.form-check-input').on('change', function(){
        $(this).parent().toggleClass("active")
        $(this).closest(".media").toggleClass("active");
    }); 
    
    /* Card fullscreeen button script */
    $('.fullscreen-btn').on('click', function(){
        $(this).closest(".full-screen-container").toggleClass("fullscreen");
        body_1.toggleClass("fullscreen");
    });
    
    
    /* Resposnsive Utility hide menu */
    if($(window).width() <= 1440){  body_1.addClass('menuclose menuclose-right'); }
    
    $(window).on('resize', function(){
        if($(window).width() <= 1440){  body_1.addClass('menuclose menuclose-right'); }
    });
    
});

