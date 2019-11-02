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

    $('form').submit(function () {
        let tulisan = $('#inputText').val();
        $('h1').text(tulisan);

        //mencegah reload
        event.preventDefault();
    });

    // merubahah hanya textnya saja
    $('.boxes:eq(4)').text('hahaha');
    //merubah dengan tambahan element
    //$('.boxes:eq(5)').html('<h1> Bold </h1>');

    //menambahkan dan menghapus
    //append prepend | after before
    //diakhir
    $('#boxes_wrap').append('<div>Halo</div>');
    $('#boxes_wrap').after('<div>Halo1</div>');
    //diawal
    $('#boxes_wrap').prepend('<div>Halo2</div>');
    $('#boxes_wrap').before('<div>Halo3</div>');

    //remove dan empty
    $('.boxes:eq(2)').remove();
    $('.boxes:eq(3)').empty();

    //edit css jquery
    $('h2').css({
        'color': 'red',
        'fontSize': '20px',
        'backgroundColor': '#ccc'
    });
    $('h3:eq(0)').click(function () {
        $('h3:eq(0)').addClass('change');
    });
    $('h3:eq(1)').click(function () {
        $('h3:eq(1)').removeClass('change');
    });
    $('h3:eq(2)').click(function () {
        $('h3:eq(2)').toggleClass('change');
    });

    //--- dimensi -----

    // innerwidth -> kontent + padding
    // outerWidth -> kontent + padding + border (+true ->hitung marginnya)
    // let nilai = $('#boxes_wrap').height();
    // let nilai = $('#boxes_wrap').width();
    // let nilai = $('#boxes_wrap').innerHeight();
    // let nilai = $('#boxes_wrap').innerWidth();
    // let nilai = $('#boxes_wrap').outerWidth();
    //let nilai = $('#boxes_wrap').outerWidth(true);
    // ----mengubah nilai dimensi------
    $('#boxes_wrap').width(120).height(120);

    // $('#box1').text(nilai);

    // -------menampilkan dan menyembunyikan------
    // $('#btn1').click(function () {
    //     $('#box1').show();
    // })

    // $('#btn2').click(function () {
    //     $('#box1').hide();
    // })

    // $('#btn3').click(function () {
    //     $('#box1').toggle();
    // })

    // ada efek animasi
    // $('#btn1').click(function () {
    //     $('#box1').fadeIn(2000);
    // })

    // $('#btn2').click(function () {
    //     $('#box1').fadeOut(2000);
    // })

    // $('#btn3').click(function () {
    //     $('#box1').fadeToggle();
    //     })
    // ada waktu dan opasity
    // $('#btn3').click(function () {
    //     $('#box1').fadeTo(2000, 0.5);
    // })
    $('#btn1').click(function () {
        $('#boxes_wrap').slideDown(2000);
    })

    $('#btn2').click(function () {
        $('#boxes_wrap').slideUp(2000);
    })

    $('#btn3').click(function () {
        $('#boxes_wrap').toggle();
    })

    //stop animasi - callback - chaining
    $('#btn4').click(function () {
        $('#boxes_wrap').stop();
    })
    // ---callback----
    $('#btn5').click(function () {
        $('#boxes_wrap').slideDown(2000, function () {
            alert('selesai');
        });
    })

    // --chaining---
    $('#btn6').click(function () {
        $('#boxes_wrap').slideUp(2000).fadeIn(2000).fadeTo(2000, 0.5);
    })

    // ----- Transversing------
    // $('li').first().css('color', 'red');
    // $('li').eq(1).css('color', 'cyan');
    // $('li').last().css('color', 'green');

    // $('li').filter('#css').css('fontSize', '25px');
    // $('li').not('#css').css('background', 'yellow')

    // -----siblings next nextAll nextUntil('param') ~prev 
    $('#css').siblings().css('fontSize', '20px');
    $('#css').nextUntil('#db').css('color', 'red');
    // $('#css').next().css('color', 'red');
    // $('#css').nextAll().css('color', 'red')
});