

$(window).scroll(function (e) {
    // console.log(e);
    let scrollMove = scrollY
    if(scrollMove > 0){
        $('nav.navbar').addClass('navbar-dark');
        $('nav.navbar').addClass('bg-dark');
    }else{
        $('nav.navbar').removeClass('navbar-dark');
        $('nav.navbar').removeClass('bg-dark');
    }
})
