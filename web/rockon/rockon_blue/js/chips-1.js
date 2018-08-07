"use strict";
    $(document).on("ready", function(){
        var chip = {
            tag: 'chip content',
            image: '', //optional
            id: 1, //optional
        };
       
        $('.chips').material_chip();
        
        $('.chips-initial').material_chip({
              readOnly: true,
              data: [{
                tag: 'Apple',
              }, {
                tag: 'Microsoft',
              }, {
                tag: 'Google',
              }]
        });

        $('.chips-placeholder').material_chip({
              placeholder: 'Enter a tag',
              secondaryPlaceholder: '+Tag',
        });
         
         
    });