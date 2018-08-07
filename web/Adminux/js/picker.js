"use strict";

$('#colorpickerHolder').ColorPicker({flat: true});
$('#colorpickerHolder2').ColorPicker({
        flat: true,
        color: '#00ff00',
        onSubmit: function(hsb, hex, rgb) {
            $('#colorSelector2 div').css('backgroundColor', '#' + hex);
    }
});
$('#colorpickerHolder2>div').css('position', 'absolute');
var widt = false;
$('#colorSelector2').bind('click', function() {
$('#colorpickerHolder2').stop().animate({height: widt ? 0 : 173}, 500);
        widt = !widt;
});
$('#colorpickerField1, #colorpickerField2, #colorpickerField3').ColorPicker({
        onSubmit: function(hsb, hex, rgb, el) {
                $(el).val(hex);
                $(el).ColorPickerHide();
        },
        onBeforeShow: function () {
            $(this).ColorPickerSetColor(this.value);
        }
})
.bind('keyup', function(){
    $(this).ColorPickerSetColor(this.value);
});
$('#colorSelector').ColorPicker({
    color: '#0000ff',
    onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
        return false;
        },
    onChange: function (hsb, hex, rgb) {
        $('#colorSelector div').css('backgroundColor', '#' + hex);
    }
});


$('#datepicker').datepicker({});
$('#datepicker_month').datepicker({
    startView: 1,
     autoclose: true
});

$('#datepicker_month_disabled').datepicker({
    startView: 1,
    clearBtn: true,
    orientation: "bottom auto",
    daysOfWeekDisabled: "0,6",
     autoclose: true
});

$('#datepicker_month_disabled_weeks').datepicker({
    startView: 1,
    clearBtn: true,
    orientation: "bottom auto",
    daysOfWeekDisabled: "0,6",
    calendarWeeks: true,
    autoclose: true
});

$('#range.input-daterange').datepicker({
    startView: 1,
    clearBtn: true,
    orientation: "bottom auto",
    daysOfWeekDisabled: "0,6",
    calendarWeeks: true,
    autoclose: true
});