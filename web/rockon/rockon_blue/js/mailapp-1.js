 "use strict";
    $(document).on("ready", function(){
        $('.grid').masonry({
          itemSelector: '.grid-item'
        });
            
        $('.swipebox').swipebox();
        
        $('.modal').modal({
              dismissible: true, // Modal can be dismissed by clicking outside of the modal
              opacity: .5, // Opacity of modal background
              in_duration: 300, // Transition in duration
              out_duration: 200, // Transition out duration
              starting_top: '4%', // Starting top style attribute
              ending_top: '10%', // Ending top style attribute
            
            });
        
         CKEDITOR.replace( 'text_richarea' );
         CKEDITOR.replace( 'editor' );
    });
 $(document).on("resize", function(){
        $('.grid').masonry({
          itemSelector: '.grid-item'
        });
    });