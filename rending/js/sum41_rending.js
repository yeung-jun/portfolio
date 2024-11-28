$(function(){
    AOS.init();
    $('.eg').click(function(){
        $('.eg p').stop().toggle('slow');
    });
});