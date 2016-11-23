$(document).ready(function () {

  //mark current page as active in navbar:
  var urlArray = window.location.pathname.split('/');
  var urlLastStep = urlArray[urlArray.length-1];
  // url = url.substring(1, url.length-1);
  $('#' + urlLastStep).addClass('active');

  //initialize Bootstrap popovers:
  $(function () {
    $('[data-toggle="popover"]').popover();
  });

});

