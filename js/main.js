$(function () {
  $(function () {
    $('.hamburger').on('click', function () {
      $(this).toggleClass('active');
      $('.header__menu').toggleClass('open');
    });
  });

  $('.header__menu a').on('click', function () {
    $('.hamburger').removeClass('active');
    $('.header__menu').removeClass('open');
  });

  if ($('.slider').length > 0) {
    $('.slider').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      cssEase: 'ease',

      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: false
          }
        }
      ]
    });
  }

  $('.news__content').on('click',function () {
    var moduleId = $(this).data('module');
    $('.module').removeClass('open');
    $('#'+moduleId).addClass('open');
    $('#mask').addClass('open');
    $('body').css('overflow', 'hidden');
  });

  $('#mask,.module__btn').on('click', function (e) {
    e.preventDefault(); 
    $('.module').removeClass('open');
    $('#mask').removeClass('open');
    $(this).removeClass('open');
    $('body').css('overflow', '');
  });

  //logoの表示
  $(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow');
    $("#splash_logo").delay(1200).fadeOut('slow');
  });

});