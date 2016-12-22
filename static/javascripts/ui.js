$(document).ready(function () {

  //animated down-arrow in header:
  var animateArrow = function animateArrow(){
    $('.down-arrow').toggleClass('animated rubberBand')
  }

  setInterval(animateArrow,1500);
});

