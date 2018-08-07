// Initialize app
function findElement(selector) {
    var box = null;
    return box = $(".page-on-center").length > 0 ? $(".view-main").find(".page-on-center " + selector) : $(".view-main").find(".page").find(selector);
}

function naxvarBg() {
    var navbar = $(".navbar-anim-on-scroll"), box = null, cls = "active";
    return 0 === navbar.length ? !1 : (box = navbar.next().find($(".page-on-center").length > 0 ? ".page-on-center .page-content" : ".page .page-content"), 
    box.scrollTop() > 10 ? navbar.addClass(cls) : navbar.removeClass(cls), void box.scroll(function() {
        $(this).scrollTop() > 40 ? navbar.addClass(cls) : navbar.removeClass(cls);
    }));
}

function showLineChart(obj) {
    var data = {
        labels: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ],
        datasets: [ {
            label: "My dataset",
            fillColor: "rgba(76, 175, 142, 0.2)",
            strokeColor: "rgba(76, 175, 142, 1)",
            pointColor: "rgba(76, 175, 142, 1)",
            pointStrokeColor: "rgba(76, 175, 142, 1)",
            pointHighlightFill: "rgba(255, 255, 255, 1)",
            pointHighlightStroke: "rgba(76, 175, 142, 1)",
            data: [ 65, 59, 80, 81, 56, 55, 40 ]
        } ]
    }, chart = new Chart(obj).Line(data, {
        responsive: !0,
        pointDotRadius: 6,
        pointDotStrokeWidth: 2,
        datasetStrokeWidth: 3,
        scaleFontSize: 10,
        tooltipFontSize: 12,
        scaleLineColor: "rgba(255, 255, 255, 0.7)",
        scaleFontColor: "rgba(255, 255, 255, 0.7)",
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !1
    });
    return chart;
}

function showLineChartPage(obj) {
    var data = {
        labels: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ],
        datasets: [ {
            label: "My dataset",
            fillColor: "rgba(76, 175, 142, 0.2)",
            strokeColor: "rgba(76, 175, 142, 1)",
            pointColor: "rgba(76, 175, 142, 1)",
            pointStrokeColor: "rgba(76, 175, 142, 1)",
            pointHighlightFill: "rgba(255, 255, 255, 1)",
            pointHighlightStroke: "rgba(76, 175, 142, 1)",
            data: [ 65, 59, 80, 81, 56, 55, 40 ]
        }, {
            label: "My dataset 2",
            fillColor: "rgba(224, 61, 14, 0.2)",
            strokeColor: "rgba(224, 61, 14, 1)",
            pointColor: "rgba(224, 61, 14, 1)",
            pointStrokeColor: "rgba(224, 61, 14, 1)",
            pointHighlightFill: "rgba(255, 255, 255, 1)",
            pointHighlightStroke: "rgba(224, 61, 14, 1)",
            data: [ 32, 34, 67, 12, 37, 55, 20 ]
        } ]
    }, chart = new Chart(obj).Line(data, {
        responsive: !0,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        datasetStrokeWidth: 2,
        scaleFontSize: 10,
        tooltipFontSize: 12,
        scaleLineColor: "rgba(255, 255, 255, 0.7)",
        scaleFontColor: "rgba(255, 255, 255, 0.7)",
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !1
    });
    return chart;
}

function showBarChartPage(obj) {
    var data = {
        labels: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ],
        datasets: [ {
            label: "My dataset",
            fillColor: "rgba(76, 175, 142, 0.2)",
            strokeColor: "rgba(76, 175, 142, 1)",
            pointColor: "rgba(76, 175, 142, 1)",
            pointStrokeColor: "rgba(255, 255, 255, 1)",
            pointHighlightFill: "rgba(255, 255, 255, 1)",
            pointHighlightStroke: "rgba(76, 175, 142, 1)",
            data: [ 65, 59, 80, 81, 56, 55, 40 ]
        }, {
            label: "My dataset 2",
            fillColor: "rgba(224, 61, 14, 0.2)",
            strokeColor: "rgba(224, 61, 14, 1)",
            pointColor: "rgba(224, 61, 14, 1)",
            pointStrokeColor: "rgba(255, 255, 255, 1)",
            pointHighlightFill: "rgba(255, 255, 255, 1)",
            pointHighlightStroke: "rgba(224, 61, 14, 1)",
            data: [ 32, 34, 67, 12, 37, 55, 20 ]
        } ]
    }, chart = new Chart(obj).Bar(data, {
        responsive: !0,
        pointDotRadius: 2,
        pointDotStrokeWidth: 1,
        datasetStrokeWidth: 1,
        scaleFontSize: 10,
        tooltipFontSize: 12,
        scaleLineColor: "rgba(255, 255, 255, 0.7)",
        scaleFontColor: "rgba(255, 255, 255, 0.7)",
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !1
    });
    return chart;
}

