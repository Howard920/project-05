// 當滾動滑鼠時，navbar變為白底
$(window).scroll(function (e) {
    // console.log(e);
    let scrollMove = $(window).scrollTop();

    if(scrollMove > 0){
        $('.navbar').addClass('navbar-dark');
        $('.navbar').addClass('bg-dark');
    }else{
        $('.navbar').removeClass('navbar-dark');
        $('.navbar').removeClass('bg-dark');
    }
    console.log(scrollMove);
})



var s = skrollr.init();
