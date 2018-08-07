"use strict"
// Instance the tour
var tour = new Tour({
  storage:false,
  keyboard: true,
  steps: [
  {
    element: "#one",
    title: "Colors options",
    content: "We have created different css styles to make it awesome and charming",
    placement: "left"  
  },
  {
    element: "#two",
    title: "Profile menu",
    content: "Access user links quickly from side menu user dropdown. Its really quick",
    placement: "right"  
  },
  {
    element: "#three",
    title: "Global search",
    content: "We have provide search with large full screen option to type and get popular results",
    placement: "bottom"  
  },
  {
    element: "#four",
    title: "Quick info",
    content: "Get the most highlighted data in top of dashboard with lots of cuatomized in designs",
    placement: "right"  
  },
  {
    element: "#five",
    title: "Full screen",
    content: "Our full screen container provide facility to view data in full screen. Load more with Ajax",
    placement: "top"  
  }
]});

// Initialize the tour
tour.init();


setTimeout(function(){
    // Start the tour
    tour.start();
},1000);  