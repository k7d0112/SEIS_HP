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

});
