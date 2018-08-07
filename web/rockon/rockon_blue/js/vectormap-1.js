"use strict";
    $(document).on("ready", function(){
        var gdpData = {
          "AF": 16.63,
          "AL": 11.58,
          "AU": 158.97,
          "IN": 100.97,
        };
         $('#mapwrap2').vectorMap({
              map: 'world_mill',
              series: {
                regions: [{
                  values: gdpData,
                  scale: ['#C8EEFF', '#0071A4'],
                  normalizeFunction: 'polynomial'
                }]
              },
              onRegionTipShow: function(e, el, code){
                el.html(el.html()+' (GDP - '+gdpData[code]+')');
              }
         });
        $('#mapwrap').vectorMap({map: 'world_mill'});
        $('#mapasiawrap').vectorMap({
              map: 'asia_mill',regionStyle: {
                  initial: { fill: '#c2dbe6'}
              }
        });
        $('#mapafricawrap').vectorMap({
              map: 'africa_mill',regionStyle: {
              initial: {fill: '#c2dbe6'}
              }
        });
        $('#mapusawrap').vectorMap({map: 'us_aea'});
        $('#mapindiawrap').vectorMap({map: 'in_mill'});
    });