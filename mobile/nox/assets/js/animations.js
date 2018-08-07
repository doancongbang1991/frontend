$(document).on('ready', function (e) {
    dashboardAnim();
});

$$(document).on('pageAfterAnimation', function (e) {
    dashboardAnim();
});

function dashboardAnim() {

    findElement('.anim-logo').scrollAnimate({
        scrollContent: findElement('.page-content'),
        startScroll: 0,
        endScroll: 70,
        cssProperty: 'opacity',
        before: 1,
        after: 0
    });

    $('.anim-logo-small').scrollAnimate({
        scrollContent: findElement('.page-content'),
        startScroll: 70,
        endScroll: 120,
        cssProperty: 'opacity',
        before: 0,
        after: 1
    });

    findElement('.anim-svg').scrollAnimate({
        scrollContent: findElement('.page-content'),
        startScroll: 70,
        endScroll: 120,
        cssProperty: 'bottom',
        before: -28,
        after: 1
    });

    $('.anim-navbar').scrollAnimate({
        scrollContent: findElement('.page-content'),
        startScroll: 100,
        endScroll: 200,
        cssProperty: 'add-class',
        after: 'navbar-color-primary'
    });

}