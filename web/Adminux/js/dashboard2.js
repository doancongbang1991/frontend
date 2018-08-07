/*!
 * Adminux (http://maxartkiller.com)
 * Copyright 2017 The Adminux Author: Maxartkiller
 * purchase licence before use
 * You can not resale or modify without prior licences.
*/

/* Dashboard chart combo line and bar */
"use strict";
var ctx = document.getElementById("linechart").getContext('2d');;
var gradient2 = ctx.createLinearGradient(0, 0, 0, 450);
gradient2.addColorStop(0, 'rgba(13,208,229,1)');   
gradient2.addColorStop(0.5, 'rgba(141,131,253,0.2)');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Amit", "Max", "Kumari", "Emma", "Kitti", "John","Megon","Tom","Jackman"],
        datasets: [{
            label: ' Used MB',
            backgroundColor: gradient2,
            data: [65, 59, 60, 71, 56, 55, 40,65, 59, 60, 71, 56, 55, 40],
            borderColor: "rgba(13,208,229,1)",
            borderCapStyle: 'butt',
            borderDash: [],            
            borderDashOffset:1,
            borderJoinStyle: 'bevel',
            pointBorderColor: "#cccccc",
            pointBackgroundColor: "#cccccc",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
        }]
    },
    options: {
                responsive:true,
                maintainAspectRatio: true,              
                title: {
                    display: false,
                    text: 'Chart.js  Line Chart',
                },
                legend: {
                    display: false,
                    labels:{ 
                    fontColor:"#b7c8ff"}
                },
                scales: {
                    yAxes: [{
                    ticks: {
                        fontColor: "#b7c8ff",
                        beginAtZero: false,
                    },
                    gridLines:{
                        color:"rgba(160,160,160,0.1",
                        zeroLineColor:"rgba(160,160,160,0.1)"
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: "#b7c8ff"
                    },
                    gridLines:{
                        color:"rgba(160,160,160,0.1)",
                        zeroLineColor:"rgba(160,160,160,0.1)"
                    }
                }]
            }
    }
});

$('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 240,
    itemMargin: 26,
    controlNav: false
});


/* prgress cricle */
$('.progress-success').circleProgress({ 
    fill: {gradient: ['#2dc1c9', '#0d769f   ']},
    lineCap: 'butt'
}).on('circle-animation-progress', function(event, progress,stepValue) {
    $(this).find('strong').html(Math.round(100 * progress * stepValue) + '<i>%</i>');
  });
$('.progress-danger').circleProgress({
      fill: {gradient:['#f6775a', '#ed5a7c']},
}).on('circle-animation-progress', function(event, progress,stepValue) {
    $(this).find('strong').html(Math.round(100 * progress * stepValue) + '<i>%</i>');
  });
$('.progress-warning').circleProgress({ 
    fill: {gradient: ['#ff9300', '#ff5800']},
    lineCap: 'butt'
}).on('circle-animation-progress', function(event, progress,stepValue) {
    $(this).find('strong').html(Math.round(100 * progress * stepValue) + '<i>%</i>');
  });
$('.progress-primary').circleProgress({ 
    fill: {gradient: ['#a758f5', '#7a79fe']},
    lineCap: 'butt'
}).on('circle-animation-progress', function(event, progress,stepValue) {
    $(this).find('strong').html(Math.round(100 * progress * stepValue) + '<i>%</i>');
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