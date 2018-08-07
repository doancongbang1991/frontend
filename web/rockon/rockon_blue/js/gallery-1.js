"use strict";
     $(document).on("ready", function(){
    $('.grid').masonry({
          itemSelector: '.grid-item'
        });            
        $('.swipebox').swipebox();
         
        $(".galleryone").on("click", function(){
        $(".grid").addClass("one");
        $(".grid").removeClass("two three");
        $('.grid').masonry({
          itemSelector: '.grid-item'
        });
    });
    
    $(".gallerytwo").on("click", function(){
        $(".grid").addClass("two");
        $(".grid").removeClass("one  three");
        $('.grid').masonry({
          itemSelector: '.grid-item'
        });
    });
    
    $(".gallerythree").on("click", function(){
        $(".grid").addClass("three");
        $(".grid").removeClass("two one");
        $('.grid').masonry({
          itemSelector: '.grid-item'
        });
    });
       $(window).bind("load resize", function(){
           $('.grid').masonry({
               itemSelector: '.grid-item'
           });
       });
	 });