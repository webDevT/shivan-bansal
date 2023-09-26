$(function(){
    $('.menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.menu').slideToggle();
    });
  

$('.view-all-button').click(function(){
    $(this).hide();
    $('.blog').addClass('active');
})

$('.project-card .button').click(function() {
    $(this).parent().parent().find('.project-description-modal').fadeIn();
})

$('.close-btn').click(function(){
    $('.project-description-modal').fadeOut();
})

$(".menu").on("click","a", function (event) {

   
    event.preventDefault();



    var id  = $(this).attr('href'),



    top = $(id).offset().top;


    $('body,html').animate({scrollTop: top}, 1500);

});

});
if($(window).width() < 768) {
$('.menu__link').click(function(){
    $('.menu').slideUp();
    $('.menu-btn').removeClass('active');
})
}