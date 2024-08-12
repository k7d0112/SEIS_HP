$(function () {

  // ハンバーガーメニュー
  $('.js-hamburger').click(function(){
    $(this).toggleClass('is-active');
    $(".js-drawer").fadeToggle();
  });
  $('.drawer__link').click(function(){
    $('.js-hamburger').removeClass('is-active');
    $('.js-drawer').fadeToggle();
  });

  $(window).scroll(function(){
    fadeAnime();
  });
});

// fadein
function fadeAnime(){
  $('.js-fadeIn').each(function(){
    var elemPos = $(this).offset().top+200;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll>=elemPos-windowHeight){
      $(this).addClass('fadeIn');
    }
  });
}