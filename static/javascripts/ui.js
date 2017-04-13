$(document).ready(function () {

  setTimeout(function(){
    $('ul.list-inline.animated.bounceInUp.hidden').removeClass('hidden');
  },700);

  setTimeout(function(){
    $('hr.fancy-hr.animated.fadeIn.hidden').removeClass('hidden');
  },300)

  // trigger card flip on user click or scrolling down the page
  $('.door').on('click', flipTheCard);
  $(window).scroll(function() {
      var height = $(window).scrollTop();
      if(height  > 120) {
        flipTheCard();
      }
  });

  function flipTheCard() {
    var $door = $('.door');

    //immediate transitions:
    $door.removeClass('flipped')
    $('.inner-door').css('background-color','rgb(235,235,235)');
    
    //transitions delayed 400ms:
    setTimeout(function(){
      $door.css('transition','1s')
        .addClass('no-shadow');
      $('body').css('background-color','#d8dadc');
    }, 400);
    
    //transitions delayed 600ms:
    setTimeout(function(){
      $('.nav-links').removeClass('hidden');
      $('.fancy-hr').removeClass('hidden');
    }, 600);
  }

  //initialize Slick:
  // $('.slick-carousel').slick({
  //   dots: true
  // });

  $('.btn-modal').on('click', function(){
    setTimeout(function(){
      $('.slick-carousel').slick({
        dots: true
      });
    },251);
  });
});

