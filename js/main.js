$(window).scroll(function(){
    if ($(window).scrollTop()>100){
        $("#back-to-top").fadeIn(500);
        $("#back-to-top").css('display','flex');
    }
    else
    {
        $("#back-to-top").fadeOut(500);
    }
});
//back to top
$("#back-to-top").click(function(){
    $('body,html').animate({scrollTop:0},500);
    return false;
});

$('#humburgerTrigger').click(function(){
    $('body').toggleClass('ismobile');
});