function showPieChartPage(obj) {
    var data = [ {
        value: 300,
        color: "rgba(76, 175, 142, 1)",
        highlight: "rgba(76, 175, 142, 0.5)",
        label: "Text 1"
    }, {
        value: 50,
        color: "rgba(224, 61, 14, 1)",
        highlight: "rgba(224, 61, 14, 0.5)",
        label: "Text 2"
    }, {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Text 3"
    } ], chart = new Chart(obj).Pie(data, {
        responsive: !0,
        tooltipFontSize: 12
    });
    return chart;
}

function showDoughnutChartPage(obj) {
    var data = [ {
        value: 300,
        color: "rgba(76, 175, 142, 1)",
        highlight: "rgba(76, 175, 142, 0.5)",
        label: "Text 1"
    }, {
        value: 50,
        color: "rgba(224, 61, 14, 1)",
        highlight: "rgba(224, 61, 14, 0.5)",
        label: "Text 2"
    }, {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Text 3"
    } ], chart = new Chart(obj).Doughnut(data, {
        responsive: !0,
        tooltipFontSize: 12
    });
    return chart;
}

function showRadarChartPage(obj) {
    var data = {
        labels: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ],
        datasets: [ {
            label: "My dataset",
            fillColor: "rgba(76, 175, 142, 0.2)",
            strokeColor: "rgba(76, 175, 142, 1)",
            pointColor: "rgba(76, 175, 142, 1)",
            pointStrokeColor: "rgba(76, 175, 142, 1)",
            pointHighlightFill: "rgba(255, 255, 255, 1)",
            pointHighlightStroke: "rgba(76, 175, 142, 1)",
            data: [ 65, 59, 80, 81, 56, 55, 40 ]
        }, {
            label: "My dataset 2",
            fillColor: "rgba(224, 61, 14, 0.2)",
            strokeColor: "rgba(224, 61, 14, 1)",
            pointColor: "rgba(224, 61, 14, 1)",
            pointStrokeColor: "rgba(224, 61, 14, 1)",
            pointHighlightFill: "rgba(255, 255, 255, 1)",
            pointHighlightStroke: "rgba(224, 61, 14, 1)",
            data: [ 32, 34, 67, 12, 37, 55, 20 ]
        } ]
    }, chart = new Chart(obj).Radar(data, {
        responsive: !0,
        pointDotRadius: 3,
        pointDotStrokeWidth: 1,
        datasetStrokeWidth: 2,
        scaleFontSize: 10,
        tooltipFontSize: 12,
        scaleLineColor: "rgba(255, 255, 255, 0.7)",
        scaleFontColor: "rgba(255, 255, 255, 0.7)",
        pointLabelFontColor: "rgba(255, 255, 255, 0.7)",
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !1
    });
    return chart;
}

function showPolarChartPage(obj) {
    var data = [ {
        value: 300,
        color: "rgba(76, 175, 142, 1)",
        highlight: "rgba(76, 175, 142, 0.5)",
        label: "Text 1"
    }, {
        value: 50,
        color: "rgba(224, 61, 14, 1)",
        highlight: "rgba(224, 61, 14, 0.5)",
        label: "Text 2"
    }, {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Text 3"
    } ], chart = new Chart(obj).PolarArea(data, {
        responsive: !0,
        scaleFontSize: 10,
        tooltipFontSize: 12
    });
    return chart;
}

var myApp = new Framework7({
    swipeBackPage: !1,
    pushState: !0,
    swipePanel: "left",
    modalTitle: "Title"
}), $$ = Dom7;

