$(function(){
    var duration = 300;

    //button1 背景色変化
    $('#button1_1')
        .on('mouseover',function(){
            $(this).stop(true).animate({
                backgroundColor: '#000000',
                color: '#ffffff'
            },duration);
        })

        .on('mouseout',function(){
            $(this).stop(true).animate({
                backgroundColor: 'rgb(239, 239, 239)',
                color: 'rgb(59, 59, 59)'
            },duration);
        });

    //button2　背景色変化
    $('#button1_2')
        .on('mouseenter',function () { 
            $(this).find('> span').stop(true).animate({
                width: '100%'
            },duration,'easeOutQuad');
        })

        .on('mouseleave',function(){
            $(this).find('> span').stop(true).animate({
                width: '0%'
            },duration,'easeOutQuad');
        });


    //test2　キャプションの表示
    $('#test2 p')
        .on('mouseover',function(){
            $(this).find('strong, span').stop(true).animate({
                opacity:1
            },duration);
        })
        .on('mouseleave',function(){
            $(this).find('strong, span').stop(true).animate({
                opacity:0
            },duration);
        });

});
