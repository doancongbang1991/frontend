/*!
 * Adminux (http://maxartkiller.com)
 * Copyright 2017 The Adminux Author: Maxartkiller
 * purchase licence before use
 * You can not resale or modify without prior licences.
*/

/* Dashboard chart combo line and bar */
"use strict";      
        var color = Chart.helpers.color;
        var barChartData = {
            labels: ["January", "February", "March", "April", "May", "June","July"],
            datasets: [{
                type: 'bar',
                label: 'Dataset 1',
                backgroundColor: color(window.chartColors.blue).alpha(0.8).rgbString(),
                borderColor: window.chartColors.blue,
                data: [
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(),
                    randomScalingFactor(), 
                    randomScalingFactor()
                ]
            }, {
                type: 'line',
                label: 'Dataset 2',
                borderWidth: 1,
                backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
                borderColor: window.chartColors.red,
                data: [
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(),
                    randomScalingFactor(), 
                    randomScalingFactor()
                ]
            }, {
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: color(window.chartColors.green).alpha(0.8).rgbString(),
                borderColor: window.chartColors.green,
                data: [
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(),
                    randomScalingFactor(), 
                    randomScalingFactor()
                ]
            }]
        };

        // Define a plugin to provide data labels
     
           
           Chart.plugins.register({
            afterDatasetsDraw: function(chartInstance, easing) {
                // To only draw at the end of animation, check for easing === 1
                var ctx = chartInstance.chart.ctx;

                chartInstance.data.datasets.forEach(function (dataset, i) {
                    var meta = chartInstance.getDatasetMeta(i);
                    if (!meta.hidden) {
                        meta.data.forEach(function(element, index) {
                            // Draw the text in black, with the specified font
                            ctx.fillStyle = 'rgb(0, 0, 0)';

                            var fontSize = 10;
                            var fontStyle = '300';
                            var fontFamily = 'Helvetica Neue,Roboto, Sugoe UI, Arial';
                             ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                            // Just naively convert to string for now
                            var dataString = dataset.data[index].toString();

                            // Make sure alignment settings are correct
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            var padding =0;
                            var position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
                        });
                    }
                });
            }
        });

       
    
        var ctx = $("#mixedchartjs");
            window.myBar = new Chart(ctx, {
                type: 'bar',                   
                data: barChartData,
                options: {
                    responsive: true,                    
                    title: {
                        display: false,
                        text: 'Chart.js Combo Bar Line Chart',
                        
                    },
                    legend: {
                        display: false,
                        labels:{ 
                            fontColor:"#666666"}
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: "#666666",                       
                            },
                            gridLines:{
                                color:"rgba(0,0,0,0.05)",
                                zeroLineColor:"rgba(0,0,0,0.2)"
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: "#666666"
                            },
                            gridLines:{
                                color:"rgba(0,0,0,0.05)",
                                zeroLineColor:"rgba(0,0,0,0.2)"
                            }
                        }]
                    }
                }
            });
 
       $('#randomizeData').on('click', function() {
            barChartData.datasets.forEach(function(dataset) {
                dataset.data = dataset.data.map(function() { 
                    return randomScalingFactor();
                })
            });
            window.myBar.update();
        });
         setInterval(function(){
                barChartData.datasets.forEach(function(dataset) {
                dataset.data = dataset.data.map(function() { 
                    return randomScalingFactor();
                })
            });
            window.myBar.update();             
         }, 3000);
      

        /* map global */
        $('#mapwrap').vectorMap({
            map: 'world_mill',
            regionStyle: {
                    initial: {fill: '#7a99ff'}
            }
        }); 

         $('.spincreament').spincrement({
                from: 0,
                decimalPlaces: 0,
                thousandSeparator: false,
                duration: 1500, // ms; TOTAL length animation
                leeway: 50, // percent of duraion
                easing: 'spincrementEasing',
                fade: true

        });


        /* data tables*/
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


        $(window).on('load',function(){
            setTimeout(function(){
                var myvalues3 = [10,8,5,7,4,2,8,10,8,5,6,4,1,7,4,5,8,10,8,5,6,4,4,1,7,4,5,8,10,8,5,6,4,4];
                $('.dynamicsparkline2').sparkline(myvalues3,{ type: 'bar', width: '200px', height: '60', barColor: '#7a99ff', barWidth:'3', barSpacing: 3});
                var myvalues4= [10,8,5,7,4,2,8,10,8,5,6,4,1,7,4,5,8,10,8,5,6,4,4,4,7,4,5,8,10,8,5,6,4];
                $('.dynamicsparkline').sparkline(myvalues4,{ type: 'bar', width: '100px', height: '20', barColor: '#7a99ff', barWidth:'2', barSpacing: 2});
                var myvalues5= [10,8,5,7,4,2,8,10,8,5,6,4,1,7,4,5,8,10,8,5,6,4,4,4,7,4,5,8,10,8,5,6,4];
                $('.dynamicsparkline3').sparkline(myvalues5,{ type: 'bar', width: '100px', height: '20', barColor: '#ffffff', barWidth:'2', barSpacing: 2});
            }, 600);
        });