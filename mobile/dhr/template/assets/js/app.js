/*
Template Name: DHR - HTML Mobile Template
Author: Dreamguy's Technologies
Version:1.0
*/


// Dom7

var $$ = Dom7;

// Framework7 App main instance

var app  = new Framework7({
	root: '#app', // App root element
	id: 'com.myapp.test',
	name: 'Framework7', // App name
	theme: 'ios', 
	// App root methods
	methods: {
		helloWorld: function () {
		app.dialog.alert('Hello World!');
		},
	},
	view: {
		iosDynamicNavbar: false,
		xhrCache: false,
	},
	photoBrowser: {
		type: 'popup',
	},
	popup: {
		closeByBackdropClick: false,
	},
	actions: {
		convertToPopover: false,
		grid: true,
	},
	// App routes
	routes: routes,
	on: {
    pageInit(page) {
      if (page.name === 'index') {
		getchart();
      }
    },
	pageAfterIn(page) {
      if (page.name === 'index') {
		getchart();
      }
    },
  }
});

// Sidebar

! function($) {
    "use strict";
    var Sidemenu = function() {
        this.$menuItem = $("#sidebar-menu a");
    };

	Sidemenu.prototype.init = function() {
		var $this = this;
		$this.$menuItem.on('click', function(e) {
		if ($(this).parent().hasClass("submenu")) {
			e.preventDefault();
		}
		if (!$(this).hasClass("subdrop")) {
			$("ul", $(this).parents("ul:first")).slideUp(350);
			$("a", $(this).parents("ul:first")).removeClass("subdrop");
			$(this).next("ul").slideDown(350);
			$(this).addClass("subdrop");
		} else if ($(this).hasClass("subdrop")) {
			$(this).removeClass("subdrop");
			$(this).next("ul").slideUp(350);
		}
	});
		$("#sidebar-menu ul li.submenu a.active").parents("li:last").children("a:first").addClass("active").trigger("click");
	},
	$.Sidemenu = new Sidemenu;

}(window.jQuery),


$(document).ready(function($) {
	
	// Sidebar Initiate
	
	$.Sidemenu.init();
});

/* Chart */

function getchart(){
	
	// Bar Chart

	var barChartData = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],

		
		datasets: [{
			label: 'Dataset 1',
			backgroundColor: 'rgba(58, 87, 196, 0.6)',
			borderColor: 'rgba(58, 87, 196, 1))',
			borderWidth: 1,
			data: [35, 59, 80, 81, 56, 55, 40]
		}, {
			label: 'Dataset 2',
			backgroundColor: 'rgba(252, 96, 117, 0.5)',
			borderColor: 'rgba(252, 96, 117, 1)',
			borderWidth: 1,
			data: [28, 48, 40, 19, 86, 27, 90]
		}]

	};

	var ctx = document.getElementById('bargraph').getContext('2d');
	window.myBar = new Chart(ctx, {
		type: 'bar',
		data: barChartData,
		options: {
			responsive: true,
			legend: {
				display: false,
			}
		}
	});
	
	// Line Chart

	var lineChartData = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],

		datasets: [{
			label: 'My First dataset',
			backgroundColor: 'rgba(58, 87, 196, 0.2)',
			borderColor: 'rgba(58, 87, 196, 1)',
			pointBackgroundColor: 'rgba(58, 87, 196, 1)',
			borderWidth: 2,
			data: [35, 59, 80, 81, 56, 55, 40],
			
		}, {
			label: 'My Second dataset',
			backgroundColor: 'rgba(252, 96, 117, 0.2)',
			borderColor: 'rgba(252, 96, 117, 1)',
			pointBackgroundColor: 'rgba(252, 96, 117, 1)',
			borderWidth: 2,
			data: [28, 48, 40, 19, 86, 27, 90],
		}]

	};

	var linectx = document.getElementById('canvas').getContext('2d');
	window.myLine = new Chart(linectx, {
	type: 'line',
	data: lineChartData,
	options: {
		responsive: true,
		legend: {
			display: false,
		},
		tooltips: {
			mode: 'index',
			intersect: false,
		}
	}
	});
}