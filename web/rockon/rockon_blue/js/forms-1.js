"use strict";
    $(document).on("ready", function(){
        $('select').material_select();
         
           var slider = document.getElementById('range-input');
              noUiSlider.create(slider, {
               start: [20, 80],
               connect: true,
               step: 1,
               range: {
                 'min': 0,
                 'max': 100
               },
               format: wNumb({
                 decimals: 0
               })
              });


         
         $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
          });
         
          $('input#input_text, textarea#textarea1').characterCounter();
         
      });