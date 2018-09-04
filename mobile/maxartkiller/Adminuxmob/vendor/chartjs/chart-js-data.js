/*!
 * Adminux (http://maxartkiller.com)
 * Copyright 2017 The Adminux Author: Maxartkiller
 * purchase licence before use
 * You can not resale or modify without prior licences.
*/

/* Dashboard chart combo line and bar */
bar();
function bar(){
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
     
        var ctx = $("#mixchartfull");
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
                            fontColor:"#b7c8ff"}
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: "#b7c8ff",                       
                            },
                            gridLines:{
                                color:"rgba(255,255,255,0.05)",
                                zeroLineColor:"rgba(255,255,255,0.2)"
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: "#b7c8ff"
                            },
                            gridLines:{
                                color:"rgba(255,255,255,0.05)",
                                zeroLineColor:"rgba(255,255,255,0.2)"
                            }
                        }]
                    }
                }
            });
 
   
         setInterval(function(){
                barChartData.datasets.forEach(function(dataset) {
                dataset.data = dataset.data.map(function() { 
                    return randomScalingFactor();
                })
            });
            window.myBar.update();             
         }, 3000);
      

}



bubblechart();
function bubblechart(){

     var DEFAULT_DATASET_SIZE = 7;

        var addedCount2 = 0;
        var color2 = Chart.helpers.color;
        var bubbleChartData = {
            animation: {
                duration: 10000
            },
            datasets: [{
                label: "My First dataset",
                backgroundColor: color2(window.chartColors.red).alpha(0.5).rgbString(),
                borderColor: window.chartColors.red,
                borderWidth: 1,
                data: [{
                    x: randomScalingFactor(),
                    y: randomScalingFactor(),
                    r: Math.abs(randomScalingFactor()) / 5,
                }, {
                    x: randomScalingFactor(),
                    y: randomScalingFactor(),
                    r: Math.abs(randomScalingFactor()) / 5,
                }, {
                    x: randomScalingFactor(),
                    y: randomScalingFactor(),
                    r: Math.abs(randomScalingFactor()) / 5,
                }, {
                    x: randomScalingFactor(),
                    y: randomScalingFactor(),
                    r: Math.abs(randomScalingFactor()) / 5,
                }, {
                    x: randomScalingFactor(),
                    y: randomScalingFactor(),
                    r: Math.abs(randomScalingFactor()) / 5,
                }, {
                    x: randomScalingFactor(),
                    y: randomScalingFactor(),
                    r: Math.abs(randomScalingFactor()) / 5,
                }, {
                    x: randomScalingFactor(),
                    y: randomScalingFactor(),
                    r: Math.abs(randomScalingFactor()) / 5,
                }]
            }, {
                label: "My Second dataset",
                backgroundColor: color2(window.chartColors.blue).alpha(0.5).rgbString(),
                borderColor: window.chartColors.blue,
                borderWidth: 1,
                data: [{
                    x: randomScalingFactor(),
                    y: randomScalingFactor(),
                    r: Math.abs(randomScalingFactor()) / 5,
                }, {
                    x: randomScalingFactor(),
                    y: randomScalingFactor(),
                    r: Math.abs(randomScalingFactor()) / 5,
                }, {
                    x: randomScalingFactor(),
                    y: randomScalingFactor(),
                    r: Math.abs(randomScalingFactor()) / 5,
                }, {
                    x: randomScalingFactor(),
                    y: randomScalingFactor(),
                    r: Math.abs(randomScalingFactor()) / 5,
                }, {
                    x: randomScalingFactor(),
                    y: randomScalingFactor(),
                    r: Math.abs(randomScalingFactor()) / 5,
                }, {
                    x: randomScalingFactor(),
                    y: randomScalingFactor(),
                    r: Math.abs(randomScalingFactor()) / 5,
                }, {
                    x: randomScalingFactor(),
                    y: randomScalingFactor(),
                    r: Math.abs(randomScalingFactor()) / 5,
                }]
            }]
        };

        window.onload = function() {
            var ctx2 = document.getElementById("bubble").getContext("2d");
            window.myChart2 = new Chart(ctx2, {
                type: 'bubble',
                data: bubbleChartData,
                options: {
                    responsive: true,
                    title:{
                        display:false,
                        text:'Chart.js Bubble Chart'
                    },
                    tooltips: {
                        mode: 'point'
                    },
                    legend: {
                        labels:{ 
                            fontColor:"#b7c8ff"}
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: "#b7c8ff",                       
                            },
                            gridLines:{
                                color:"rgba(255,255,255,0.05)",
                                zeroLineColor:"rgba(255,255,255,0.2)"
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: "#b7c8ff"
                            },
                            gridLines:{
                                color:"rgba(255,255,255,0.05)",
                                zeroLineColor:"rgba(255,255,255,0.2)"
                            }
                        }]
                    }
                }
            });
        };

    
      setInterval(function(){
              bubbleChartData.datasets.forEach(function(dataset) {
                dataset.data = dataset.data.map(function() {
                    return {
                        x: randomScalingFactor(),
                        y: randomScalingFactor(),
                        r: Math.abs(randomScalingFactor()) / 5,
                    };
                });
            });
            window.myChart2.update();          
         }, 1500);
      

}

