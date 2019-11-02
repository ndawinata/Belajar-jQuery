$(document).ready(function () {
    $('h1').css('color', 'red');
    $('#box1').css('color', 'red');
    $('.boxes').css('color', 'blue');
    $('.boxes:first').css('color', 'green');
    $('.boxes:last').css('color', 'aqua');
    $('.boxes:eq(2)').css('color', 'purple');
})