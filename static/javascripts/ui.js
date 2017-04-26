$(document).ready(function () {

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('.page-scroll a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 0)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });

  setTimeout(function(){
    $('ul.list-inline.animated.bounceInUp.hidden').removeClass('hidden');
  },700);

  setTimeout(function(){
    $('hr.fancy-hr.animated.fadeIn.hidden').removeClass('hidden');
  },300)

  //open modal, then initiate Slick carousel after short delay
  $('.btn-modal').on('click', function(){
    setTimeout(function(){
      $('.slick-carousel').slick({
        dots: true
      });
    },251);
  });
});