$$("body").on("click", ".js-add-to-fav", function() {
    myApp.alert("You love this post!", "");
});

var mainView = myApp.addView(".view-main", {
    dynamicNavbar: !0
});

$$(".popup-splash").on("opened", function() {
    myApp.swiper(".swiper-container", {
        speed: 400,
        pagination: ".swiper-pagination",
        paginationBulletRender: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
    });
}), $$(document).on("pageAfterAnimation", function(e) {
    if ($(".page-on-center .chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .chart-content").getContext("2d");
        showLineChart(ctx);
    }
    if ($(".page-on-center .line-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .line-chart-content").getContext("2d");
        showLineChartPage(ctx);
    }
    if ($(".page-on-center .bar-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .bar-chart-content").getContext("2d");
        showBarChartPage(ctx);
    }
    if ($(".page-on-center .pie-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .pie-chart-content").getContext("2d");
        showPieChartPage(ctx);
    }
    if ($(".page-on-center .doughnut-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .doughnut-chart-content").getContext("2d");
        showDoughnutChartPage(ctx);
    }
    if ($(".page-on-center .radar-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .radar-chart-content").getContext("2d");
        showRadarChartPage(ctx);
    }
    if ($(".page-on-center .polar-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .polar-chart-content").getContext("2d");
        showPolarChartPage(ctx);
    }
    naxvarBg();
}), $$(document).on("pageInit", function(e) {
    var page = e.detail.page;
    myApp.calendar({
        input: "#ks-calendar-default"
    }), myApp.calendar({
        input: "#calendar-multiple",
        dateFormat: "M dd yyyy",
        multiple: !0
    }), myApp.calendar({
        input: "#calendar-range",
        dateFormat: "M dd yyyy",
        rangePicker: !0
    });
    var today = new Date(), weekLater = new Date().setDate(today.getDate() + 7);
    myApp.calendar({
        input: "#calendar-disabled",
        dateFormat: "M dd yyyy",
        disabled: {
            from: today,
            to: weekLater
        }
    }), myApp.calendar({
        container: "#calendar-inline-container",
        value: [ new Date() ]
    }), $$(".notification-default").on("click", function() {
        myApp.addNotification({
            title: "Framework7",
            message: "This is a simple notification message with title and message"
        });
    }), $$(".notification-full").on("click", function() {
        myApp.addNotification({
            title: "Framework7",
            subtitle: "Notification subtitle",
            message: "This is a simple notification message with custom icon and subtitle",
            media: '<i class="icon icon-f7"></i>'
        });
    }), $$(".notification-custom").on("click", function() {
        myApp.addNotification({
            title: "My Awesome App",
            subtitle: "New message from John Doe",
            message: "Hello, how are you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut posuere erat. Pellentesque id elementum urna, a aliquam ante. Donec vitae volutpat orci. Aliquam sed molestie risus, quis tincidunt dui.",
            media: '<img width="44" height="44" style="border-radius:100%" src="http://lorempixel.com/output/people-q-c-100-100-9.jpg">'
        });
    }), $$(".notification-callback").on("click", function() {
        myApp.addNotification({
            title: "My Awesome App",
            subtitle: "New message from John Doe",
            message: "Hello, how are you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut posuere erat. Pellentesque id elementum urna, a aliquam ante. Donec vitae volutpat orci. Aliquam sed molestie risus, quis tincidunt dui.",
            media: '<img width="44" height="44" style="border-radius:100%" src="http://lorempixel.com/output/people-q-c-100-100-9.jpg">',
            onClose: function() {
                myApp.alert("Notification closed");
            }
        });
    }), $(".zoom").swipebox(), $(".navbar").removeClass("navbar-clear"), ("index" === page.name || "dashboard-1" === page.name || "post" === page.name || "menu" === page.name || "login" === page.name || "registration" === page.name || "article" === page.name || "splash" === page.name) && $(".navbar").addClass("navbar-clear"), 
    $(".twitter-content").length > 0 && $(".twitter-content").twittie({
        count: 10
    }), $(".tweet").length > 0 && $(".tweet").twittie({
        count: 1
    }), $(".flickr-content").length > 0 && $(".flickr-content").jflickrfeed({
        limit: 15,
        qstrings: {
            id: "44244432@N03"
        },
        itemTemplate: '<li><a href="{{image_m}}" class="flickr"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
    }, function(data) {
        $(".flickr-content li a").swipebox();
    }), $(".owl-carousel").length > 0 && $(".owl-carousel").owlCarousel(), $(".js-validate").length > 0 && $("body").on("click", ".js-form-submit", function() {
        var form = $(this).parents("form"), valid = form.valid();
        if ("contact" === page.name && valid) {
            var data = form.serializeObject();
            myApp.showPreloader(), $.post("/email.php", data).done(function(data) {
                myApp.hidePreloader();
                var response = JSON.parse(data);
                response.error ? myApp.alert(response.msg, "") : (myApp.alert(response.msg, ""), 
                form.find("input[type=text], input[type=email], textarea").val(""));
            });
        }
    });
    // Conversation flag
    var conversationStarted = !1, myMessages = myApp.messages(".messages", {
        autoLayout: !0
    }), myMessagebar = myApp.messagebar(".messagebar");
    // Handle message
    $$(".messagebar .link").on("click", function() {
        // Message text
        var messageText = myMessagebar.value().trim();
        // Exit if empy message
        if (0 !== messageText.length) {
            // Empty messagebar
            myMessagebar.clear();
            // Random message type
            var avatar, name, messageType = [ "sent", "received" ][Math.round(Math.random())];
            "received" === messageType && (avatar = "http://lorempixel.com/output/people-q-c-100-100-9.jpg", 
            name = "Kate"), // Add message
            myMessages.addMessage({
                // Message text
                text: messageText,
                // Random message type
                type: messageType,
                // Avatar and name:
                avatar: avatar,
                name: name,
                // Day
                day: conversationStarted ? !1 : "Today",
                time: conversationStarted ? !1 : new Date().getHours() + ":" + new Date().getMinutes()
            }), // Update conversation flag
            conversationStarted = !0;
        }
    });
}), $(document).ready(function() {
    if ((null === localStorage.getItem("newOptions") || localStorage.getItem("newOptions") === !0) && (myApp.popup(".popup-splash"), 
    localStorage.setItem("newOptions", !0)), $(".chart-content").length > 0) {
        var obj = document.querySelector(".chart-content"), ctx = obj.getContext("2d");
        showLineChart(ctx);
    }
    if ($(".line-chart-content").length > 0) {
        var obj = document.querySelector(".line-chart-content"), ctx = obj.getContext("2d");
        showLineChartPage(ctx);
    }
    if ($(".bar-chart-content").length > 0) {
        var obj = document.querySelector(".bar-chart-content"), ctx = obj.getContext("2d");
        showBarChartPage(ctx);
    }
    if ($(".pie-chart-content").length > 0) {
        var obj = document.querySelector(".pie-chart-content"), ctx = obj.getContext("2d");
        showPieChartPage(ctx);
    }
    if ($(".doughnut-chart-content").length > 0) {
        var obj = document.querySelector(".doughnut-chart-content"), ctx = obj.getContext("2d");
        showDoughnutChartPage(ctx);
    }
    if ($(".radar-chart-content").length > 0) {
        var obj = document.querySelector(".radar-chart-content"), ctx = obj.getContext("2d");
        showRadarChartPage(ctx);
    }
    if ($(".polar-chart-content").length > 0) {
        var obj = document.querySelector(".polar-chart-content"), ctx = obj.getContext("2d");
        showPolarChartPage(ctx);
    }
    naxvarBg(), $(".js-toggle-menu").on("click", function() {
        $(this).next().slideToggle(200), $(this).find("span").toggleClass("icon-chevron-down").toggleClass("icon-chevron-up");
    });
}), $.fn.serializeObject = function() {
    var o = {}, a = this.serializeArray();
    return $.each(a, function() {
        void 0 !== o[this.name] ? (o[this.name].push || (o[this.name] = [ o[this.name] ]), 
        o[this.name].push(this.value || "")) : o[this.name] = this.value || "";
    }), o;
};