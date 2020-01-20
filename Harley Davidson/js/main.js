$(document).ready(function () {


  //Nav menu
  document.querySelector('.menu-icon-wrapper').onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  }



  $(".owl-carousel").owlCarousel({
    items: 1
  });

  //Scroll to top
  const scrollBtn = $('.scroll-to-top');

  //По скроллу- скрываем или показываем кнопку
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      scrollBtn.fadeIn('slow');
    } else {
      scrollBtn.fadeOut('slow');
    }
  })

  //Клик по кнопке
  scrollBtn.click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 550);
    return false;
  })

  //MixItUp 
  var mixer = mixitup('.products__row');

});