"use strict"
$.notify({
	// options
	icon: 'fa fa-info',
	title: 'Bootstrap notify',
	message: 'Turning standard Bootstrap alerts into "notify" like notifications',
	url: 'https://github.com/mouse0270/bootstrap-notify',
	target: '_blank'
},{
	// settings
	element: 'body',
	position: null,
	type: "info",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "right"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 2000,
	timer: 1000,
	url_target: '_blank',
	mouse_over: null,
	animate: {
		enter: 'animated fadeInDown',
		exit: 'animated fadeOutUp'
	},
	icon_type: 'class'
});

$("#topleft").on("click", function(){
   $.notify({
        title:"Basic Notification",
        message: 'Bootstrap alerts into "notify" like notifications',
        },{
        // settings
        element: 'body',
        position: null,
       type: "info",
       placement: {
            from: "top",
            align: "left"
        }
    });     
});
$("#topright").on("click", function(){
   $.notify({
        title:"Basic Notification",
        message: 'Bootstrap alerts into "notify" like notifications',
        },{
        // settings
        element: 'body',
        position: null,
        type: "success",
       placement: {
            from: "top",
            align: "right"
        }
    });     
});
$("#topcenter").on("click", function(){
   $.notify({
        title:"Basic Notification",
        message: 'Bootstrap alerts into "notify" like notifications',
        },{
        // settings
        element: 'body',
        position: null,
        type: "primary",
       placement: {
            from: "top",
            align: "center"
        }
    });     
});
$("#bottomleft").on("click", function(){
   $.notify({
        title:"Basic Notification",
        message: 'Bootstrap alerts into "notify" like notifications',
        },{
        // settings
        element: 'body',
        position: null,
       type: "danger",
       placement: {
            from: "bottom",
            align: "left"
        }
    });     
});
$("#bottomright").on("click", function(){
   $.notify({
        title:"Basic Notification",
        message: 'Bootstrap alerts into "notify" like notifications',
        },{
        // settings
        element: 'body',
        position: null,
        type: "warning",
       placement: {
            from: "bottom",
            align: "right"
        }
    });     
});
$("#bottomcenter").on("click", function(){
   $.notify({
        title:"Basic Notification",
        message: 'Bootstrap alerts into "notify" like notifications',
        },{
        // settings
        element: 'body',
        position: null,
        type: "info",
       placement: {
            from: "bottom",
            align: "center"
        }
    });     
});