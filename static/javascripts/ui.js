$(document).ready(function () {
  var arrowWiggles = 0;

  //animated down-arrow in header:
  function animateArrow(){
    $('.down-arrow')
      .first()
      .toggleClass('animated rubberBand');

    //only wiggle 3x:
    arrowWiggles++;
    if(arrowWiggles > 5) {
      clearInterval(arrowInterval);
    }
  }

  $(window).scroll(function() {
      var height = $(window).scrollTop();
      if(height  > 100) {
        $('a.navbar-brand')
          .removeClass('hidden')
          .addClass('animated fadeIn');
      }
  });

  var arrowInterval = setInterval(animateArrow,1000);
});

