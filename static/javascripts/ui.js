$(document).ready(function () {

  //animated down-arrow in header:
  function animateArrow(){
    $('.down-arrow')
      .first()
      .toggleClass('animated rubberBand');
  }

  $(window).scroll(function() {
      var height = $(window).scrollTop();
      if(height  > 100) {
        $('a.navbar-brand')
          .removeClass('hidden')
          .addClass('animated fadeIn');
      }
  });

  setInterval(animateArrow,1000);
});

