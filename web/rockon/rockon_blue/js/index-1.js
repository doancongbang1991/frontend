"use strict";
    $(document).on("ready", function(){
           $('#dataTables-example').DataTable({
                responsive: true,
                pageLength:5,
                sPaginationType: "full_numbers",
                oLanguage: {
                    oPaginate: {
                        sFirst: "<<",
                        sPrevious: "<",
                        sNext: ">", 
                        sLast: ">>" 
                    }
                }
            });
            
            
            /* map global */
             $('#mapwrap').vectorMap({
                 map: 'world_mill',
                 regionStyle: {
                      initial: {fill: '#4CAF50'}
                  }
            });                
    
            /* Sparklines can also take their values from the first argument 
            passed to the sparkline() function */
            var myvalues = [10,8,5,7,4,2,8,10,8,5,6,4,10,8,5,7,4,2,3,8,5,4,2,4,9,8,5,7,4,5,8,10,8,5,6,4,4];
            $('.dynamicsparkline').sparkline(myvalues,{ type: 'line', width: '100%', height: '30', lineColor: '#ffffff', fillColor: 'rgba(255, 255, 255, 0.2)',  spotColor: '#ffffff',  minSpotColor: '#ffffff', maxSpotColor: '#ffffff'});

            /* The second argument gives options such as chart type */
            $('.dynamicbar3').sparkline(myvalues, {type: 'bar', width:'100%', height:'30', barWidth: 4, barColor: 'rgba(255, 255, 255, 0.4)'} );

            /* Use 'html' instead of an array of values to pass options 
            to a sparkline with data in the tag */
            $('.inlinebar').sparkline('html', {type: 'bar', barColor:'rgba(255, 255, 255, 0.4)', height:'30', barWidth: 4} );


            /* Carousal Slider script */
            $('.carousel.carousel-slider').carousel({full_width: true});
            /* Slider script */
            $('.slider').slider({full_width: true});
        
        $(window).resize(function(){
            
            $('#dataTables-example').DataTable();
            
        });
        
  

    });