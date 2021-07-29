$(function () {
    new WOW().init();
    $('.closeIcon').click(function(){
        $('.search-page').fadeOut();
    });
$('.search').click(function(){
        $('.search-page').fadeIn();
    });
})
