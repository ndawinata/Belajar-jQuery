$(document).ready(function () {
    $('h1').css('color', 'blue');
    $('#box1').css('color', 'red');
    $('.boxes').css('color', 'blue');
    $('.boxes:first').css('color', 'green');
    $('.boxes:last').css('color', 'aqua');
    $('.boxes:eq(2)').css('color', 'purple');

    //menggunaklan events
    $('h1').click(function () {
        $('h1').css('color', 'red');
    });
    $('h1').mouseenter(function () {
        $('h1').css('color', 'yellow');
    });
    $('h1').mouseleave(function () {
        $('h1').css('color', 'green');
    });
    $('.boxes:eq(3)').mouseenter(function () {
        $('.boxes:eq(3)').css('color', 'yellow');
    });
});